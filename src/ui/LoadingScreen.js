/**
 * LoadingScreen.js — 加载界面管理
 *
 * 显示加载进度条、百分比文字和状态提示
 * 模型全部加载完成后淡出
 */
export class LoadingScreen {
  init() {
    this.screenEl = document.getElementById('loading-screen');
    this.barEl = document.getElementById('loading-bar');
    this.percentEl = document.getElementById('loading-percent');
    this.statusEl = document.getElementById('loading-status');
  }

  /** 设置进度百分比（0~100） */
  setProgress(percent) {
    if (this.barEl) this.barEl.style.width = percent + '%';
    if (this.percentEl) this.percentEl.textContent = Math.round(percent) + '%';
  }

  /** 设置状态文字 */
  setStatus(text) {
    if (this.statusEl) this.statusEl.textContent = text;
  }

  /** 淡出并隐藏加载界面 */
  hide() {
    if (this.screenEl) {
      this.screenEl.style.opacity = '0';
      setTimeout(() => {
        this.screenEl.style.display = 'none';
      }, 800);
    }
  }
}
