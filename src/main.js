import Vue from 'vue'
import App from './App.vue'
import LightTimeline from 'vue-light-timeline'

Vue.config.productionTip = false

Vue.use(LightTimeline);

new Vue({
  render: h => h(App),
}).$mount('#app')
