<template>
  <div class="row">
    <div class="col-6 offset-3">
      <div id="result" v-if="lifeExpectancy != 0">
        <h2>Będziesz życ jeszcze...</h2>
        <p class="display-4"><b>{{ lifeExpectancy }}</b> lat</p>
        <p class="lead">
          Zakładając śmierć naturalną, przy obecnych warunkach umieralności wg danych GUS na rok 2019.
          W praktyce trochę wiecej. Każdy przeżyty rok zwiększa szansę na przeżycie kolejnego. Warunki umieralności również się zmieniają.
          Obecnie wiek śmiertelności przesuwa się coraz dalej.
        </p>
        <div v-if="placeType != 1">
          <h4>Czy wiesz, że...?</h4>
          <p class="lead">
            Jeśli <span v-if="sex === 0">mieszkałbyś</span><span v-else>mieszkałabyś</span> na wsi,
            Twoje dalsze życie mogłoby trwać {{ lifeExpectancyRural }} lat czyli o {{ lifeExpectancyRural - lifeExpectancy }} dłużej.
          </p>
        </div>

      </div>

      <form>
        <div class="form-group">
          <h3>Ile masz lat?</h3>
          <label for="age" class="sr-only">Wiek</label>
          <input class="form-control" type="number" name="age" id="age" min="0" v-model="age" max="100">
        </div>
        <div class="form-group">
          <h3>Gdzie mieszkasz?</h3>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="place_type" id="place_type_city" v-model.number="placeType" value=0>
            <label for="place_type_city" class="form-check-label">Miasto</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="place_type" id="place_type_rural" v-model.number="placeType" value=1>
            <label for="place_type_rural" class="form-check-label">Wieś</label>
          </div>
        </div>
        <div class="form-group">
          <h3>Twoja płeć?</h3>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="sex" id="sex_male" v-model.number="sex" value=0>
            <label for="sex_male" class="form-check-label">Mężczyzna</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="sex" id="sex_female" v-model.number="sex" value=1>
            <label for="sex_female" class="form-check-label">Kobieta</label>
          </div>
        </div>
        <button class="btn btn-success" v-on:click="calculate">Ile będę jeszcze żyć?</button>
      </form>
    </div>
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
      lifeExpectancyRural: 0
    };
  },
  props: {
    msg: String
  },
  methods: {
    async calculate(e) {
      e.preventDefault();
      const result = await axios.get(`http://localhost:8000/data?age=${this.age}&sex=${this.sex}&place_type=${this.placeType}`);
      this.lifeExpectancy = result.data["life_expectancy"]
      if (this.placeType === 0) {
        const resultRural = await axios.get(`http://localhost:8000/data?age=${this.age}&sex=${this.sex}&place_type=1`);
        this.lifeExpectancyRural = resultRural.data["life_expectancy"]
      }
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
