/**
 * main.js — 程序入口
 * 创建 Game 实例并启动初始化流程
 */
import { Game } from './core/Game.js';

const game = new Game();

game.init().then(() => {
  // 加载完成后显示 APK 下载按钮（仅在移动设备上显示）
  const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  if (isMobile) {
    const banner = document.getElementById('download-banner');
    if (banner) banner.classList.add('visible');
  }
}).catch((err) => {
  console.error('游戏初始化失败:', err);
  const statusEl = document.getElementById('loading-status');
  if (statusEl) {
    statusEl.textContent = '初始化失败: ' + err.message;
    statusEl.style.color = '#ff6b6b';
  }
  // 初始化失败时仍显示下载按钮
  const banner = document.getElementById('download-banner');
  if (banner) banner.classList.add('visible');
});

// 窗口尺寸变化 —— 通知各系统自适应
window.addEventListener('resize', () => game.handleResize());

// 页面可见性变化 —— 切到后台时暂停渲染，回来时重置时钟防止物理跳变
document.addEventListener('visibilitychange', () => {
  game.handleVisibilityChange(document.hidden);
});
