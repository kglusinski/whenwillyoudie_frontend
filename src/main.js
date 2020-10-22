import Vue from 'vue'
import store from './store'
import router from './routes'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store: store,
  router: router
}).$mount('#app')

