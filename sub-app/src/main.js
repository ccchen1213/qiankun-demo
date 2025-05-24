import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

let app = null

function render(props = {}) {
  const { container } = props
  app = createApp(App)
  app.mount(container ? container.querySelector('#app') : '#app')
}

// 独立运行时，直接挂载
if (!window.__POWERED_BY_QIANKUN__) {
  render()
}

// 生命周期钩子
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
