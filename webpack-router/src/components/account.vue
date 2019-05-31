<template>
  <div>
    <h3>这是路由账户组件页面</h3>
    <router-link to="/account/goodlist">列表</router-link>
    <router-link to="/account/detail">详情</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    // name: 'account',
  };
</script>

<style scoped lang="scss">
  h3 {
    color: aquamarine;
  }
</style>