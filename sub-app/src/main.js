import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun'

let app = null

function render(props = {}) {
  const { container } = props
  app = createApp(App)
  app.use(router)
  app.mount(container ? container.querySelector('#app') : '#app')
}

// 🚀 qiankun 生命周期
renderWithQiankun({
  bootstrap() {
    console.log('vue app bootstraped')
  },
  mount(props) {
    console.log('vue app mount', props)
    render(props)
  },
  unmount() {
    if (app) {
      app.unmount()
      app = null
    }
  },
})

// 🧪 独立运行
if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render()
}
