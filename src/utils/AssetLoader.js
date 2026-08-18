/**
 * AssetLoader.js — 资源加载与程序化纹理生成
 *
 * 使用 Canvas 程序化生成全部 PBR 纹理（无需外部图片文件）：
 * - 建筑窗户贴图（反照率/法线/自发光）× 3 种风格
 * - 地面贴图（沥青/人行道/草地）
 * - 自然贴图（树皮/树叶）
 * - 金属贴图（路灯杆）
 *
 * 环境贴图使用 Sky 着色器（SceneManager），无需外部 HDRI 文件
 *
 * ================================================================
 * 外部资源来源注释（代码中已引用或可作为替换方案）：
 *
 * HDRI 环境贴图（Poly-Haven 免费公开）：
 *   https://polyhaven.com/a/kloofendal_48d_partly_cloudy
 *   https://polyhaven.com/a/brooklyn_sunset_parking
 *   https://polyhaven.com/a/spruit_sunrise
 *   下载直链（需 CORS 支持）：
 *   https://dl.polyhaven.org/file/textures/hdr/kloofendal_48d_partly_cloudy_2k.hdr
 *
 * 城市模型（Sketchfab / Poly-Haven 免费公开 GLB/GLTF）：
 *   https://sketchfab.com/3d-models/city-street (CC BY 4.0)
 *   https://polyhaven.com/a/city_canvas (CC0)
 *   下载直链需通过各自 API 或直接下载页获取
 *
 * PBR 纹理贴图（Poly-Haven 免费公开）：
 *   https://polyhaven.com/a/asphalt_02
 *   https://polyhaven.com/a/concrete_wall_004
 *   https://polyhaven.com/a/bark_brown_02
 *
 * 当前实现使用程序化 Canvas 纹理替代以上外部资源，
 * 确保零外部依赖、GitHub Pages 部署无 404 风险。
 * ================================================================
 */
import * as THREE from 'three';

export class AssetLoader {
  constructor() {
    this.textures = {};
  }

  /** 生成全部纹理 */
  async generateTextures(loadingScreen) {
    // ---- 建筑纹理 ----
    if (loadingScreen) loadingScreen.setStatus('正在生成建筑纹理...');
    await this.delay(30);
    this.textures.glassBuilding = this.createBuildingTextures({
      wallColor: '#2a3340', windowColor: '#4a7aaa', windowLitColor: '#ffd896',
      windowAlpha: 0.7, cols: 6, rows: 8, frameColor: '#1a1a22'
    });
    if (loadingScreen) loadingScreen.setProgress(25);

    this.textures.concreteBuilding = this.createBuildingTextures({
      wallColor: '#5a5a62', windowColor: '#3a4a5a', windowLitColor: '#ffe8c0',
      windowAlpha: 0.5, cols: 5, rows: 6, frameColor: '#3a3a42'
    });
    if (loadingScreen) loadingScreen.setProgress(28);

    this.textures.brickBuilding = this.createBuildingTextures({
      wallColor: '#6a4030', windowColor: '#3a4a4a', windowLitColor: '#ffd0a0',
      windowAlpha: 0.4, cols: 4, rows: 5, frameColor: '#4a2a1a', brick: true
    });
    if (loadingScreen) loadingScreen.setProgress(30);

    // ---- 地面纹理 ----
    if (loadingScreen) loadingScreen.setStatus('正在生成地面纹理...');
    await this.delay(30);
    this.textures.asphalt = this.createAsphaltTexture();
    if (loadingScreen) loadingScreen.setProgress(32);

    this.textures.sidewalk = this.createSidewalkTexture();
    if (loadingScreen) loadingScreen.setProgress(34);

    this.textures.grass = this.createGrassTexture();
    if (loadingScreen) loadingScreen.setProgress(36);

    // ---- 自然纹理 ----
    if (loadingScreen) loadingScreen.setStatus('正在生成植被纹理...');
    await this.delay(30);
    this.textures.bark = this.createBarkTexture();
    if (loadingScreen) loadingScreen.setProgress(38);

    this.textures.leaves = this.createLeavesTexture();
    if (loadingScreen) loadingScreen.setProgress(39);

    // ---- 金属纹理 ----
    this.textures.metal = this.createMetalTexture();
    if (loadingScreen) loadingScreen.setProgress(40);
  }

