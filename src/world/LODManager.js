/**
 * LODManager.js — LOD 细节层级管理
 *
 * 使用 THREE.LOD 对象实现距离驱动的细节切换：
 * - 近距离：完整 PBR 纹理材质
 * - 中距离：简化材质（纯色，无法线贴图）
 * - 远距离：剔除（不渲染）
 *
 * 每帧调用 update(camera) 自动切换
 */
export class LODManager {
  constructor() {
    this.lodObjects = [];
  }

  /** 注册一个 THREE.LOD 对象 */
  register(lod) {
    this.lodObjects.push(lod);
  }

  /** 每帧更新所有 LOD 对象的距离判定 */
  update(camera) {
    for (let i = 0; i < this.lodObjects.length; i++) {
      this.lodObjects[i].update(camera);
    }
  }

  /** 清空 */
  dispose() {
    this.lodObjects = [];
  }
}
