/**
 * QualityDetector.js — 设备自动画质检测
 *
 * 自动区分：高端PC、普通PC、安卓手机、iOS手机
 * 根据设备类型与GPU能力输出对应画质档位配置
 */
import * as THREE from 'three';

export class QualityDetector {
  constructor() {
    this.isMobile = false;
    this.isIOS = false;
    this.isAndroid = false;
    this.gpuTier = 1; // 0=低, 1=中, 2=高
    this.deviceMemory = 4; // GB
    this.hardwareConcurrency = 4;
  }

  /**
   * 执行完整检测，返回画质配置对象
   */
  detect() {
    this.detectDevice();
    this.detectGPU();
    this.detectHardware();
    return this.buildQualitySettings();
  }

  /** 检测设备类型（手机/平板/桌面） */
  detectDevice() {
    const ua = navigator.userAgent || '';
    // iOS 检测（含 iPadOS 桌面模式伪装）
    this.isIOS =
      /iPad|iPhone|iPod/.test(ua) ||
      (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    // Android 检测
    this.isAndroid = /Android/i.test(ua);
    // 通用移动设备检测
    this.isMobile =
      this.isIOS ||
      this.isAndroid ||
      /Mobi|Tablet|Silk/i.test(ua) ||
      ('ontouchstart' in window && window.innerWidth < 1024);
  }

  /** 通过 WebGL 渲染器信息检测 GPU 等级 */
  detectGPU() {
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl2') || canvas.getContext('webgl');
      if (!gl) {
        this.gpuTier = 0;
        return;
      }
      const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
      if (debugInfo) {
        const rendererStr = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL) || '';
        // 高端 GPU：RTX 20系以上、RX 6000以上、Apple M系列
        if (/RTX [2-4]0|RTX 50|Quadro RTX|Radeon RX 7|Radeon Pro W|Apple M[1-3]/i.test(rendererStr)) {
          this.gpuTier = 2;
        }
        // 中端 GPU：GTX 10系、RX 5000/6000、Intel Iris Xe
        else if (/GTX 1[0-9]|RTX [2-3]0|Radeon RX [56]|Intel.*Iris|Apple GPU/i.test(rendererStr)) {
          this.gpuTier = 1;
        }
        // 低端 GPU
        else {
          this.gpuTier = 0;
        }
      }
      // 释放临时上下文
      const loseCtx = gl.getExtension('WEBGL_lose_context');
      if (loseCtx) loseCtx.loseContext();
    } catch (e) {
      this.gpuTier = 1; // 检测失败时默认中等
    }
  }

  /** 检测硬件信息（内存、CPU核心数） */
  detectHardware() {
    this.deviceMemory = navigator.deviceMemory || 4;
    this.hardwareConcurrency = navigator.hardwareConcurrency || 4;
    // 内存不足或核心数少时降低等级
    if (this.deviceMemory <= 2 || this.hardwareConcurrency <= 2) {
      this.gpuTier = Math.min(this.gpuTier, 0);
    }
  }

  /** 根据检测结果构建画质配置 */
  buildQualitySettings() {
    if (this.isMobile) {
      return this.buildMobileSettings();
    } else if (this.gpuTier >= 2) {
      return this.buildHighSettings();
    } else if (this.gpuTier >= 1) {
      return this.buildMediumSettings();
    } else {
      return this.buildLowSettings();
    }
  }

  /** 高端PC：全部特效全开 */
  buildHighSettings() {
    return {
      level: 'high',
      isMobile: false,
      isIOS: false,
      isAndroid: false,
      label: '高端PC',

      // 渲染器
      antialias: true,
      pixelRatio: Math.min(window.devicePixelRatio, 2),
      powerPreference: 'high-performance',

      // 阴影
      shadowMapEnabled: true,
      shadowMapType: THREE.PCFSoftShadowMap,
      shadowMapSize: 4096,
      shadowCameraSize: 80,
      shadowCameraFar: 300,
      shadowBias: -0.0005,

      // 色调映射与曝光
      toneMapping: THREE.ACESFilmicToneMapping,
      toneMappingExposure: 1.0,

      // 雾
      fogDensity: 0.006,
      fogColor: 0xb8c4d8,

      // 渲染距离
      farPlane: 1500,

      // 后期处理
      ssao: true,
      bloom: true,
      fxaa: false, // 已有原生AA
      bloomStrength: 0.35,
      bloomThreshold: 0.85,
      bloomRadius: 0.4,

      // LOD 距离
      lodNear: 60,
      lodMid: 150,
      lodFar: 300,

      // 世界流式加载
      chunkSize: 50,
      loadDistance: 350,
      unloadDistance: 500,
      instanceDistance: 400,

      // 玩家参数
      moveSpeed: 8,
      runSpeed: 16,
      jumpHeight: 2.2,
      eyeHeight: 1.7,
      playerRadius: 0.4,
      stepHeight: 0.5,
      gravity: 25,
    };
  }

  /** 普通PC：适当降低阴影和后期 */
  buildMediumSettings() {
    return {
      level: 'medium',
      isMobile: false,
      isIOS: false,
      isAndroid: false,
      label: '普通PC',

      antialias: true,
      pixelRatio: Math.min(window.devicePixelRatio, 1.5),
      powerPreference: 'high-performance',

      shadowMapEnabled: true,
      shadowMapType: THREE.PCFSoftShadowMap,
      shadowMapSize: 2048,
      shadowCameraSize: 60,
      shadowCameraFar: 200,
      shadowBias: -0.0005,

      toneMapping: THREE.ACESFilmicToneMapping,
      toneMappingExposure: 0.95,

      fogDensity: 0.008,
      fogColor: 0xb8c4d8,

      farPlane: 1000,

      ssao: false,
      bloom: true,
      fxaa: false,
      bloomStrength: 0.3,
      bloomThreshold: 0.85,
      bloomRadius: 0.35,

      lodNear: 50,
      lodMid: 120,
      lodFar: 250,

      chunkSize: 50,
      loadDistance: 280,
      unloadDistance: 400,
      instanceDistance: 300,

      moveSpeed: 8,
      runSpeed: 16,
      jumpHeight: 2.2,
      eyeHeight: 1.7,
      playerRadius: 0.4,
      stepHeight: 0.5,
      gravity: 25,
    };
  }

  /** 低端PC：进一步降低 */
  buildLowSettings() {
    return {
      level: 'low',
      isMobile: false,
      isIOS: false,
      isAndroid: false,
      label: '低端PC',

      antialias: false,
      pixelRatio: Math.min(window.devicePixelRatio, 1.0),
      powerPreference: 'high-performance',

      shadowMapEnabled: true,
      shadowMapType: THREE.PCFShadowMap,
      shadowMapSize: 1024,
      shadowCameraSize: 50,
      shadowCameraFar: 150,
      shadowBias: -0.001,

      toneMapping: THREE.ACESFilmicToneMapping,
      toneMappingExposure: 0.9,

      fogDensity: 0.012,
      fogColor: 0xb8c4d8,

      farPlane: 700,

      ssao: false,
      bloom: false,
      fxaa: true,
      bloomStrength: 0.2,
      bloomThreshold: 0.85,
      bloomRadius: 0.3,

      lodNear: 40,
      lodMid: 90,
      lodFar: 180,

      chunkSize: 50,
      loadDistance: 220,
      unloadDistance: 320,
      instanceDistance: 250,

      moveSpeed: 8,
      runSpeed: 16,
      jumpHeight: 2.2,
      eyeHeight: 1.7,
      playerRadius: 0.4,
      stepHeight: 0.5,
      gravity: 25,
    };
  }

  /** 手机设备：大幅降低以保证30-45帧 */
  buildMobileSettings() {
    const isLowEndMobile = this.deviceMemory <= 3 || this.hardwareConcurrency <= 4;

    return {
      level: 'mobile',
      isMobile: true,
      isIOS: this.isIOS,
      isAndroid: this.isAndroid,
      label: this.isIOS ? 'iOS' : 'Android',

      // 手机关闭MSAA，用FXAA替代
      antialias: false,
      // iOS retina 屏幕像素比高，必须限制
      pixelRatio: Math.min(window.devicePixelRatio, isLowEndMobile ? 1.0 : 1.5),
      powerPreference: 'high-performance',

      // 阴影分辨率减半
      shadowMapEnabled: true,
      shadowMapType: THREE.PCFShadowMap,
      shadowMapSize: isLowEndMobile ? 512 : 1024,
      shadowCameraSize: 45,
      shadowCameraFar: 120,
      shadowBias: -0.001,

      toneMapping: THREE.ACESFilmicToneMapping,
      toneMappingExposure: 1.0,

      // 手机雾更浓，减少远处渲染负担
      fogDensity: 0.015,
      fogColor: 0xb8c4d8,

      farPlane: 500,

      // 手机关闭SSAO和Bloom，保留PBR材质质感
      ssao: false,
      bloom: false,
      fxaa: true,
      bloomStrength: 0,
      bloomThreshold: 0.85,
      bloomRadius: 0,

      lodNear: 30,
      lodMid: 70,
      lodFar: 140,

      chunkSize: 50,
      loadDistance: 180,
      unloadDistance: 260,
      instanceDistance: 200,

      moveSpeed: 8,
      runSpeed: 16,
      jumpHeight: 2.2,
      eyeHeight: 1.7,
      playerRadius: 0.4,
      stepHeight: 0.5,
      gravity: 25,
    };
  }
}