  /**
   * 环境贴图加载
   * 使用 SceneManager 的 Sky 着色器生成 PMREM 环境贴图
   * 如需替换为真实 HDRI，取消注释 RGBELoader 代码
   */
  async loadEnvironment(sceneManager) {
    // --- 方案A：Sky着色器（当前使用，零外部依赖） ---
    // SceneManager 已在 init() 中完成 Sky + PMREM 设置
    console.log('[AssetLoader] 使用 Sky 着色器环境贴图');

    // --- 方案B：加载外部 HDRI（需要 CORS 支持的直链） ---
    // 取消注释以下代码，并替换 URL 为 CORS 可访问的 HDR 文件：
    //
    // import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';
    // try {
    //   const rgbeLoader = new RGBELoader();
    //   const hdrTexture = await rgbeLoader.loadAsync(
    //     'https://dl.polyhaven.org/file/textures/hdr/kloofendal_48d_partly_cloudy_2k.hdr'
    //   );
    //   const pmrem = new THREE.PMREMGenerator(sceneManager.renderer);
    //   const envRT = pmrem.fromEquirectangular(hdrTexture);
    //   sceneManager.scene.environment = envRT.texture;
    //   sceneManager.scene.background = envRT.texture;
    //   hdrTexture.dispose();
    //   pmrem.dispose();
    //   console.log('[AssetLoader] 外部 HDRI 加载成功');
    // } catch (e) {
    //   console.warn('[AssetLoader] HDRI 加载失败，使用 Sky 后备', e);
    // }
  }

  // ===================== 纹理生成方法 =====================

