import Vue from 'vue'
import store from './store'
import router from './routes'
import App from './App.vue'

require('dotenv').config()

Vue.config.productionTip = false

console.log(process.env)

new Vue({
  render: h => h(App),
  store: store,
  router: router,
}).$mount('#app')

