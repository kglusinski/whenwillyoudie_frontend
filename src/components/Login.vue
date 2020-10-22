<template>
  <div>
    <form>
      <div class="form-group">
        <label for="username"></label>
        <input type="text" name="username" id="username" v-model="username">
      </div>
      <div class="form-group">
        <label for="password"></label>
        <input type="password" name="password" id="password" v-model="password">
      </div>
      <button class="btn btn-success" @click="login">Login</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "Login",
  data: () => {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    async login() {
      const data = {
        username: this.username,
        password: this.password
      }
      const res = await axios.post("localhost:8000/api/login_check", data);

      this.$store.commit("setToken", res.body["token"]);
    },
  },
}
</script>

<style scoped>

</style>