  /**
   * 生成建筑窗户纹理组（反照率 + 法线 + 自发光）
   */
  createBuildingTextures(opts) {
    const W = 512, H = 512;
    const { wallColor, windowColor, windowLitColor, windowAlpha,
            cols, rows, frameColor, brick } = opts;

    // ---------- 反照率贴图 ----------
    const albedoCanvas = document.createElement('canvas');
    albedoCanvas.width = W; albedoCanvas.height = H;
    const actx = albedoCanvas.getContext('2d');

    // 墙面底色 + 噪点
    actx.fillStyle = wallColor;
    actx.fillRect(0, 0, W, H);
    this.addNoise(actx, W, H, 15);

    if (brick) {
      // 砖块纹理
      actx.strokeStyle = 'rgba(0,0,0,0.25)';
      actx.lineWidth = 1.5;
      const brickH = H / (rows * 2);
      const brickW = W / cols;
      for (let r = 0; r < rows * 2; r++) {
        const offset = r % 2 === 0 ? 0 : brickW / 2;
        for (let c = 0; c <= cols; c++) {
          const x = c * brickW + offset;
          actx.strokeRect(x, r * brickH, brickW, brickH);
        }
      }
    }

    // 窗户网格
    const cellW = W / cols;
    const cellH = H / rows;
    const margin = cellW * 0.12;
    const litWindows = new Set();

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const x = c * cellW + margin;
        const y = r * cellH + margin;
        const w = cellW - margin * 2;
        const h = cellH - margin * 2;
        const isLit = Math.random() > 0.65;
        if (isLit) litWindows.add(r * cols + c);

        // 玻璃
        const hueShift = (Math.random() - 0.5) * 20;
        actx.fillStyle = isLit ? windowLitColor : windowColor;
        actx.globalAlpha = isLit ? 0.8 : windowAlpha;
        actx.fillRect(x, y, w, h);
        actx.globalAlpha = 1;

        // 窗框
        actx.strokeStyle = frameColor;
        actx.lineWidth = 2;
        actx.strokeRect(x, y, w, h);
        // 窗户分隔线
        actx.beginPath();
        actx.moveTo(x + w / 2, y);
        actx.lineTo(x + w / 2, y + h);
        actx.stroke();
      }
    }

    const map = new THREE.CanvasTexture(albedoCanvas);
    map.wrapS = map.wrapT = THREE.RepeatWrapping;
    map.colorSpace = THREE.SRGBColorSpace;

    // ---------- 法线贴图 ----------
    const normalCanvas = document.createElement('canvas');
    normalCanvas.width = W; normalCanvas.height = H;
    const nctx = normalCanvas.getContext('2d');
    nctx.fillStyle = '#8080ff'; // 平面法线
    nctx.fillRect(0, 0, W, H);

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const x = c * cellW + margin;
        const y = r * cellH + margin;
        const w = cellW - margin * 2;
        const h = cellH - margin * 2;
        // 窗户凹陷
        nctx.fillStyle = '#7070e8';
        nctx.fillRect(x, y, w, h);
        // 窗框凸起边缘
        nctx.strokeStyle = '#9090ff';
        nctx.lineWidth = 2;
        nctx.strokeRect(x, y, w, h);
      }
    }

    const normalMap = new THREE.CanvasTexture(normalCanvas);
    normalMap.wrapS = normalMap.wrapT = THREE.RepeatWrapping;

    // ---------- 自发光贴图 ----------
    const emissiveCanvas = document.createElement('canvas');
    emissiveCanvas.width = W; emissiveCanvas.height = H;
    const ectx = emissiveCanvas.getContext('2d');
    ectx.fillStyle = '#000';
    ectx.fillRect(0, 0, W, H);

    for (const idx of litWindows) {
      const r = Math.floor(idx / cols);
      const c = idx % cols;
      const x = c * cellW + margin;
      const y = r * cellH + margin;
      const w = cellW - margin * 2;
      const h = cellH - margin * 2;
      ectx.fillStyle = windowLitColor;
      ectx.fillRect(x, y, w, h);
    }

    const emissiveMap = new THREE.CanvasTexture(emissiveCanvas);
    emissiveMap.wrapS = emissiveMap.wrapT = THREE.RepeatWrapping;
    emissiveMap.colorSpace = THREE.SRGBColorSpace;

    return { map, normalMap, emissiveMap };
  }

  /** 沥青路面纹理 */
  createAsphaltTexture() {
    const W = 512, H = 512;
    const canvas = document.createElement('canvas');
    canvas.width = W; canvas.height = H;
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = '#1c1c20';
    ctx.fillRect(0, 0, W, H);
    this.addNoise(ctx, W, H, 25);

    // 随机裂纹
    ctx.strokeStyle = 'rgba(10,10,10,0.5)';
    ctx.lineWidth = 1;
    for (let i = 0; i < 12; i++) {
      ctx.beginPath();
      ctx.moveTo(Math.random() * W, Math.random() * H);
      for (let j = 0; j < 4; j++) {
        ctx.lineTo(
          Math.random() * W,
          Math.random() * H
        );
      }
      ctx.stroke();
    }

    const map = new THREE.CanvasTexture(canvas);
    map.wrapS = map.wrapT = THREE.RepeatWrapping;
    map.colorSpace = THREE.SRGBColorSpace;
    map.repeat.set(10, 10);

    // 法线
    const normalCanvas = document.createElement('canvas');
    normalCanvas.width = W; normalCanvas.height = H;
    const nctx = normalCanvas.getContext('2d');
    nctx.fillStyle = '#8080ff';
    nctx.fillRect(0, 0, W, H);
    this.addNoise(nctx, W, H, 10);
    const normalMap = new THREE.CanvasTexture(normalCanvas);
    normalMap.wrapS = normalMap.wrapT = THREE.RepeatWrapping;

    return { map, normalMap };
  }

  /** 人行道纹理 */
  createSidewalkTexture() {
    const W = 512, H = 512;
    const canvas = document.createElement('canvas');
    canvas.width = W; canvas.height = H;
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = '#6a6a6e';
    ctx.fillRect(0, 0, W, H);
    this.addNoise(ctx, W, H, 20);

    // 铺砖分隔线
    ctx.strokeStyle = 'rgba(40,40,40,0.4)';
    ctx.lineWidth = 2;
    const tile = 128;
    for (let x = 0; x <= W; x += tile) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, H);
      ctx.stroke();
    }
    for (let y = 0; y <= H; y += tile) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(W, y);
      ctx.stroke();
    }

    const map = new THREE.CanvasTexture(canvas);
    map.wrapS = map.wrapT = THREE.RepeatWrapping;
    map.colorSpace = THREE.SRGBColorSpace;

    const normalMap = new THREE.CanvasTexture(canvas);
    normalMap.wrapS = normalMap.wrapT = THREE.RepeatWrapping;

    return { map, normalMap };
  }

  /** 草地纹理 */
  createGrassTexture() {
    const W = 256, H = 256;
    const canvas = document.createElement('canvas');
    canvas.width = W; canvas.height = H;
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = '#3a5a2a';
    ctx.fillRect(0, 0, W, H);

    // 草丛
    for (let i = 0; i < 800; i++) {
      const x = Math.random() * W;
      const y = Math.random() * H;
      const len = 3 + Math.random() * 5;
      const green = 60 + Math.random() * 60;
      ctx.strokeStyle = `rgb(${green * 0.4}, ${green}, ${green * 0.3})`;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x + (Math.random() - 0.5) * 2, y - len);
      ctx.stroke();
    }

    const map = new THREE.CanvasTexture(canvas);
    map.wrapS = map.wrapT = THREE.RepeatWrapping;
    map.colorSpace = THREE.SRGBColorSpace;
    map.repeat.set(5, 5);

    const normalCanvas = document.createElement('canvas');
    normalCanvas.width = W; normalCanvas.height = H;
    const nctx = normalCanvas.getContext('2d');
    nctx.fillStyle = '#8080ff';
    nctx.fillRect(0, 0, W, H);
    this.addNoise(nctx, W, H, 15);
    const normalMap = new THREE.CanvasTexture(normalCanvas);
    normalMap.wrapS = normalMap.wrapT = THREE.RepeatWrapping;

    return { map, normalMap };
  }

  /** 树皮纹理 */
  createBarkTexture() {
    const W = 256, H = 256;
    const canvas = document.createElement('canvas');
    canvas.width = W; canvas.height = H;
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = '#4a3020';
    ctx.fillRect(0, 0, W, H);

    // 垂直纹理
    for (let i = 0; i < 30; i++) {
      const x = Math.random() * W;
      const width = 2 + Math.random() * 6;
      const shade = 30 + Math.random() * 40;
      ctx.fillStyle = `rgb(${shade * 0.8}, ${shade * 0.5}, ${shade * 0.3})`;
      ctx.fillRect(x, 0, width, H);
    }
    this.addNoise(ctx, W, H, 20);

    const map = new THREE.CanvasTexture(canvas);
    map.wrapS = map.wrapT = THREE.RepeatWrapping;
    map.colorSpace = THREE.SRGBColorSpace;

    const normalCanvas = document.createElement('canvas');
    normalCanvas.width = W; normalCanvas.height = H;
    const nctx = normalCanvas.getContext('2d');
    nctx.fillStyle = '#8080ff';
    nctx.fillRect(0, 0, W, H);
    for (let i = 0; i < 20; i++) {
      const x = Math.random() * W;
      nctx.fillStyle = '#7070e8';
      nctx.fillRect(x, 0, 3 + Math.random() * 4, H);
    }
    const normalMap = new THREE.CanvasTexture(normalCanvas);
    normalMap.wrapS = normalMap.wrapT = THREE.RepeatWrapping;

    return { map, normalMap };
  }

  /** 树叶纹理 */
  createLeavesTexture() {
    const W = 256, H = 256;
    const canvas = document.createElement('canvas');
    canvas.width = W; canvas.height = H;
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = '#2a4a18';
    ctx.fillRect(0, 0, W, H);

    // 叶片
    for (let i = 0; i < 200; i++) {
      const x = Math.random() * W;
      const y = Math.random() * H;
      const r = 3 + Math.random() * 6;
      const green = 50 + Math.random() * 60;
      ctx.fillStyle = `rgba(${green * 0.3}, ${green}, ${green * 0.2}, 0.6)`;
      ctx.beginPath();
      ctx.ellipse(x, y, r, r * 0.7, Math.random() * Math.PI, 0, Math.PI * 2);
      ctx.fill();
    }

    const map = new THREE.CanvasTexture(canvas);
    map.wrapS = map.wrapT = THREE.RepeatWrapping;
    map.colorSpace = THREE.SRGBColorSpace;

    const normalMap = new THREE.CanvasTexture(canvas);
    normalMap.wrapS = normalMap.wrapT = THREE.RepeatWrapping;

    return { map, normalMap };
  }

  /** 金属拉丝纹理（路灯杆等） */
  createMetalTexture() {
    const W = 256, H = 256;
    const canvas = document.createElement('canvas');
    canvas.width = W; canvas.height = H;
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = '#4a4a52';
    ctx.fillRect(0, 0, W, H);

    // 水平拉丝
    for (let y = 0; y < H; y += 1) {
      const shade = 60 + Math.random() * 30;
      ctx.fillStyle = `rgb(${shade}, ${shade}, ${shade + 4})`;
      ctx.fillRect(0, y, W, 1);
    }

    const map = new THREE.CanvasTexture(canvas);
    map.wrapS = map.wrapT = THREE.RepeatWrapping;
    map.colorSpace = THREE.SRGBColorSpace;

    const normalMap = new THREE.CanvasTexture(canvas);
    normalMap.wrapS = normalMap.wrapT = THREE.RepeatWrapping;

    return { map, normalMap };
  }

  /** 给 Canvas 添加随机噪点 */
  addNoise(ctx, w, h, amount) {
    const imageData = ctx.getImageData(0, 0, w, h);
    const data = imageData.data;
    for (let i = 0; i < data.length; i += 4) {
      const n = (Math.random() - 0.5) * amount;
      data[i] = Math.max(0, Math.min(255, data[i] + n));
      data[i + 1] = Math.max(0, Math.min(255, data[i + 1] + n));
      data[i + 2] = Math.max(0, Math.min(255, data[i + 2] + n));
    }
    ctx.putImageData(imageData, 0, 0);
  }

  /** 异步延迟工具 */
  delay(ms) {
    return new Promise((r) => setTimeout(r, ms));
  }
}
