<template>
  <div id="app">
    <MainContainer/>
  </div>
</template>

<script>
import MainContainer from "./components/MainContainer.vue";

export default {
  name: "App",
  components: {
    MainContainer
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #3e556d;
  margin: 0px;
  right: 0;
  left: 0;
  height: 100%;
  width: 100%;
  position: fixed;
}
</style>
