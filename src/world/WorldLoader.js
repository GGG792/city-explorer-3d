/**
 * WorldLoader.js — 世界流式加载器
 *
 * - 将城市划分为网格 Chunk
 * - 只加载玩家附近的 Chunk，远处延迟加载/卸载
 * - 实现 LODManager 每帧更新
 * - 视距剔除由 Three.js frustumCulled 自动完成
 */
import * as THREE from 'three';
import { LODManager } from './LODManager.js';

export class WorldLoader {
  constructor(cityBuilder, quality) {
    this.cityBuilder = cityBuilder;
    this.quality = quality;
    this.scene = cityBuilder.scene;
    this.activeChunks = new Set();
    this.lodManager = new LODManager();
  }

  init(camera) {
    // 注册 CityBuilder 中所有 LOD 对象
    for (const lod of this.cityBuilder.lodObjects) {
      this.lodManager.register(lod);
    }
    // 初始加载玩家出生点附近的 Chunk
    this.update(new THREE.Vector3(0, 0, 0), camera);
  }

  /**
   * 每帧更新 —— 根据玩家位置加载/卸载 Chunk
   * @param {THREE.Vector3} playerPosition
   * @param {THREE.Camera} camera — 用于 LOD 更新
   */
  update(playerPosition, camera) {
    const cs = this.quality.chunkSize;
    const range = Math.ceil(this.quality.loadDistance / cs);
    const px = Math.floor(playerPosition.x / cs);
    const pz = Math.floor(playerPosition.z / cs);

    // 计算需要加载的 Chunk
    const needed = new Set();
    for (let dx = -range; dx <= range; dx++) {
      for (let dz = -range; dz <= range; dz++) {
        // 圆形范围（比方形更合理）
        if (dx * dx + dz * dz > range * range) continue;
        const key = `${px + dx},${pz + dz}`;
        if (this.cityBuilder.chunks.has(key)) {
          needed.add(key);
          if (!this.activeChunks.has(key)) {
            this.loadChunk(key);
          }
        }
      }
    }

    // 卸载不需要的 Chunk
    for (const key of this.activeChunks) {
      if (!needed.has(key)) {
        this.unloadChunk(key);
      }
    }

    // 更新 LOD
    if (camera) {
      this.lodManager.update(camera);
    }
  }

  /** 加载一个 Chunk —— 将其中所有对象加入场景 */
  loadChunk(key) {
    const chunk = this.cityBuilder.chunks.get(key);
    if (!chunk || chunk.loaded) return;
    for (const obj of chunk.objects) {
      this.scene.add(obj);
    }
    chunk.loaded = true;
    this.activeChunks.add(key);
  }

  /** 卸载一个 Chunk —— 从场景移除对象（释放 DrawCall） */
  unloadChunk(key) {
    const chunk = this.cityBuilder.chunks.get(key);
    if (!chunk || !chunk.loaded) return;
    for (const obj of chunk.objects) {
      this.scene.remove(obj);
    }
    chunk.loaded = false;
    this.activeChunks.delete(key);
  }

  dispose() {
    for (const key of this.activeChunks) {
      this.unloadChunk(key);
    }
    this.lodManager.dispose();
  }
}
