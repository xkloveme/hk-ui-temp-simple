<!--
 * @describe: 描述
 * @Author: superDragon
 * @Date: 2019-06-26 09:50:23
 * @LastEditors: superDragon
 * @LastEditTime: 2019-09-02 14:49:32
 -->
<template>
  <div id="app">
    <h1>
      <a
        href="https://hy.hekr.me/hk-ui/web/component/hk-button.html"
        style="text-decoration: blink;"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img class="img" :style="{ backgroundColor: this.color }" src="./assets/logo.png" alt="hekr logo" />
        欢迎使用HEKR-UI
      </a>
    </h1>
    <hk-button type="primary">Element-ui拓展的组件库</hk-button>
    <hk-button type="info">通过少量的配置来生成页面</hk-button>
    <hk-button type="warning">让开发更简单</hk-button>
    <hk-button type="danger">Easy Code</hk-button>
    <h2>您已成功配置！！！</h2>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      value: '44'
    }
  },
  computed: {
    color () {
      return '#' + Math.floor(Math.random() * 16777215).toString(16);
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.img {
  width: 300px;
  height: 100px;
  background-color: antiquewhite;
  display: block;
  text-align: center;
  margin: 0 auto;
}
</style>
