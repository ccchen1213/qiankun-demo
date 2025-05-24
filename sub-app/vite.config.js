import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: './', // 重要：确保资源路径正确
  server: {
    port: 7101, // 确保端口不冲突
    cors: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  build: {
    target: 'esnext',
    outDir: 'dist',
    assetsDir: 'static',
  },
})
