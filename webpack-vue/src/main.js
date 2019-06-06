// 入口文件
console.log('ok333')

import Vue from 'vue';
import login from './components/login.vue'
// import './css/index.scss'

// 热更新
if(module.hot) {
  module.hot.accept();
}


var vm = new Vue({
  el: '#app',
  data: {},
  methods: {},
  render: c=>c(login)
});