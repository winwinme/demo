import VueRouter from 'vue-router';
import Account from './components/account.vue';
import Register from './components/register.vue';
// 子组件
import Goodlist from './components/subcom/goodlist.vue';
import Detail from './components/subcom/detail.vue';

var router = new VueRouter({
  routes: [
    // 默认路由
    { path: '/', component: Account },
    { path: '/account', component: Account, children: [
        {path: '/account/goodlist', component: Goodlist},
        {path: '/account/detail', component: Detail},
      ] },
    { path: '/register', component: Register },
  ]
})
export default router;