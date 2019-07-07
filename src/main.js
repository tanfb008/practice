// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible/flexible'
import './assets/css/base.css'
import './assets/css/svg-image.css'
import store from './store'
import echarts from 'echarts'

Vue.config.productionTip = false
Vue.prototype.$echarts = echarts

// router.beforeEach((to, from, next) => {
//   var userInfo = window.localStorage.getItem('token');//获取浏览器缓存的用户信息
//   if(userInfo){ //如果有就直接到首页咯
//       next();
//   } else {
//       if(to.path=='/detail'){ //如果是登录页面路径，就直接next()
//           next();
//       } else { //不然就跳转到登录；
//           next('/detail');
//       }
//   }
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
