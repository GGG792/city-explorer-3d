/**
 * SceneManager.js — 场景管理
 *
 * 职责：场景、相机、天空、光照、雾、环境贴图
 * 使用 Three.js Sky 着色器实现真实大气散射天空
 * 使用 PMREMGenerator 从天空生成环境反射贴图（IBL）
 */
import * as THREE from 'three';
import { Sky } from 'three/examples/jsm/objects/Sky.js';

export class SceneManager {
  constructor(quality) {
    this.quality = quality;
    this.scene = null;
    this.camera = null;
    this.sky = null;
    this.sun = null;        // 方向光（太阳）
    this.hemiLight = null;  // 半球光（环境补光）
    this.pmremGenerator = null;
    this.envMapRT = null;   // 环境贴图渲染目标

    // 太阳参数（仰角与方位角，单位：度）
    this.sunElevation = 18;
    this.sunAzimuth = 180;

    // 太阳方向向量（由仰角/方位角计算）
    this.sunDirection = new THREE.Vector3();
  }

  /**
   * 初始化场景、相机、天空、光照
   * @param {THREE.WebGLRenderer} renderer
   */
  init(renderer) {
    this.renderer = renderer;

    // ---------- 场景 ----------
    this.scene = new THREE.Scene();

    // 雾 —— 远距离体积雾化，增强空间层次感
    this.scene.fog = new THREE.FogExp2(
      this.quality.fogColor,
      this.quality.fogDensity
    );

    // ---------- 相机 ----------
    this.camera = new THREE.PerspectiveCamera(
      72, // FOV
      window.innerWidth / window.innerHeight,
      0.1,
      this.quality.farPlane
    );
    this.camera.position.set(0, this.quality.eyeHeight, 0);

    // ---------- 天空（大气散射着色器） ----------
    this.sky = new Sky();
    this.sky.scale.setScalar(this.quality.farPlane * 0.9);
    this.scene.add(this.sky);

    // 天空着色器参数
    const skyUniforms = this.sky.material.uniforms;
    skyUniforms['turbidity'].value = 8;     // 大气浑浊度
    skyUniforms['rayleigh'].value = 2;       // 瑞利散射（天空蓝色）
    skyUniforms['mieCoefficient'].value = 0.005;
    skyUniforms['mieDirectionalG'].value = 0.8;

    // ---------- 光照 ----------
    // 方向光（太阳）—— 带阴影
    this.sun = new THREE.DirectionalLight(0xfff4e6, 3.0);
    this.sun.castShadow = this.quality.shadowMapEnabled;
    this.sun.shadow.mapSize.set(
      this.quality.shadowMapSize,
      this.quality.shadowMapSize
    );
    this.sun.shadow.camera.near = 0.5;
    this.sun.shadow.camera.far = this.quality.shadowCameraFar;
    this.sun.shadow.camera.left = -this.quality.shadowCameraSize;
    this.sun.shadow.camera.right = this.quality.shadowCameraSize;
    this.sun.shadow.camera.top = this.quality.shadowCameraSize;
    this.sun.shadow.camera.bottom = -this.quality.shadowCameraSize;
    this.sun.shadow.bias = this.quality.shadowBias;
    this.sun.shadow.normalBias = 0.02;
    this.scene.add(this.sun);
    this.scene.add(this.sun.target);

    // 半球光 —— 天空/地面环境补光
    this.hemiLight = new THREE.HemisphereLight(0x87b5d9, 0x4a4030, 0.5);
    this.scene.add(this.hemiLight);

    // ---------- 环境贴图（PMREM IBL反射） ----------
    this.pmremGenerator = new THREE.PMREMGenerator(renderer);
    this.pmremGenerator.compileEquirectangularShader();

    // 计算太阳方向并更新天空+光照+环境贴图
    this.updateSun();

    // 关闭阴影贴图自动更新，由 update() 按帧间隔手动触发（降频减负）
    if (this.quality.shadowMapEnabled) {
      this.renderer.shadowMap.autoUpdate = false;
      this.renderer.shadowMap.needsUpdate = true;
    }

    return this.scene;
  }

  /** 根据仰角和方位角更新太阳方向 */
  updateSun() {
    const phi = THREE.MathUtils.degToRad(90 - this.sunElevation);
    const theta = THREE.MathUtils.degToRad(this.sunAzimuth);
    this.sunDirection.setFromSphericalCoords(1, phi, theta);

    // 更新天空着色器中的太阳位置
    this.sky.material.uniforms['sunPosition'].value.copy(this.sunDirection);

    // 方向光位置跟随太阳方向
    this.sun.position.copy(this.sunDirection).multiplyScalar(200);

    // 重新生成环境贴图
    if (this.envMapRT) {
      this.envMapRT.dispose();
    }
    this.envMapRT = this.pmremGenerator.fromScene(this.sky);
    this.scene.environment = this.envMapRT.texture;
  }

  /**
   * 每帧更新 —— 阴影相机跟随玩家移动，并按帧间隔触发阴影贴图重渲
   * @param {THREE.Vector3} playerPosition
   */
  update(playerPosition) {
    if (this.sun && this.sun.castShadow) {
      // 阴影相机中心跟随玩家，保证周围阴影始终清晰
      this.sun.target.position.copy(playerPosition);
      this.sun.position.copy(playerPosition).add(
        this.sunDirection.clone().multiplyScalar(150)
      );
      this.sun.target.updateMatrixWorld();

      // 阴影贴图降频更新（autoUpdate 已关闭，由这里手动触发）
      // 每 shadowUpdateInterval 帧重渲一次阴影贴图
      this._shadowFrame = (this._shadowFrame || 0) + 1;
      if (this._shadowFrame >= this.quality.shadowUpdateInterval) {
        this._shadowFrame = 0;
        this.renderer.shadowMap.needsUpdate = true;
      }
    }
  }

  /** 窗口尺寸变化 */
  resize(width, height) {
    if (this.camera) {
      this.camera.aspect = width / height;
      this.camera.updateProjectionMatrix();
    }
  }

  /** 释放资源 */
  dispose() {
    if (this.envMapRT) {
      this.envMapRT.dispose();
      this.envMapRT = null;
    }
    if (this.pmremGenerator) {
      this.pmremGenerator.dispose();
      this.pmremGenerator = null;
    }
    if (this.scene) {
      this.scene.traverse((obj) => {
        if (obj.geometry) obj.geometry.dispose();
        if (obj.material) {
          if (Array.isArray(obj.material)) {
            obj.material.forEach((m) => m.dispose());
          } else {
            obj.material.dispose();
          }
        }
      });
    }
  }
}
