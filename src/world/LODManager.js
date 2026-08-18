/**
 * LODManager.js — LOD 细节层级管理
 *
 * 注册 LOD 对象并按距离更新细节层级
 * 采用降频策略：每 N 帧更新一次，避免每帧遍历所有 LOD 对象造成 CPU 瓶颈
 */
export class LODManager {
  constructor() {
    this.lodObjects = [];
    this.frameCount = 0;
    this.updateInterval = 3; // 每 3 帧更新一次 LOD 距离判断
  }

  /** 注册一个 LOD 对象 */
  register(lod) {
    this.lodObjects.push(lod);
  }

  /**
   * 每帧调用 —— 内部按间隔决定是否真正更新
   * @param {THREE.Camera} camera
   */
  update(camera) {
    this.frameCount++;
    if (this.frameCount < this.updateInterval) return;
    this.frameCount = 0;

    for (let i = 0; i < this.lodObjects.length; i++) {
      this.lodObjects[i].update(camera);
    }
  }

  /** 设置更新频率（1 = 每帧，2 = 每两帧，N = 每 N 帧） */
  setInterval(interval) {
    this.updateInterval = Math.max(1, interval);
  }

  dispose() {
    this.lodObjects = [];
  }
}
