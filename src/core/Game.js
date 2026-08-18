/**
 * Game.js — 游戏主调度器
 *
 * 负责：按顺序初始化所有子系统、运行主循环、处理窗口/可见性变化
 * 子系统：QualityDetector → Renderer → SceneManager → AssetLoader
 *         → CityBuilder → WorldLoader → Player → Controls → PostProcessing → UI
 */
import * as THREE from 'three';
import { QualityDetector } from './QualityDetector.js';
import { Renderer } from './Renderer.js';
import { SceneManager } from './SceneManager.js';
import { AssetLoader } from '../utils/AssetLoader.js';
import { CityBuilder } from '../world/CityBuilder.js';
import { WorldLoader } from '../world/WorldLoader.js';
import { Player } from '../player/Player.js';
import { PCControls } from '../player/PCControls.js';
import { MobileControls } from '../player/MobileControls.js';
import { PostProcessing } from '../effects/PostProcessing.js';
import { LoadingScreen } from '../ui/LoadingScreen.js';
import { HUD } from '../ui/HUD.js';
import { ContextLossHandler } from '../utils/ContextLossHandler.js';

export class Game {
  constructor() {
    // 画质检测
    this.qualityDetector = new QualityDetector();
    this.quality = this.qualityDetector.detect();
    console.log('[Game] 画质档位:', this.quality.label, this.quality);

    this.clock = new THREE.Clock();
    this.started = false;
    this.paused = false;
    this.rafId = null;

    // FPS 计数器
    this._fpsFrames = 0;
    this._fpsTime = 0;
  }

  /** 主初始化流程（异步，等待资源加载） */
  async init() {
    // 1. 加载界面
    this.loadingScreen = new LoadingScreen();
    this.loadingScreen.init();

    // 2. 渲染器
    this.loadingScreen.setStatus('正在初始化渲染引擎...');
    const container = document.getElementById('canvas-container');
    this.renderer = new Renderer(this.quality);
    this.renderer.init(container);
    this.loadingScreen.setProgress(10);

    // 3. 场景管理
    this.loadingScreen.setStatus('正在构建场景与天空...');
    this.sceneManager = new SceneManager(this.quality);
    this.sceneManager.init(this.renderer.renderer);
    this.loadingScreen.setProgress(20);

    // 4. 资源加载（纹理生成）
    this.loadingScreen.setStatus('正在生成纹理资源...');
    this.assetLoader = new AssetLoader();
    await this.assetLoader.generateTextures(this.loadingScreen);
    this.loadingScreen.setProgress(40);

    // 5. 环境贴图
    this.loadingScreen.setStatus('正在生成环境反射贴图...');
    await this.assetLoader.loadEnvironment(this.sceneManager);
    this.loadingScreen.setProgress(55);

    // 6. 构建城市
    this.loadingScreen.setStatus('正在构建城市街区...');
    this.cityBuilder = new CityBuilder(
      this.sceneManager.scene,
      this.assetLoader,
      this.quality
    );
    await this.cityBuilder.build(this.loadingScreen);
    this.loadingScreen.setProgress(80);

    // 7. 世界流式加载
    this.worldLoader = new WorldLoader(this.cityBuilder, this.quality);
    this.worldLoader.init(this.sceneManager.camera);

    // 8. 玩家
    this.player = new Player(this.sceneManager.camera, this.quality);
    this.player.setColliders(this.cityBuilder.getColliders());
    this.player.init();

    // 9. 控制系统（根据设备选择）
    if (this.quality.isMobile) {
      this.controls = new MobileControls(this.player);
    } else {
      this.controls = new PCControls(this.player);
      // PC端解锁时重新显示开始覆盖层
      this.controls.onUnlock = () => {
        this.started = false;
        this.showStartOverlay();
      };
    }
    this.controls.init();
    this.loadingScreen.setProgress(90);

    // 10. 后期处理
    this.postProcessing = new PostProcessing(
      this.renderer.renderer,
      this.sceneManager.scene,
      this.sceneManager.camera,
      this.quality
    );
    this.postProcessing.init();

    // 11. HUD
    this.hud = new HUD(this.quality);
    this.hud.init();

    // 12. 上下文丢失处理
    this.contextLossHandler = new ContextLossHandler(
      this.renderer,
      this.sceneManager,
      this.postProcessing
    );
    this.contextLossHandler.init();

    // 13. 加载完成
    this.loadingScreen.setProgress(100);
    this.loadingScreen.setStatus('加载完成');
    await this.delay(400);
    this.loadingScreen.hide();

    // 14. 显示开始覆盖层
    this.showStartOverlay();

    // 15. 启动渲染循环
    this.clock.start();
    this.animate();
  }

