/**
 * ModelLoader.js — 真实城市 GLTF 模型加载器
 *
 * 加载 KayKit City Builder Bits（CC0 授权）的 GLTF 模型：
 * - 建筑：building_A ~ building_H（8 种风格，含/不含底座）
 * - 道路：road_straight / road_corner / road_junction / road_tsplit ...
 * - 车辆：car_hatchback / car_sedan / car_police / car_taxi ...
 * - 道具：streetlight / trafficlight / bench / bush / dumpster / firehydrant ...
 *
 * 所有模型使用同一张 citybits_texture.png 图集贴图（PBR 基础色 + 金属/粗糙度）
 *
 * ================================================================
 * 模型资源来源（CC0 公开免费授权）：
 *   KayKit City Builder Bits by Kay Lousberg
 *   https://github.com/KayKit-Game-Assets/KayKit-City-Builder-Bits-1.0
 *   License: CC0 1.0 Universal (https://creativecommons.org/publicdomain/zero/1.0/)
 *
 * 其他可作为替换/补充的高质量 CC0 城市模型：
 *   Quaternius Downtown City MegaKit (315 模型, CC0)
 *   https://quaternius.com/packs/downtowncitymegakit.html
 *
 *   Kenney City Kit Suburban / Roads (CC0)
 *   https://kenney.nl/assets/city-kit-suburban
 *   https://kenney.nl/assets/city-kit-roads
 *
 *   Poly Haven Models (CC0 photoscanned)
 *   https://polyhaven.com/models
 * ================================================================
 */
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

// 模型基础路径（Vite public 目录，部署后为相对路径 ./models/kaykit/）
const MODEL_BASE = './models/kaykit/';

// 模型清单分类
const MODEL_MANIFEST = {
  buildings: [
    'building_A', 'building_B', 'building_C', 'building_D',
    'building_E', 'building_F', 'building_G', 'building_H',
  ],
  roads: [
    'road_straight', 'road_corner', 'road_junction',
    'road_tsplit', 'road_straight_crossing', 'road_corner_curved',
  ],
  cars: [
    'car_hatchback', 'car_sedan', 'car_police', 'car_taxi',
    'car_stationwagon',
  ],
  props: [
    'streetlight', 'trafficlight_A', 'trafficlight_B', 'trafficlight_C',
    'bench', 'bush', 'dumpster', 'firehydrant',
    'trash_A', 'trash_B', 'box_A', 'box_B', 'watertower',
  ],
};

export class ModelLoader {
  constructor() {
    this.models = {};      // 缓存原始 GLTF 场景
    this.loader = new GLTFLoader();
    this.loaded = false;
  }

  /**
   * 异步加载所有 GLTF 模型
   * @param {LoadingScreen} loadingScreen — 可选，用于显示进度
   */
  async loadAll(loadingScreen) {
    const allKeys = [
      ...MODEL_MANIFEST.buildings,
      ...MODEL_MANIFEST.roads,
      ...MODEL_MANIFEST.cars,
      ...MODEL_MANIFEST.props,
    ];

    let loaded = 0;
    const total = allKeys.length;

    // 并行加载（GLTFLoader 内部已做请求合并）
    const promises = allKeys.map(async (name) => {
      try {
        const gltf = await this.loader.loadAsync(MODEL_BASE + name + '.gltf');
        // 启用阴影
        gltf.scene.traverse((child) => {
          if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
          }
        });
        this.models[name] = gltf.scene;
      } catch (e) {
        console.warn(`[ModelLoader] 加载失败: ${name}`, e.message);
      }
      loaded++;
      if (loadingScreen) {
        loadingScreen.setProgress(40 + (loaded / total) * 15);
        loadingScreen.setStatus(`正在加载城市模型 ${loaded}/${total}`);
      }
    });

    await Promise.all(promises);
    this.loaded = true;
    console.log(`[ModelLoader] 加载完成: ${Object.keys(this.models).length}/${total} 个模型`);
  }

  /**
   * 克隆一个模型（深拷贝，可独立放置/旋转/缩放）
   * @param {string} name — 模型名
   * @returns {THREE.Object3D|null}
   */
  clone(name) {
    const src = this.models[name];
    if (!src) return null;
    // SkeletonUtils.clone 可正确克隆蒙皮，普通模型用 clone(true) 即可
    const cloned = src.clone(true);
    cloned.traverse((child) => {
      if (child.isMesh) {
        // 共享几何体与材质（节省内存），仅矩阵独立
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
    return cloned;
  }

  /** 获取模型列表（按分类） */
  getBuildings() { return MODEL_MANIFEST.buildings.filter(n => this.models[n]); }
  getCars() { return MODEL_MANIFEST.cars.filter(n => this.models[n]); }
  getProps() { return MODEL_MANIFEST.props.filter(n => this.models[n]); }
  getRoads() { return MODEL_MANIFEST.roads.filter(n => this.models[n]); }

  /** 获取模型原始包围盒尺寸（用于碰撞体计算） */
  getModelSize(name) {
    const src = this.models[name];
    if (!src) return { width: 4, depth: 4, height: 8 };
    if (!src._cachedSize) {
      const box = new THREE.Box3().setFromObject(src);
      const size = new THREE.Vector3();
      box.getSize(size);
      src._cachedSize = { width: size.x, depth: size.z, height: size.y };
    }
    return src._cachedSize;
  }

  dispose() {
    // 共享几何体/材质由 GLTFLoader 管理，这里仅清引用
    this.models = {};
    this.loaded = false;
  }
}
