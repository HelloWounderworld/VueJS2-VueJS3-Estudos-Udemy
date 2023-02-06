import Vue from 'vue'

// o const data abaixo ele é uma referencia de memoria que chamado no Vue.component
// torna o componente ltt-component chamado no index, quando chamadotrez vezes, tornar os tres componentes
// nao auto o suficiente, no sntido de clicado em um dos botoes de contador, em vez de contar apenas o botao
// clicado contaria tbm todos outros dois botoes de forma similar
// const data = {
//   titulo: 'Curso de VueJS',
//   contador: 0
// }

// Para tornar cada instancia, ltt-component, auto o suficiente
// é necessário que o componente data dentro do Vue.component seja
// uma funcao e nao retornando uma referência de memória.
// Vue.component('ltt-component', {
//   data: function() {
//     return {
//       titulo: 'Curso de VueJS',
//       contador: 0
//     }
//   },
//   methods: {
//     incrementar: function() {
//       this.contador++
//     }
//   },
//   template: `
//     <div>
//       <h1>{{titulo}}</h1>
//       <button @click="incrementar">Clicado {{contador}} vezes</button>
//     </div>
//   `
// })

const lttComponent = {
data: function() {
  return {
    titulo: 'Curso de VueJS',
    contador: 0
  }
},
methods: {
  incrementar: function() {
    this.contador++
  }
},
template: `
  <div>
    <h1>{{titulo}}</h1>
    <button @click="incrementar">Clicado {{contador}} vezes</button>
  </div>
`
}

// o método components serve para tornar o escopo local de algum componente que vc cria
// A diferenca entre esse metodo componente, usando o const lttComponent, que foi usado abaixo com o método Vue.component()
// seria que a segunda serve como um escopo global
// para que sirva de forma local seja necessario o uso de data como uma funcao dentro do
// Vue.component()
new Vue ({
  el: '#app1',
  components: {
    'ltt-component': lttComponent
  }
})

new Vue ({
  el: '#app2'
})
