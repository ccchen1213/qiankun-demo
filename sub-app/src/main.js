import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'

let app = null

function render(props = {}) {
  const { container } = props
  app = createApp(App)
  app.use(router)
  app.mount(container ? container.querySelector('#app') : '#app')
}

// 独立运行时直接挂载
if (!window.__POWERED_BY_QIANKUN__) {
  render()
}

// 导出生命周期函数供主应用调用
export async function bootstrap() {
  console.log('[vue] vue app bootstraped')
}

export async function mount(props) {
  console.log('[vue] props from main framework', props)
  render(props)
}

export async function unmount() {
  app.unmount()
  app = null
}
