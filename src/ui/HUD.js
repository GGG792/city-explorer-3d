/**
 * HUD.js — 极简抬头显示
 *
 * 仅显示操作提示文字和 FPS，半透明风格
 * 无准星、无弹药面板、无复杂 HUD
 */
export class HUD {
  constructor(quality) {
    this.quality = quality;
  }

  init() {
    this.containerEl = document.getElementById('hud');
    this.hintEl = document.getElementById('hud-hint');
    this.fpsEl = document.getElementById('hud-fps');
  }

  /** 显示 HUD */
  show() {
    if (this.containerEl) this.containerEl.style.display = 'block';
  }

  /** 隐藏 HUD */
  hide() {
    if (this.containerEl) this.containerEl.style.display = 'none';
  }

  /** 设置操作提示 */
  setHint(text) {
    if (this.hintEl) this.hintEl.textContent = text;
    // 3秒后自动淡出提示
    clearTimeout(this._hintTimer);
    this.hintEl.style.opacity = '1';
    this._hintTimer = setTimeout(() => {
      if (this.hintEl) this.hintEl.style.opacity = '0';
    }, 4000);
  }

  /** 设置 FPS 显示 */
  setFPS(fps) {
    if (this.fpsEl) {
      this.fpsEl.textContent = fps + ' FPS';
      // 低帧率警告色
      if (fps < 30) {
        this.fpsEl.style.color = 'rgba(255, 150, 100, 0.7)';
      } else if (fps < 50) {
        this.fpsEl.style.color = 'rgba(255, 220, 100, 0.7)';
      } else {
        this.fpsEl.style.color = 'rgba(150, 255, 150, 0.5)';
      }
    }
  }
}
