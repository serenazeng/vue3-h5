import { createApp } from 'vue'
import Router from './router/index'
import App from './App.vue'
import 'amfe-flexible'

// 创建并挂载根实例
const app = createApp(App)
app.use(Router)
app.mount('#app')
