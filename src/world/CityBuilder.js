/**
 * CityBuilder.js — 3D 城市构建器
 *
 * 生成大型连续开放城市街区：
 * - 建筑：ExtrudeGeometry 从自定义 2D 轮廓挤出（非 BoxGeometry）
 *         含 L 型 / T 型 / 阶梯型等多种建筑形状
 *         PBR 材质 + 程序化窗户纹理 + 法线贴图 + 自发光贴图
 * - 地面：细分 PlaneGeometry + 沥青纹理 + 表面起伏
 * - 人行道：ExtrudeGeometry 环形（带内孔）高出路面
 * - 树木：InstancedMesh 实例化渲染（CylinderGeometry 树干 + IcosahedronGeometry 树冠）
 * - 路灯：InstancedMesh（LatheGeometry 锥形灯杆 + IcosahedronGeometry 灯头）
 * - LOD：THREE.LOD 距离驱动细节切换
 * - 碰撞：Box3 AABB 碰撞体
 *
 * 场景组织：所有可渲染对象按 Chunk 分组，供 WorldLoader 流式加载
 *
 * ================================================================
 * 外部模型资源来源注释（可作为替换方案加载 GLB/GLTF 模型）：
 *
 * Sketchfab 免费城市模型（CC BY 4.0 / CC0）：
 *   https://sketchfab.com/3d-models/low-poly-city-07e6d2e7fd864fd48945b7b6f6956b77
 *   https://sketchfab.com/3d-models/city-street-scene
 *   https://sketchfab.com/3d-models/modern-building
 *
 * Poly-Haven 免费模型（CC0）：
 *   https://polyhaven.com/a/city_canvas
 *
 * GLB 加载代码示例（如需替换程序化建筑为真实模型）：
 *   import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
 *   const loader = new GLTFLoader();
 *   const gltf = await loader.loadAsync('https://cdn.jsdelivr.net/gh/...');
 *   scene.add(gltf.scene);
 *
 * 当前实现使用程序化几何体，确保零外部依赖、GitHub Pages 无 404。
 * ================================================================
 */
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

// 建筑类型定义
const BUILDING_TYPES = {
  glass: {
    texKey: 'glassBuilding',
    roughness: 0.28,
    metalness: 0.15,
    minHeight: 15,
    maxHeight: 42,
    minSize: 8,
    maxSize: 18,
    emissiveIntensity: 0.35,
    color: 0x8899aa,
  },
  concrete: {
    texKey: 'concreteBuilding',
    roughness: 0.75,
    metalness: 0.1,
    minHeight: 10,
    maxHeight: 28,
    minSize: 10,
    maxSize: 20,
    emissiveIntensity: 0.22,
    color: 0x888888,
  },
  brick: {
    texKey: 'brickBuilding',
    roughness: 0.88,
    metalness: 0.05,
    minHeight: 7,
    maxHeight: 16,
    minSize: 8,
    maxSize: 16,
    emissiveIntensity: 0.28,
    color: 0x6a4030,
  },
};

const TYPE_KEYS = Object.keys(BUILDING_TYPES);

export class CityBuilder {
  constructor(scene, assetLoader, quality, modelLoader) {
    this.scene = scene;
    this.assetLoader = assetLoader;
    this.quality = quality;
    this.modelLoader = modelLoader; // 真实 GLTF 模型加载器

    this.colliders = [];
    this.chunks = new Map(); // chunkKey -> { objects: [], loaded: false }
    this.lodObjects = [];    // THREE.LOD 对象列表（供 WorldLoader 注册）
    this.allObjects = [];    // 所有创建的对象引用（用于 dispose）

    // 预创建共享材质（用于地面/人行道/草地等程序化部分）
    this.materials = this.createMaterials();

    // 缓存共享的"中距离简化材质"（按建筑类型复用，避免每栋楼新建材质）
    this.medMaterials = {};
  }

