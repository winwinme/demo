<template>
  <div>
    <h3>我是抽离出来的登录组件啊<span>{{ msg }}</span></h3>

    <router-link to="/account">account</router-link>
    <router-link to="/register">register</router-link>
    <hr>
    <h4>下面是路由组件</h4>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        msg: '成功显示来吧',
      };
    },
  };
</script>
<style
    scoped
    lang="scss"
>
  @import "../css/index.scss";
  /*div {*/
    /*color: pink;*/
    /*span {*/
      /*color: blue;*/
    /*}*/
  /*}*/
</style>