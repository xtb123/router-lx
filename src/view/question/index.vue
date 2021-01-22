<template>
  <div>
    <h2>1.思考SPA的缺点</h2>
    <p>
      缺点：
      首屏加载时间会很长。
      SEO不友好。
      主要是因为SPA利用了hash片段实现路由，而利用hash片段不会作为HTTP请求中的一部分发送给服务器。
      而SPA使用hash片段的目的是：当片段的内容发送变化时，浏览器不会像URI发送变化时那样发起新的网络请求。这样就可以只请求页面或视图渲染所需要的数据，而不是为每一个页面获取并解析整份文档。
    </p>
  </div>
</template>

<script>
export default {
  name: "index"
}
</script>

<style scoped>

</style>
