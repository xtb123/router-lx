<template>
  <div id="app">
    <h1>购物车示例</h1>
    <p>姓名: {{ $store.state.userInfo.username }}</p>
    <hr />
    <h2>产品</h2>
    <ProductList />
    <hr />
    <h2>我的购物车</h2>
    <Cart/>
  </div>
</template>

<script>
import ProductList from "./components/ProductList";
import Cart from "./components/Cart"
export default {
  name: "App",
  components: {Cart, ProductList }
};
</script>

<style></style>
