<template>
  <div>我是抽离出来的登录组件啊
    <span>{{ msg }}</span>
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
  div {
    color: pink;
    span {
      color: blue;
    }
  }
</style>