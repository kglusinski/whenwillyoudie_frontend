<template>
  <div id="app" class="container">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    loggedIn() {
      return this.$store.state.loggedIn
    }
  },
  beforeMount() {
    if (!this.loggedIn) {
      this.$router.push("/login")
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
