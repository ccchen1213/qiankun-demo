import { registerMicroApps, start } from 'qiankun'

// registered sub app
registerMicroApps([
  {
    name: 'vue-sub-app', // sub app name
    entry: 'http://localhost:7700', 
    container: '#subapp-container',
    activeRule: '/sub',
  },
])

// 启动 qiankun
start()
