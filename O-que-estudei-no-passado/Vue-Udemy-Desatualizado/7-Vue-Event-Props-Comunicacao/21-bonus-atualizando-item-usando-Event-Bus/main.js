import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// o eventBus usado abaixo serve para facilitar a comunicaca de compoenentes filhos de várias geracoes futuras com outros componentes filhos de outras geracoes futuras
// sem que haja a necessidade de ter que ficar criando várias propriedades e eventos para que ocorra um percurso enorme de um neto/bisneto para um outro neto/bisneto via o fluxo unidirecional explicado
// na relacao de componente pai e filho, o que torna complicado o gerenciamento
// export const eventBus = new Vue()
// Podemos utilizar o eventBus como o ponto central de reaproveitar alguns códigos
export const eventBus = new Vue({
  methods: {
    selecionarFilme (filmeSelecionado) {
      // No componente FilmesListaIten, vc chama eventBus.selecionarFilme(this.'valor atribuido no data')
      this.$emit('selecionarFilme', filmeSelecionado)
    },
    atualizarFilme (filmeAtualizado) {
      this.$emit('atualizarFilme', filmeAtualizado)
    }
  }
})

new Vue({
  render: h => h(App)
}).$mount('#app')
