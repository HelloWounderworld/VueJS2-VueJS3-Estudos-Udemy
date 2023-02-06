import Vue from 'vue'
import App from './App.vue'
import FilmesListaIten from './components/FilmesListaIten.vue'

Vue.config.productionTip = false

new Vue({
    components: {
        FilmesListaIten
    }
}).$mount('#app')
