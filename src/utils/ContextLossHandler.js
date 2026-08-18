/**
 * ContextLossHandler.js — WebGL 上下文丢失恢复处理
 *
 * 手机切后台/锁屏后回来不崩溃、不黑屏
 * 协调各子系统恢复渲染状态：
 * - Renderer: 恢复渲染参数（已在Renderer内部处理）
 * - SceneManager: 重新生成 PMREM 环境贴图
 * - PostProcessing: 重建渲染目标缓冲
 */
export class ContextLossHandler {
  constructor(renderer, sceneManager, postProcessing) {
    this.renderer = renderer;
    this.sceneManager = sceneManager;
    this.postProcessing = postProcessing;
    this._onLost = this.onContextLost.bind(this);
    this._onRestored = this.onContextRestored.bind(this);
  }

  init() {
    const canvas = this.renderer.renderer.domElement;
    canvas.addEventListener('webglcontextlost', this._onLost, false);
    canvas.addEventListener('webglcontextrestored', this._onRestored, false);
  }

  /** 上下文丢失 —— 暂停渲染，等待恢复 */
  onContextLost(event) {
    event.preventDefault();
    console.warn('[ContextLoss] WebGL 上下文丢失');
    this.contextLost = true;
  }

  /** 上下文恢复 —— 重建各子系统 GPU 资源 */
  onContextRestored() {
    console.log('[ContextLoss] WebGL 上下文已恢复，重建资源...');

    // 1. 重新生成环境贴图（PMREM）
    if (this.sceneManager) {
      try {
        this.sceneManager.updateSun();
      } catch (e) {
        console.warn('[ContextLoss] PMREM 重建失败', e);
      }
    }

    // 2. 重建后期处理渲染目标
    if (this.postProcessing) {
      try {
        const w = window.innerWidth;
        const h = window.innerHeight;
        this.postProcessing.resize(w, h);
      } catch (e) {
        console.warn('[ContextLoss] 后期处理重建失败', e);
      }
    }

    this.contextLost = false;
    console.log('[ContextLoss] 资源重建完成');
  }

  dispose() {
    const canvas = this.renderer.renderer.domElement;
    canvas.removeEventListener('webglcontextlost', this._onLost);
    canvas.removeEventListener('webglcontextrestored', this._onRestored);
  }
}
