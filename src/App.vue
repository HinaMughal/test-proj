<template>
  <HelloWorld msg="Demo Vue.js App"/>
  <SecondCom />
</template>

<script>
import HelloWorld from './components/FirstComp.vue'
import SecondCom from './components/SecondComp.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    SecondCom
  }
}
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
