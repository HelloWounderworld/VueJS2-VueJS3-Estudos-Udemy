import Vue from 'vue'
// import App from './App.vue'
import AppHeader from './AppHeader.vue'
// import AppContador from './AppContador.vue'

Vue.component('AppHeader', AppHeader)

new Vue({
  // render: h => h(App)
}).$mount('#app')
