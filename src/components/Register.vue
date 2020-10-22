<template>
  <div class="row">
    <div class="col-6 offset-3">
      <h3>Zarejestruj się</h3>
      <form>
        <div class="form-group">
          <label for="username">Nazwa</label>
          <input class="form-control" type="text" name="username" id="username" v-model="username">
        </div>
        <div class="form-group">
          <label for="password">Hasło</label>
          <input class="form-control" type="password" name="password" id="password" v-model="password">
        </div>
        <button class="btn btn-success" @click="login">Utwórz konto</button>
      </form>
      Masz już konto? <router-link  to="/login">Zaloguj się</router-link>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "Register",
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
      const res = await axios.post("http://ec2-3-127-243-187.eu-central-1.compute.amazonaws.com:8080/api/register", data);

      this.$store.commit("setToken", res.data["token"]);
      this.$router.push("/login");
    },
  },
}
</script>

<style scoped>

</style>
