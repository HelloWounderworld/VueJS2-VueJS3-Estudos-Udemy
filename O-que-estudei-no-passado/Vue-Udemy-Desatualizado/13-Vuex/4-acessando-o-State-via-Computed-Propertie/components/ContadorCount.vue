<template>
  <div>
    <h2 class="font-weight-light">
      <!-- Contador: {{$store.state.contador}} -->
      Contador: {{contador}}
    </h2>
    <button class="btn btn-lg btn-danger mr-1" @click="decrementar">-</button>
    <button class="btn btn-lg btn-success" @click="incrementar">+</button>
  </div>
</template>

<script>
// Aqui aprendemos fazer o acesso no estado do vuex (state) sendo chamado pelo $store, definido pelo diretório store e importado pelo main.js
// Agora, suponhamos que existe um caso em que vc queira acessar o contador em mais components, para isso podemos usar o computed para conseguirmos definir apenas um nome para ele e assim retornar
// a ação do $store.state. Lembrando que esse computed property definido é um getter, logo, ele apenas estará lendo as mudanças ocacionadas
// Mas, existem casos em que tem muito mais propriedades definidas para o estado, donde criar um componente para cada um dessas propriedades, acabaria ficando muito volumoso e com péssima performance
export default {
  // data () {
  //   return {
  //     contador: 0
  //   }
  // },
  computed: {
    contador () {
      return this.$store.state.contador
    }
  },
  methods: {
    decrementar () {
      this.$store.state.contador--
    },
    incrementar () {
      this.$store.state.contador++
    }
  }
}
</script>
