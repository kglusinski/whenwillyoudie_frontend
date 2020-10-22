<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">When will you die?</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link to="/" class="nav-link">Kalkulator</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
        </ul>
        <ul class="navbar-nav">
          <li class="nav-item" v-if="loggedIn">
            <button class="btn btn-danger" @click="logout">Logout</button>
          </li>
          <li v-else>
            <router-link class="btn btn-danger" to="/login">Login</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <div id="app" class="container">
      <router-view />
    </div>
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
  },
  methods: {
    logout() {
      this.$store.commit("logout");
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
