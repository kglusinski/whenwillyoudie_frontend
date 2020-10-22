<template>
  <div>
    Będziesz żyć: {{ lifeExpectancy }} lat
    <form>
      <input type="number" name="age" min="0" v-model="age" max="100">
      <input type="radio" name="place_type" v-model.number="placeType" value=0> Miasto
      <input type="radio" name="place_type" v-model.number="placeType" value=1> Wieś
      <input type="radio" name="sex" v-model.number="sex" value=0> Mężczyzna
      <input type="radio" name="sex" v-model.number="sex" value=1> Kobieta
      <button v-on:click="calculate">Ile będę jeszcze żyć?</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Calculator',
  data: () => {
    return {
      age: 0,
      placeType: 0,
      sex: 0,
      lifeExpectancy: 0,
    };
  },
  props: {
    msg: String
  },
  methods: {
    async calculate(e) {
      e.preventDefault();
      const result = await axios.get(`http://localhost:8000/data?age=${this.age}&sex=${this.sex}&place_type=${this.placeType}`);
      console.log(result);
      this.lifeExpectancy = result.data["life_expectancy"]
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
