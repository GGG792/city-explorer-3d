/**
 * Renderer.js — WebGL 渲染器封装
 *
 * - 优先 WebGL2，兼容降级 WebGL1
 * - 根据 QualityDetector 配置设置画质参数
 * - 处理上下文丢失/恢复
 * - 窗口自适应 resize
 */
import * as THREE from 'three';

export class Renderer {
  constructor(quality) {
    this.quality = quality;
    this.renderer = null;
    this.container = null;
  }

  /**
   * 初始化渲染器并挂载到 DOM 容器
   * @param {HTMLElement} container — 画布父容器（div）
   */
  init(container) {
    this.container = container;

    // 在容器内创建 canvas 元素
    const canvas = document.createElement('canvas');
    canvas.style.display = 'block';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.touchAction = 'none'; // 阻止浏览器默认手势（移动端）
    container.innerHTML = '';
    container.appendChild(canvas);
    this.canvas = canvas;

    // 尝试 WebGL2 上下文，失败则降级 WebGL1
    let context = null;
    const glAttrs = {
      antialias: this.quality.antialias,
      powerPreference: this.quality.powerPreference,
      stencil: false,
      depth: true,
      alpha: false,
      preserveDrawingBuffer: false,
      failIfMajorPerformanceCaveat: false,
    };

    try {
      context = canvas.getContext('webgl2', glAttrs);
    } catch (e) {
      console.warn('[Renderer] WebGL2 上下文获取失败:', e.message);
    }

    if (!context) {
      try {
        context = canvas.getContext('webgl', glAttrs) ||
                  canvas.getContext('experimental-webgl', glAttrs);
      } catch (e) {
        console.warn('[Renderer] WebGL1 上下文获取失败:', e.message);
      }
    }

    if (!context) {
      throw new Error('当前浏览器不支持 WebGL，请升级浏览器或开启硬件加速');
    }

    this.renderer = new THREE.WebGLRenderer({
      canvas,
      context,
      antialias: this.quality.antialias,
      powerPreference: this.quality.powerPreference,
      stencil: false,
      depth: true,
    });

    // 像素比限制（防止高DPI设备过载）
    this.renderer.setPixelRatio(this.quality.pixelRatio);

    // 输出色彩空间 — sRGB 保证颜色正确
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;

    // 色调映射 — ACES电影级色调映射
    this.renderer.toneMapping = this.quality.toneMapping;
    this.renderer.toneMappingExposure = this.quality.toneMappingExposure;

    // 阴影设置
    if (this.quality.shadowMapEnabled) {
      this.renderer.shadowMap.enabled = true;
      this.renderer.shadowMap.type = this.quality.shadowMapType;
    } else {
      this.renderer.shadowMap.enabled = false;
    }

    // 设置初始尺寸
    this.resize(window.innerWidth, window.innerHeight);

    // 上下文丢失事件 —— 防止手机切后台后崩溃
    this._onContextLost = this.onContextLost.bind(this);
    this._onContextRestored = this.onContextRestored.bind(this);
    canvas.addEventListener('webglcontextlost', this._onContextLost, false);
    canvas.addEventListener('webglcontextrestored', this._onContextRestored, false);

    return this.renderer;
  }

  /** 上下文丢失回调 */
  onContextLost(event) {
    event.preventDefault(); // 阻止默认行为，允许后续恢复
    console.warn('[Renderer] WebGL 上下文丢失，等待恢复...');
    this.contextLost = true;
  }

  /** 上下文恢复回调 */
  onContextRestored() {
    console.log('[Renderer] WebGL 上下文已恢复');
    this.contextLost = false;
    // 恢复后重新设置渲染参数
    this.renderer.setPixelRatio(this.quality.pixelRatio);
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = this.quality.toneMapping;
    this.renderer.toneMappingExposure = this.quality.toneMappingExposure;
    if (this.quality.shadowMapEnabled) {
      this.renderer.shadowMap.enabled = true;
      this.renderer.shadowMap.type = this.quality.shadowMapType;
    }
  }

  /** 窗口尺寸变化时调用 */
  resize(width, height) {
    if (this.renderer) {
      this.renderer.setSize(width, height, false);
    }
  }

  /** 释放资源 */
  dispose() {
    if (this.canvas) {
      if (this._onContextLost) {
        this.canvas.removeEventListener('webglcontextlost', this._onContextLost);
      }
      if (this._onContextRestored) {
        this.canvas.removeEventListener('webglcontextrestored', this._onContextRestored);
      }
    }
    if (this.renderer) {
      this.renderer.dispose();
      try { this.renderer.forceContextLoss?.(); } catch (e) {}
    }
  }
}