  /** 显示点击开始覆盖层，等待用户交互 */
  showStartOverlay() {
    const overlay = document.getElementById('start-overlay');
    if (!overlay) return;
    overlay.style.display = 'flex';
    overlay.style.opacity = '1';

    const startHandler = (e) => {
      e.preventDefault();
      e.stopPropagation();
      overlay.style.opacity = '0';
      setTimeout(() => { overlay.style.display = 'none'; }, 400);

      this.started = true;
      this.hud.show();
      this.hud.setHint(
        this.quality.isMobile
          ? '左下角摇杆移动 · 右侧滑动视角 · 按钮奔跑/跳跃'
          : 'WASD 移动 · 鼠标视角 · Shift 奔跑 · 空格跳跃 · Esc 暂停'
      );

      // PC端请求指针锁定
      if (!this.quality.isMobile && this.controls.lock) {
        this.controls.lock();
      }

      overlay.removeEventListener('click', startHandler);
      overlay.removeEventListener('touchend', startHandler);
    };

    overlay.addEventListener('click', startHandler);
    overlay.addEventListener('touchend', startHandler);
  }

  /** 主渲染循环 */
  animate() {
    this.rafId = requestAnimationFrame(() => this.animate());

    const dt = Math.min(this.clock.getDelta(), 0.1); // 限制最大帧间隔防止跳变

    if (!this.paused && !this.renderer.contextLost) {
      // 游戏逻辑更新
      if (this.started) {
        this.controls.update(dt);
        this.player.update(dt);
        this.worldLoader.update(this.player.position, this.sceneManager.camera);
      }

      // 场景更新（阴影跟随）
      const camPos = this.player ? this.player.position : this.sceneManager.camera.position;
      this.sceneManager.update(camPos);

      // 渲染
      if (this.postProcessing) {
        this.postProcessing.render();
      } else {
        this.renderer.renderer.render(this.sceneManager.scene, this.sceneManager.camera);
      }
    }

    // FPS 计算
    this.updateFPS(dt);
  }

  /** FPS 计数更新 */
  updateFPS(dt) {
    this._fpsFrames++;
    this._fpsTime += dt;
    if (this._fpsTime >= 0.5) {
      const fps = Math.round(this._fpsFrames / this._fpsTime);
      if (this.hud) this.hud.setFPS(fps);
      this._fpsFrames = 0;
      this._fpsTime = 0;
    }
  }

  /** 窗口尺寸变化 */
  handleResize() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    this.renderer.resize(w, h);
    this.sceneManager.resize(w, h);
    if (this.postProcessing) this.postProcessing.resize(w, h);
    if (this.controls && this.controls.onOrientationChange) {
      this.controls.onOrientationChange();
    }
  }

  /** 页面可见性变化 */
  handleVisibilityChange(hidden) {
    this.paused = hidden;
    if (!hidden) {
      // 恢复时重置时钟，防止 dt 过大
      this.clock.getDelta();
    }
  }

  /** 延迟工具 */
  delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  /** 释放全部资源 */
  dispose() {
    if (this.rafId) cancelAnimationFrame(this.rafId);
    this.controls?.dispose();
    this.player?.dispose();
    this.worldLoader?.dispose();
    this.cityBuilder?.dispose();
    this.postProcessing?.dispose();
    this.sceneManager?.dispose();
    this.renderer?.dispose();
  }
}
