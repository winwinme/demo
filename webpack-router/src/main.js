// 入口文件
console.log('ok333')

import Vue from 'vue';
import VueRouter from 'vue-router';
import login from './components/login.vue';

Vue.use(VueRouter);

import router from './router.js';

// import './css/index.scss'

// 热更新
if(module.hot) {
  module.hot.accept();
}


var vm = new Vue({
  el: '#app',
  data: {},
  methods: {},
  render: c=>c(login),
  router
});