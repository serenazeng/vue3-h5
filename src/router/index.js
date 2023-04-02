// https://router.vuejs.org/zh/
import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'

// 导入路由组件
import Home from '../views/home/index.vue'
const About = { template: '<div>Aboutzz</div>' }
// 定义路由，每个路由都需要映射到一个组件
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  { path: '/about', component: About },
]

// 创建路由实例并传递 `routes` 配置
const router = createRouter({
//   history: createWebHistory(process.env.VUE_APP_PUBLIC_PATH),
  history: createWebHashHistory(),
  routes
})

router.beforeEach((_to, _from, next) => {
  next()
})

router.afterEach(() => {
  // next()
})

// 导出路由实例，并在 `main.ts` 挂载
export default router