/**
 * PostProcessing.js — 后期处理管线
 *
 * 管线流程：
 *   [SSAOPass 或 RenderPass] → [UnrealBloomPass] → [FXAA] → [OutputPass]
 *
 * - SSAO：环境光遮蔽（仅高端PC）
 * - Bloom：柔和辉光（中高端PC）
 * - FXAA：快速抗锯齿（关闭原生AA时启用）
 * - OutputPass：ACES电影级色调映射 + sRGB色彩空间输出
 */
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { SSAOPass } from 'three/examples/jsm/postprocessing/SSAOPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { FXAAShader } from 'three/examples/jsm/shaders/FXAAShader.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';

export class PostProcessing {
  constructor(renderer, scene, camera, quality) {
    this.renderer = renderer;
    this.scene = scene;
    this.camera = camera;
    this.quality = quality;
    this.composer = null;
    this.ssaoPass = null;
    this.bloomPass = null;
    this.fxaaPass = null;
    this.outputPass = null;
  }

  init() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    this.composer = new EffectComposer(this.renderer);

    // ---- 主渲染 Pass ----
    if (this.quality.ssao) {
      // SSAO Pass 会自行渲染场景，替代 RenderPass
      try {
        this.ssaoPass = new SSAOPass(
          this.scene,
          this.camera,
          width,
          height
        );
        this.ssaoPass.kernelRadius = 8;
        this.ssaoPass.minDistance = 0.002;
        this.ssaoPass.maxDistance = 0.08;
        this.composer.addPass(this.ssaoPass);
      } catch (e) {
        console.warn('[PostFX] SSAO 初始化失败，降级为 RenderPass', e);
        const renderPass = new RenderPass(this.scene, this.camera);
        this.composer.addPass(renderPass);
      }
    } else {
      const renderPass = new RenderPass(this.scene, this.camera);
      this.composer.addPass(renderPass);
    }

    // ---- Bloom 辉光 ----
    if (this.quality.bloom) {
      this.bloomPass = new UnrealBloomPass(
        new THREE.Vector2(width, height),
        this.quality.bloomStrength,
        this.quality.bloomRadius,
        this.quality.bloomThreshold
      );
      this.composer.addPass(this.bloomPass);
    }

    // ---- FXAA 抗锯齿 ----
    if (this.quality.fxaa) {
      this.fxaaPass = new ShaderPass(FXAAShader);
      const pixelRatio = this.renderer.getPixelRatio();
      this.fxaaPass.material.uniforms['resolution'].value.set(
        1 / (width * pixelRatio),
        1 / (height * pixelRatio)
      );
      this.composer.addPass(this.fxaaPass);
    }

    // ---- 色调映射 + 色彩空间输出 ----
    this.outputPass = new OutputPass();
    this.composer.addPass(this.outputPass);

    // 设置尺寸
    this.composer.setSize(width, height);
    this.composer.setPixelRatio(this.renderer.getPixelRatio());
  }

  /** 执行后期渲染 */
  render() {
    if (this.composer) {
      this.composer.render();
    }
  }

  /** 窗口尺寸变化 */
  resize(width, height) {
    if (!this.composer) return;
    this.composer.setSize(width, height);
    this.composer.setPixelRatio(this.renderer.getPixelRatio());

    if (this.ssaoPass) {
      this.ssaoPass.setSize(width, height);
    }
    if (this.bloomPass) {
      this.bloomPass.setSize(width, height);
    }
    if (this.fxaaPass) {
      const pixelRatio = this.renderer.getPixelRatio();
      this.fxaaPass.material.uniforms['resolution'].value.set(
        1 / (width * pixelRatio),
        1 / (height * pixelRatio)
      );
    }
  }

  dispose() {
    if (this.composer) {
      this.composer.dispose();
      this.composer = null;
    }
  }
}
