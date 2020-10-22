<template>
  <div>
    <form>
      <div class="form-group">
        <label for="username">Nazwa</label>
        <input type="text" name="username" id="username" v-model="username">
      </div>
      <div class="form-group">
        <label for="password">Hasło</label>
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
    async login(e) {
      e.preventDefault();
      const data = {
        username: this.username,
        password: this.password
      }
      const res = await axios.post("http://localhost:8000/api/login_check", data);
      console.log(res);

      this.$store.commit("setToken", res.data["token"]);
      this.$router.push("/");
    },
  },
}
</script>

<style scoped>

</style>
