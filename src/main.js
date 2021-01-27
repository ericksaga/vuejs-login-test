import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  data: {
    login: function(data) {
      /*fetch("https://apidev.kanvas.dev/v1", {
        method: "post",
        body: data
      })*/
      console.log(data)
    }
  },
  render: h => h(App)
}).$mount('#app')
