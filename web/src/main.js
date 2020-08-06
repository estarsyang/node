import Vue from 'vue'
import App from './App.vue'
import uiComponent from './util/ui'
import './assets/style/reset.scss'

Vue.use(uiComponent)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
