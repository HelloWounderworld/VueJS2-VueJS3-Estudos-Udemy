import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
// Nesse aquivo voltamos à funcao de renderizacao, diferente do que estava
// antes da aula Nome das "props" e case insensitive
new Vue({
    render: h => h(App)
}).$mount('#app')
