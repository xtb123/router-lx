<template>
  <div>
    <a href="https://baidu.com">a链接:百度</a>
    <br/>
    <button @click="baidu()">百度</button>
  </div>
</template>

<script>
export default {
  name: "index",
  methods:{
    baidu()
    {
      window.open("https://baidu.com");
    }
  }
}

</script>

<style scoped>

</style>
