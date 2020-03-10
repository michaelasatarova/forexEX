<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <Kurzy />
  </div>
</template>

<script>
import Kurzy from "./components/Kurzy.vue";

export default {
  name: "App",
  components: {
    Kurzy,
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
