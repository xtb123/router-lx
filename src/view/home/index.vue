<template>
  <div>
    <h2>home</h2>
    <router-link to="/home">主页</router-link>
    <br/>
    <router-link to="/blog">博客</router-link>
    <br/>
    <router-link to="/question">问答</router-link>
    <br/>
    <router-link to="/shop">商场</router-link>
    <br/>
    <router-link to="/personal">个人中心</router-link>
    <br/>
    <router-link to="/baidu">baidu</router-link>
    <!--    <a href="https://baidu.com">百度</a>-->
  </div>
</template>

<script>
export default {
  props: ["id"],
  computed: {
    routerInfo() {
      const {fullPath, path, title, params, query, meta} = this.$route;
      return {
        fullPath,
        path,
        title,
        params,
        query,
        meta
      }
    }
  },

}
</script>

<style scoped>

</style>
