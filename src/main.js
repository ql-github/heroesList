import Vue from 'vue'
import App from './App.vue'

import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./assets/css/index.css";
import router from './router.js';
// 全局配置axios
import axios from 'axios';
// 配置baseURL
axios.defaults.baseURL='http://localhost:3000/';
// 将axios挂载到vue原型上
Vue.prototype.axios = axios;
Vue.config.productionTip = false
new Vue({
  el: "#app",
  render: h => h(App),
  router
}).$mount('#app')