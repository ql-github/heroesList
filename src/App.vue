<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <!-- 提取公共头部组件 -->
    <AppHeader></AppHeader>
    <div class="container-fluid">
      <div class="row">
        <!-- 提取侧边栏组件 -->
        <AppSilder></AppSilder>
        <!-- 提取英雄列表组件 -->
        <!-- <AppList></AppList> -->
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import AppHeader from './components/AppHeader';
import AppSilder from './components/AppSilder';

export default {
  name: "app",
  data() {
    return {
      
    }
  },
  components: {
    // HelloWorld
    AppHeader,
    AppSilder,
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
