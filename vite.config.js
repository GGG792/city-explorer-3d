import { defineConfig } from 'vite';

// Vite 构建配置 —— 适配 GitHub Pages 静态托管
// base 设为相对路径 './'，确保上传 GitHub Pages 后资源路径正确，不会出现 404
export default defineConfig({
  base: './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // 提高 chunk 大小警告阈值，Three.js 库较大属于正常
    chunkSizeWarningLimit: 1500,
    rollupOptions: {
      output: {
        // 将 Three.js 单独拆分，利于浏览器缓存
        manualChunks: {
          three: ['three']
        }
      }
    }
  },
  server: {
    host: true,
    port: 5173
  }
});
