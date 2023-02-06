import Vue from 'vue'
import App from './App.vue'
// import AppContador from './AppContador.vue'

// Vue.component('app-contador', AppContador)

// render é uma funcao de renderizacao
// $mount consegue marcar o seletor
new Vue({
  render: h => h(App)
}).$mount('#app')