  /** 创建共享 PBR 材质 */
  createMaterials() {
    const tex = this.assetLoader.textures;
    const mats = {};

    // 三种建筑材质
    for (const [key, type] of Object.entries(BUILDING_TYPES)) {
      const t = tex[type.texKey];
      mats[key] = new THREE.MeshStandardMaterial({
        map: t.map,
        normalMap: t.normalMap,
        emissiveMap: t.emissiveMap,
        emissive: 0xffffff,
        emissiveIntensity: type.emissiveIntensity,
        roughness: type.roughness,
        metalness: type.metalness,
        normalScale: new THREE.Vector2(0.6, 0.6),
      });
    }

    // 地面（沥青）
    tex.asphalt.map.repeat.set(25, 25);
    tex.asphalt.normalMap.repeat.set(25, 25);
    mats.ground = new THREE.MeshStandardMaterial({
      map: tex.asphalt.map,
      normalMap: tex.asphalt.normalMap,
      roughness: 0.92,
      metalness: 0,
    });

    // 人行道
    tex.sidewalk.map.repeat.set(4, 4);
    tex.sidewalk.normalMap.repeat.set(4, 4);
    mats.sidewalk = new THREE.MeshStandardMaterial({
      map: tex.sidewalk.map,
      normalMap: tex.sidewalk.normalMap,
      roughness: 0.85,
      metalness: 0.05,
    });

    // 草地
    tex.grass.map.repeat.set(6, 6);
    tex.grass.normalMap.repeat.set(6, 6);
    mats.grass = new THREE.MeshStandardMaterial({
      map: tex.grass.map,
      normalMap: tex.grass.normalMap,
      roughness: 0.9,
      metalness: 0,
    });

    // 树干
    mats.bark = new THREE.MeshStandardMaterial({
      map: tex.bark.map,
      normalMap: tex.bark.normalMap,
      roughness: 0.9,
      metalness: 0,
    });

    // 树叶
    mats.leaves = new THREE.MeshStandardMaterial({
      map: tex.leaves.map,
      normalMap: tex.leaves.normalMap,
      roughness: 0.8,
      metalness: 0,
      color: 0x6a8a4a,
    });

    // 金属（路灯）
    mats.metal = new THREE.MeshStandardMaterial({
      map: tex.metal.map,
      normalMap: tex.metal.normalMap,
      roughness: 0.4,
      metalness: 0.8,
    });

    return mats;
  }

  /** 主构建入口 */
  async build(loadingScreen) {
    // 1. 地面（始终在场景中）
    this.createGround();

    // 2. 城市网格
    const grid = 6;
    const blockSize = 28;
    const streetWidth = 14;
    const cellSize = blockSize + streetWidth;
    const offset = ((grid - 1) * cellSize) / 2;

    // 按 Chunk 收集树木和路灯位置
    const treePositionsByChunk = new Map();
    const lampPositionsByChunk = new Map();

    for (let gx = 0; gx < grid; gx++) {
      for (let gz = 0; gz < grid; gz++) {
        const x = gx * cellSize - offset;
        const z = gz * cellSize - offset;

        // 随机地块类型
        const r = Math.random();
        if (r < 0.72) {
          this.createBuildingBlock(x, z, blockSize, treePositionsByChunk, lampPositionsByChunk);
        } else if (r < 0.87) {
          this.createPark(x, z, blockSize, treePositionsByChunk, lampPositionsByChunk);
        } else {
          this.createPlaza(x, z, blockSize, treePositionsByChunk, lampPositionsByChunk);
        }

        // 人行道（始终在场景中）
        const sidewalk = this.createSidewalk(x, z, blockSize);
        this.scene.add(sidewalk);
        this.allObjects.push(sidewalk);

        // 进度更新
        const progress = (gx * grid + gz + 1) / (grid * grid);
        if (loadingScreen && (gx * grid + gz) % 2 === 0) {
          loadingScreen.setProgress(55 + progress * 20);
          loadingScreen.setStatus(
            `正在构建城市街区... ${Math.round(progress * 100)}%`
          );
        }

        // 让出主线程让 UI 更新
        if ((gx * grid + gz) % 3 === 0) {
          await new Promise((resolve) => setTimeout(resolve, 10));
        }
      }
    }

    // 3. 按 Chunk 创建 InstancedMesh
    for (const [chunkKey, positions] of treePositionsByChunk) {
      if (positions.length === 0) continue;
      const treeMeshes = this.createTreeInstances(positions);
      for (const mesh of treeMeshes) {
        this.addToChunk(mesh, chunkKey);
      }
    }

    for (const [chunkKey, positions] of lampPositionsByChunk) {
      if (positions.length === 0) continue;
      const lampMesh = this.createLampInstances(positions);
      if (lampMesh) {
        this.addToChunk(lampMesh, chunkKey);
      }
    }

    console.log(
      `[CityBuilder] 城市构建完成: ${this.colliders.length} 个碰撞体, ` +
      `${this.lodObjects.length} 个LOD对象, ` +
      `${this.chunks.size} 个Chunk`
    );
  }

