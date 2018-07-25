import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import index from './components/index.vue';
Vue.use(VueRouter)
Vue.config.productionTip = false
const router = new VueRouter({
  routes:
    [
      { path: '/', component: index },
      { path: '/index', component: index }
  ]
})

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能


new Vue({
  el:'#app',
  render: h => h(App),
  router,
})
