// import { defineConfig } from 'vite'
// import vue from '@vitejs/plugin-vue'
// import path from 'path'

// export default defineConfig({
//   plugins: [vue()],
//   resolve: {
//     alias: {
//       '@': path.resolve(__dirname, './src'),
//     },
//   },
//   server: {
//     port: 7700,
//     cors: true,
//     headers: {
//       'Access-Control-Allow-Origin': '*',
//     },
//   },
//   build: {
//     target: 'esnext',
//     outDir: 'dist',
//     assetsDir: '',
//     lib: {
//       entry: path.resolve(__dirname, 'src/main.js'), // Vue 应用入口
//       name: 'VueSubApp',
//       formats: ['umd'], // 👈 使用 UMD 格式
//       fileName: () => 'vue-sub-app.js',
//     },
//   },
// })

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import qiankun from 'vite-plugin-qiankun'

export default defineConfig({
  plugins: [
    vue(),
    qiankun('vue-sub-app', { // 👈 子应用名称
      useDevMode: true,       // 👈 开启开发模式支持
    }),
  ],
  server: {
    port: 7700,
    cors: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
})
