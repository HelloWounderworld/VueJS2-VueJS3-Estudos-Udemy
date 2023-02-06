import { createApp } from 'vue'
import App from './App.vue'
// import Vue from 'vue'

// Vue.component('Assíncrono', (resolve, reject) => {
//   setTimeout(() => {
//     resolve({
//       template: '<h2>Component Assincrono</h2>'
//     })
//   }, 2000)
// })

// Vue.component('Assíncrono', () => import('./components/Assincrono.vue'))

createApp(App).mount('#app')
