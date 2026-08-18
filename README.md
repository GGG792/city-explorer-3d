# 城市漫游 · 3D 开放世界探索

基于 Three.js + Vite 的浏览器第一人称 3D 开放世界漫游游戏。纯粹走路逛街探索，无战斗、无怪物、无任务、无剧情。

## 特性

### 渲染与画质
- WebGL2 优先，兼容 WebGL1 降级
- 完整 PBR 物理材质渲染（法线贴图、粗糙度、金属度）
- 大气散射天空着色器 + PMREM 环境反射贴图（IBL）
- ACES 电影级色调映射 + 曝光控制
- SSAO 环境光遮蔽（高端PC）
- 高质量 PCF 软阴影，阴影距离分级
- 指数雾远距离体积雾化
- UnrealBloomPass 柔和辉光
- 设备自动画质检测（高端PC/普通PC/安卓/iOS）

### 场景
- ExtrudeGeometry 挤出建筑（矩形/L型/T型/阶梯型）
- 程序化窗户纹理（反照率+法线+自发光）
- InstancedMesh 实例化树木和路灯
- LatheGeometry 路灯杆（旋转体）
- LOD 细节层级系统（近/中/远三级切换）
- Chunk 流式加载（只加载玩家附近区域）
- 视距剔除（frustum culling）

### 控制
- **PC**：指针锁定第一人称，WASD 移动，鼠标视角，Shift 奔跑，空格跳跃
- **手机**：虚拟摇杆移动，右侧拖拽视角，奔跑/跳跃按钮，强制横屏
- 角色碰撞系统（AABB + 台阶通行）
- 平滑阻尼移动手感

### 稳定性
- WebGL 上下文丢失恢复（手机切后台不崩溃）
- 页面可见性暂停（切标签页不跳变）
- 内存释放管理

## 技术栈

- [Three.js](https://threejs.org/) r160 — WebGL 3D 引擎
- [Vite](https://vitejs.dev/) 5 — 构建工具
- 纯 JavaScript ES Modules，无 TypeScript

## 本地运行

```bash
# 安装依赖
npm install

# 开发模式（热重载）
npm run dev

# 构建生产版本
npm run build

# 预览构建结果
npm run preview
```

## GitHub Pages 部署

### 方法一：命令行部署

```bash
# 1. 构建项目
npm run build

# 2. 初始化 Git 并推送源码
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/<用户名>/city-explorer-3d.git
git branch -M main
git push -u origin main

# 3. 创建 gh-pages 分支（部署构建产物）
git checkout --orphan gh-pages
git rm -rf .
cp -r dist/* .
touch .nojekyll
git add .
git commit -m "Deploy to GitHub Pages"
git push origin gh-pages
git checkout main
```

### 方法二：GitHub 网页操作

1. 在 GitHub 仓库页面点击 **Settings**
2. 左侧菜单选择 **Pages**
3. **Source** 选择 **Deploy from a branch**
4. **Branch** 选择 `gh-pages`，文件夹选 `/ (root)`
5. 点击 **Save**
6. 等待 1-2 分钟，访问 `https://<用户名>.github.io/city-explorer-3d/`

## 项目结构

```
city-explorer-3d/
├── index.html              # 入口 HTML
├── package.json            # 依赖清单
├── vite.config.js          # Vite 配置（base: './' 相对路径）
├── src/
│   ├── main.js             # 程序入口
│   ├── styles.css          # 全局样式
│   ├── core/
│   │   ├── Game.js         # 主调度器
│   │   ├── Renderer.js     # WebGL 渲染器
│   │   ├── SceneManager.js # 场景/相机/天空/光照
│   │   └── QualityDetector.js # 设备画质检测
│   ├── player/
│   │   ├── Player.js       # 玩家物理与碰撞
│   │   ├── PCControls.js   # PC 键鼠控制
│   │   └── MobileControls.js # 手机触屏控制
│   ├── world/
│   │   ├── CityBuilder.js  # 城市构建（ExtrudeGeometry/InstancedMesh/LOD）
│   │   ├── WorldLoader.js  # Chunk 流式加载
│   │   └── LODManager.js   # LOD 管理
│   ├── effects/
│   │   └── PostProcessing.js # 后期处理管线
│   ├── ui/
│   │   ├── LoadingScreen.js # 加载进度界面
│   │   └── HUD.js          # 极简 HUD
│   └── utils/
│       ├── AssetLoader.js  # 纹理生成与资源加载
│       └── ContextLossHandler.js # WebGL 上下文丢失处理
└── dist/                   # 构建产物（部署到 gh-pages）
```

## 外部资源来源

本项目使用程序化生成的纹理和几何体，无需外部资源文件。

以下为可替换方案的外部资源来源（均免费公开）：

### HDRI 环境贴图（Poly-Haven，CC0）
- https://polyhaven.com/a/kloofendal_48d_partly_cloudy
- https://polyhaven.com/a/brooklyn_sunset_parking
- https://polyhaven.com/a/spruit_sunrise

### 城市模型（Sketchfab，CC BY 4.0 / CC0）
- https://sketchfab.com/3d-models/city-street-scene
- https://polyhaven.com/a/city_canvas

### PBR 纹理贴图（Poly-Haven，CC0）
- https://polyhaven.com/a/asphalt_02
- https://polyhaven.com/a/concrete_wall_004
- https://polyhaven.com/a/bark_brown_02

当前实现使用 Three.js Sky 着色器替代 HDRI，使用 Canvas 程序化纹理替代外部贴图，确保零外部依赖、GitHub Pages 部署无 404 风险。

## License

MIT
