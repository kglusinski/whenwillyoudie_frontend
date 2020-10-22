<template>
  <div id="app" class="container">
    <Calculator />
  </div>
</template>

<script>
import Calculator from './components/Calculator'

export default {
  name: 'App',
  components: {
    Calculator
  },
  computed: {
    loggedIn() {
      return this.$store.state.loggedIn
    }
  },
  beforeMount() {
    if (!this.loggedIn) {
      console.log("not logged");
    }
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