  /** 创建地面（沥青路面） */
  createGround() {
    const size = 320;
    const geo = new THREE.PlaneGeometry(size, size, 32, 32);
    geo.rotateX(-Math.PI / 2);

    // 添加微小表面起伏（真实路面非完全平整）
    const pos = geo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      pos.setY(i, (Math.random() - 0.5) * 0.04);
    }
    pos.needsUpdate = true;
    geo.computeVertexNormals();

    const mesh = new THREE.Mesh(geo, this.materials.ground);
    mesh.receiveShadow = true;
    this.scene.add(mesh);
    this.allObjects.push(mesh);
  }

  /** 创建建筑街区 */
  createBuildingBlock(x, z, blockSize, treePositions, lampPositions) {
    const numBuildings = 1 + Math.floor(Math.random() * 3);
    const margin = 2;

    if (numBuildings === 1) {
      const w = blockSize - margin * 2 - Math.random() * 4;
      const d = blockSize - margin * 2 - Math.random() * 4;
      this.createBuilding(x, z, w, d);
    } else {
      const splitAxis = Math.random() > 0.5 ? 'x' : 'z';
      const splitPos = blockSize * (0.35 + Math.random() * 0.3);

      for (let i = 0; i < numBuildings; i++) {
        const bx = splitAxis === 'x'
          ? x - blockSize / 2 + (i * blockSize) / numBuildings + margin
          : x + (Math.random() - 0.5) * (blockSize - 12);
        const bz = splitAxis === 'z'
          ? z - blockSize / 2 + (i * blockSize) / numBuildings + margin
          : z + (Math.random() - 0.5) * (blockSize - 12);
        const bw = splitAxis === 'x'
          ? blockSize / numBuildings - margin * 1.5
          : 8 + Math.random() * 8;
        const bd = splitAxis === 'z'
          ? blockSize / numBuildings - margin * 1.5
          : 8 + Math.random() * 8;
        this.createBuilding(bx + bw / 2 - blockSize / 2 + x, bz + bd / 2 - blockSize / 2 + z, bw, bd);
      }
    }

    // 沿人行道添加树木
    this.addSidewalkTrees(x, z, blockSize, treePositions);

    // 四角路灯
    this.addCornerLamps(x, z, blockSize, lampPositions);

    // 沿街停放车辆 + 街道道具
    this.addStreetProps(x, z, blockSize);
  }

  /** 沿街道放置停放车辆与道具（使用真实 GLTF 模型） */
  addStreetProps(x, z, blockSize) {
    if (!this.modelLoader || !this.modelLoader.loaded) return;
    const half = blockSize / 2;
    const offset = 3; // 距离人行道边缘

    const cars = this.modelLoader.getCars();
    const props = this.modelLoader.getProps();

    // 每边随机停放 1~2 辆车
    if (cars.length > 0) {
      const carCount = 1 + Math.floor(Math.random() * 2);
      for (let i = 0; i < carCount; i++) {
        const carName = cars[Math.floor(Math.random() * cars.length)];
        const car = this.modelLoader.clone(carName);
        if (!car) continue;
        const side = Math.random() > 0.5 ? 1 : -1;
        const along = (Math.random() - 0.5) * (blockSize - 8);
        // 沿 X 轴停或沿 Z 轴停
        if (Math.random() > 0.5) {
          car.position.set(x + along, 0, z + side * (half + offset));
          car.rotation.y = side > 0 ? Math.PI / 2 : -Math.PI / 2;
        } else {
          car.position.set(x + side * (half + offset), 0, z + along);
          car.rotation.y = side > 0 ? 0 : Math.PI;
        }
        this.addToChunk(car, car.position.x, car.position.z);
        this.allObjects.push(car);
      }
    }

    // 随机放置 1~2 个街道道具（长椅/垃圾桶/消防栓等）
    if (props.length > 0 && Math.random() > 0.3) {
      const propCount = 1 + Math.floor(Math.random() * 2);
      for (let i = 0; i < propCount; i++) {
        const propName = props[Math.floor(Math.random() * props.length)];
        // 跳过路灯（路灯单独由 addCornerLamps 处理）
        if (propName.startsWith('streetlight') || propName.startsWith('trafficlight')) continue;
        const prop = this.modelLoader.clone(propName);
        if (!prop) continue;
        const px = x + (Math.random() - 0.5) * (blockSize - 4);
        const pz = z + half + 1.5;
        prop.position.set(px, 0, pz);
        prop.rotation.y = Math.random() * Math.PI * 2;
        this.addToChunk(prop, px, pz);
        this.allObjects.push(prop);
      }
    }
  }

  /** 创建单栋建筑（优先使用真实 GLTF 模型，无模型时回退到 ExtrudeGeometry） */
  createBuilding(centerX, centerZ, width, depth) {
    // 优先使用真实 GLTF 模型
    if (this.modelLoader && this.modelLoader.loaded) {
      const buildings = this.modelLoader.getBuildings();
      if (buildings.length > 0) {
        const modelName = buildings[Math.floor(Math.random() * buildings.length)];
        const model = this.modelLoader.clone(modelName);
        if (model) {
          // 获取模型原始尺寸用于缩放适配
          const sz = this.modelLoader.getModelSize(modelName);
          const scaleX = width / Math.max(sz.width, 0.1);
          const scaleZ = depth / Math.max(sz.depth, 0.1);
          const scaleY = 0.8 + Math.random() * 0.6; // 高度随机化
          model.scale.set(scaleX, scaleY, scaleZ);
          model.position.set(centerX, 0, centerZ);
          model.rotation.y = Math.random() * Math.PI * 2;

          // 创建 LOD 包装
          const lod = new THREE.LOD();
          lod.addLevel(model, 0);
          // 中距离：复用同一模型但关闭阴影投射
          const medModel = this.modelLoader.clone(modelName);
          if (medModel) {
            medModel.scale.copy(model.scale);
            medModel.position.copy(model.position);
            medModel.rotation.copy(model.rotation);
            medModel.traverse((c) => { if (c.isMesh) c.castShadow = false; });
            lod.addLevel(medModel, this.quality.lodNear);
          }
          // 远距离剔除
          lod.addLevel(new THREE.Object3D(), this.quality.lodFar);

          // 碰撞体（基于缩放后尺寸）
          const realH = sz.height * scaleY;
          const box = new THREE.Box3(
            new THREE.Vector3(centerX - width / 2, 0, centerZ - depth / 2),
            new THREE.Vector3(centerX + width / 2, realH, centerZ + depth / 2)
          );
          this.colliders.push(box);

          this.addToChunk(lod, centerX, centerZ);
          this.lodObjects.push(lod);
          this.allObjects.push(lod);
          return;
        }
      }
    }

    // 回退：程序化挤出几何体
    this.createProceduralBuilding(centerX, centerZ, width, depth);
  }

  /** 程序化建筑（无 GLTF 模型时的回退方案） */
  createProceduralBuilding(centerX, centerZ, width, depth) {
    const typeKey = TYPE_KEYS[Math.floor(Math.random() * TYPE_KEYS.length)];
    const type = BUILDING_TYPES[typeKey];
    const height = type.minHeight + Math.random() * (type.maxHeight - type.minHeight);

    const shape = this.createBuildingShape(width, depth);
    const geo = new THREE.ExtrudeGeometry(shape, {
      depth: height, bevelEnabled: true,
      bevelThickness: 0.4, bevelSize: 0.3, bevelSegments: 1, steps: 1,
    });
    geo.rotateX(-Math.PI / 2);
    geo.translate(centerX, 0, centerZ);

    const uv = geo.attributes.uv;
    const tileU = (width + depth) / 6;
    const tileV = height / 3.5;
    for (let i = 0; i < uv.count; i++) {
      uv.setXY(i, uv.getX(i) * tileU, uv.getY(i) * tileV);
    }
    uv.needsUpdate = true;

    const highMat = this.materials[typeKey];
    if (!this.medMaterials[typeKey]) {
      this.medMaterials[typeKey] = new THREE.MeshStandardMaterial({
        color: type.color, roughness: type.roughness + 0.1, metalness: type.metalness * 0.5,
      });
    }
    const medMat = this.medMaterials[typeKey];

    const lod = new THREE.LOD();
    const highMesh = new THREE.Mesh(geo, highMat);
    highMesh.castShadow = true; highMesh.receiveShadow = true;
    lod.addLevel(highMesh, 0);
    const medMesh = new THREE.Mesh(geo, medMat);
    medMesh.castShadow = false; medMesh.receiveShadow = true;
    lod.addLevel(medMesh, this.quality.lodNear);
    lod.addLevel(new THREE.Object3D(), this.quality.lodFar);

    const box = new THREE.Box3(
      new THREE.Vector3(centerX - width / 2, 0, centerZ - depth / 2),
      new THREE.Vector3(centerX + width / 2, height, centerZ + depth / 2)
    );
    this.colliders.push(box);

    this.addToChunk(lod, centerX, centerZ);
    this.lodObjects.push(lod);
    this.allObjects.push(lod);
  }

  /** 生成建筑 2D 轮廓（4 种随机形状） */
  createBuildingShape(width, depth) {
    const w = width / 2;
    const d = depth / 2;
    const shape = new THREE.Shape();
    const type = Math.floor(Math.random() * 4);

    switch (type) {
      case 0: // 矩形
        shape.moveTo(-w, -d);
        shape.lineTo(w, -d);
        shape.lineTo(w, d);
        shape.lineTo(-w, d);
        shape.lineTo(-w, -d);
        break;
      case 1: // L 型
        shape.moveTo(-w, -d);
        shape.lineTo(w, -d);
        shape.lineTo(w, d * 0.2);
        shape.lineTo(w * 0.2, d * 0.2);
        shape.lineTo(w * 0.2, d);
        shape.lineTo(-w, d);
        shape.lineTo(-w, -d);
        break;
      case 2: // T 型
        shape.moveTo(-w, -d);
        shape.lineTo(w, -d);
        shape.lineTo(w, 0);
        shape.lineTo(w * 0.3, 0);
        shape.lineTo(w * 0.3, d);
        shape.lineTo(-w * 0.3, d);
        shape.lineTo(-w * 0.3, 0);
        shape.lineTo(-w, 0);
        shape.lineTo(-w, -d);
        break;
      case 3: // 阶梯型
        shape.moveTo(-w, -d);
        shape.lineTo(w, -d);
        shape.lineTo(w, d);
        shape.lineTo(w * 0.4, d);
        shape.lineTo(w * 0.4, d * 0.4);
        shape.lineTo(-w * 0.4, d * 0.4);
        shape.lineTo(-w * 0.4, d);
        shape.lineTo(-w, d);
        shape.lineTo(-w, -d);
        break;
    }
    return shape;
  }

  /** 创建公园（草地 + 大量树木） */
  createPark(x, z, blockSize, treePositions, lampPositions) {
    // 草地地面
    const geo = new THREE.PlaneGeometry(blockSize, blockSize, 8, 8);
    geo.rotateX(-Math.PI / 2);
    const mesh = new THREE.Mesh(geo, this.materials.grass);
    mesh.position.set(x, 0.02, z);
    mesh.receiveShadow = true;
    this.scene.add(mesh);
    this.allObjects.push(mesh);

    // 公园内随机散布树木
    const numTrees = 5 + Math.floor(Math.random() * 4);
    for (let i = 0; i < numTrees; i++) {
      const tx = x + (Math.random() - 0.5) * blockSize * 0.7;
      const tz = z + (Math.random() - 0.5) * blockSize * 0.7;
      this.collectTree(treePositions, tx, tz, 0.9 + Math.random() * 0.6);
    }

    // 四角路灯
    this.addCornerLamps(x, z, blockSize, lampPositions);
  }

  /** 创建广场（铺装地面 + 少量树木） */
  createPlaza(x, z, blockSize, treePositions, lampPositions) {
    // 铺装地面
    const geo = new THREE.PlaneGeometry(blockSize, blockSize, 4, 4);
    geo.rotateX(-Math.PI / 2);
    const mesh = new THREE.Mesh(geo, this.materials.sidewalk);
    mesh.position.set(x, 0.02, z);
    mesh.receiveShadow = true;
    this.scene.add(mesh);
    this.allObjects.push(mesh);

    // 少量树木
    for (let i = 0; i < 3; i++) {
      const tx = x + (Math.random() - 0.5) * blockSize * 0.5;
      const tz = z + (Math.random() - 0.5) * blockSize * 0.5;
      this.collectTree(treePositions, tx, tz, 0.8 + Math.random() * 0.4);
    }

    // 四角路灯
    this.addCornerLamps(x, z, blockSize, lampPositions);
  }

  /** 创建人行道（ExtrudeGeometry 环形，带内孔） */
  createSidewalk(x, z, blockSize) {
    const sidewalkW = 2.5;
    const outer = blockSize / 2 + sidewalkW;
    const inner = blockSize / 2;

    const shape = new THREE.Shape();
    shape.moveTo(-outer, -outer);
    shape.lineTo(outer, -outer);
    shape.lineTo(outer, outer);
    shape.lineTo(-outer, outer);
    shape.lineTo(-outer, -outer);

    const hole = new THREE.Path();
    hole.moveTo(-inner, -inner);
    hole.lineTo(inner, -inner);
    hole.lineTo(inner, inner);
    hole.lineTo(-inner, inner);
    hole.lineTo(-inner, -inner);
    shape.holes.push(hole);

    const geo = new THREE.ExtrudeGeometry(shape, {
      depth: 0.15,
      bevelEnabled: false,
    });
    geo.rotateX(-Math.PI / 2);
    geo.translate(x, 0, z);

    const mesh = new THREE.Mesh(geo, this.materials.sidewalk);
    mesh.receiveShadow = true;
    return mesh;
  }

  /** 沿人行道边缘添加树木位置 */
  addSidewalkTrees(x, z, blockSize, treePositions) {
    const half = blockSize / 2;
    const offset = 1.5;
    const spacing = 6;

    for (let s = -half + 3; s <= half - 3; s += spacing) {
      if (Math.random() > 0.4) {
        this.collectTree(treePositions, x + s, z + half + offset);
      }
      if (Math.random() > 0.4) {
        this.collectTree(treePositions, x + s, z - half - offset);
      }
      if (Math.random() > 0.4) {
        this.collectTree(treePositions, x + half + offset, z + s);
      }
      if (Math.random() > 0.4) {
        this.collectTree(treePositions, x - half - offset, z + s);
      }
    }
  }

  /** 四角路灯位置 */
  addCornerLamps(x, z, blockSize, lampPositions) {
    const half = blockSize / 2 + 2;
    const corners = [
      { x: x - half, z: z - half },
      { x: x + half, z: z - half },
      { x: x - half, z: z + half },
      { x: x + half, z: z + half },
    ];
    for (const c of corners) {
      const key = this.getChunkKey(c.x, c.z);
      if (!lampPositions.has(key)) lampPositions.set(key, []);
      lampPositions.get(key).push(c);
    }
  }

  /** 收集树木位置到对应 Chunk */
  collectTree(treePositions, x, z, scale = 1) {
    const key = this.getChunkKey(x, z);
    if (!treePositions.has(key)) treePositions.set(key, []);
    treePositions.get(key).push({
      x,
      z,
      scale,
      rotation: Math.random() * Math.PI * 2,
    });
  }

  /**
   * 创建树木 InstancedMesh（树干 + 树冠各一个 InstancedMesh）
   * 树干：CylinderGeometry
   * 树冠：IcosahedronGeometry（比 SphereGeometry 更自然）
   */
  createTreeInstances(positions) {
    // 树干几何体（底部粗、顶部细）
    const trunkGeo = new THREE.CylinderGeometry(0.15, 0.25, 2.5, 8);
    trunkGeo.translate(0, 1.25, 0); // 底部对齐 y=0

    // 树冠几何体
    const foliageGeo = new THREE.IcosahedronGeometry(1.5, 1);
    foliageGeo.translate(0, 3.8, 0); // 位于树干上方

    const trunkMesh = new THREE.InstancedMesh(
      trunkGeo,
      this.materials.bark,
      positions.length
    );
    const foliageMesh = new THREE.InstancedMesh(
      foliageGeo,
      this.materials.leaves,
      positions.length
    );

    const matrix = new THREE.Matrix4();
    const pos = new THREE.Vector3();
    const quat = new THREE.Quaternion();
    const scl = new THREE.Vector3();
    const upAxis = new THREE.Vector3(0, 1, 0);

    for (let i = 0; i < positions.length; i++) {
      const tree = positions[i];
      pos.set(tree.x, 0, tree.z);
      quat.setFromAxisAngle(upAxis, tree.rotation);
      scl.setScalar(tree.scale);
      matrix.compose(pos, quat, scl);
      trunkMesh.setMatrixAt(i, matrix);
      foliageMesh.setMatrixAt(i, matrix);
    }

    // 树干投射阴影；树冠不投射（半透明体投射阴影质量差且昂贵）
    trunkMesh.castShadow = true;
    trunkMesh.receiveShadow = true;
    foliageMesh.castShadow = false;
    foliageMesh.receiveShadow = true;
    trunkMesh.instanceMatrix.needsUpdate = true;
    foliageMesh.instanceMatrix.needsUpdate = true;

    return [trunkMesh, foliageMesh];
  }

  /**
   * 创建路灯（优先使用真实 GLTF streetlight 模型，回退到 InstancedMesh）
   */
  createLampInstances(positions) {
    // 优先使用真实 GLTF 路灯模型
    if (this.modelLoader && this.modelLoader.loaded && this.modelLoader.models['streetlight']) {
      const group = new THREE.Group();
      for (const p of positions) {
        const lamp = this.modelLoader.clone('streetlight');
        if (!lamp) continue;
        lamp.position.set(p.x, 0, p.z);
        lamp.rotation.y = Math.random() * Math.PI * 2;
        group.add(lamp);
      }
      return group;
    }

    // 回退：InstancedMesh（程序化几何体路灯）
    const lampGeo = this.createLampGeometry();
    const mesh = new THREE.InstancedMesh(
      lampGeo, this.materials.metal, positions.length
    );
    const matrix = new THREE.Matrix4();
    for (let i = 0; i < positions.length; i++) {
      const p = positions[i];
      matrix.compose(
        new THREE.Vector3(p.x, 0, p.z),
        new THREE.Quaternion(),
        new THREE.Vector3(1, 1, 1)
      );
      mesh.setMatrixAt(i, matrix);
    }
    mesh.castShadow = true;
    mesh.instanceMatrix.needsUpdate = true;
    return mesh;
  }

  /** 构建路灯合并几何体 */
  createLampGeometry() {
    // 灯杆：LatheGeometry（锥形旋转面）
    const points = [];
    for (let y = 0; y <= 5; y += 0.25) {
      const r = Math.max(0.02, 0.09 - (y / 5) * 0.04);
      points.push(new THREE.Vector2(r, y));
    }
    const poleGeo = new THREE.LatheGeometry(points, 8);

    // 灯臂：CylinderGeometry（水平）
    const armGeo = new THREE.CylinderGeometry(0.035, 0.035, 0.8, 6);
    armGeo.rotateZ(Math.PI / 2);
    armGeo.translate(0.4, 5, 0);

    // 灯头：IcosahedronGeometry
    const headGeo = new THREE.IcosahedronGeometry(0.22, 0);
    headGeo.translate(0.8, 4.88, 0);

    // 合并为单一几何体
    try {
      return mergeGeometries([poleGeo, armGeo, headGeo]);
    } catch (e) {
      console.warn('[CityBuilder] mergeGeometries 失败，仅使用灯杆', e);
      return poleGeo;
    }
  }

  // ===================== Chunk 管理 =====================

  getChunkKey(x, z) {
    const cs = this.quality.chunkSize;
    return `${Math.floor(x / cs)},${Math.floor(z / cs)}`;
  }

  addToChunk(obj, x, z) {
    const key = typeof x === 'string' ? x : this.getChunkKey(x, z);
    if (!this.chunks.has(key)) {
      this.chunks.set(key, { objects: [], loaded: false });
    }
    this.chunks.get(key).objects.push(obj);
  }

  getColliders() {
    return this.colliders;
  }

  dispose() {
    for (const obj of this.allObjects) {
      if (obj.geometry) obj.geometry.dispose();
      if (obj.material) {
        if (Array.isArray(obj.material)) {
          obj.material.forEach((m) => m.dispose());
        } else {
          obj.material.dispose();
        }
      }
    }
    // 释放缓存的简化材质
    for (const k in this.medMaterials) {
      this.medMaterials[k].dispose();
    }
    this.medMaterials = {};
    this.allObjects = [];
    this.colliders = [];
    this.chunks.clear();
    this.lodObjects = [];
  }
}
