<template>
  <div>
    <h2 class="font-weight-light">
      <!-- Contador: {{$store.state.contador}} -->
      Contador: {{contador}}
    </h2>
    <h4 class="font-weight-light">
      <!-- Contador: {{$store.state.contador}} -->
      Contador Alias: {{contadorAlias}}
    </h4>
    <h4 class="font-weight-light">
      <!-- Contador: {{$store.state.contador}} -->
      Contador Multiplicado: {{contadorMultiplicado}}
    </h4>
    <button class="btn btn-lg btn-danger mr-1" @click="decrementar">-</button>
    <button class="btn btn-lg btn-success" @click="incrementar">+</button>
  </div>
</template>

<script>
// Aqui aprendemos fazer o acesso no estado do vuex (state) sendo chamado pelo $store, definido pelo diretório store e importado pelo main.js
// Agora, suponhamos que existe um caso em que vc queira acessar o contador em mais components, para isso podemos usar o computed para conseguirmos definir apenas um nome para ele e assim retornar
// a ação do $store.state. Lembrando que esse computed property definido é um getter, logo, ele apenas estará lendo as mudanças ocacionadas
// Mas, existem casos em que tem muito mais propriedades definidas para o estado, donde criar um componente para cada um dessas propriedades, acabaria ficando muito volumoso e com péssima performance
// Para resolver esse problema, podemos importar, do vuex, a propriedade mapState que resolveria a tal problema de quantidade de propriedades definida no state
// No caso, ao chamar a função mapState, dentro dela, podemos colocar um array e nela chamar as propriedades definidas para os estados
// No caso, temos a propriedade contador definido e podemos simplesmente chamar como uma string e realizar o mesmo uso dessa propriedade como fizemos usando o $store.state
// Uma outra forma eficiente de usar o mapState dentro do computes properties seria, em vez de colocar o um array, colocar um objeto dentro dela
// E para cada elemento definido dentro desse objeto, especificarmos qual das funcionalidades definidas do vuex estamos chamando e dentro dessa funcionalidade qual das propriedades definidas estamos chamando
// no caso, a funcionalidade que estamos chamando abaixo é o state e a propriedade definida dentro do state que estamos chamando é o contador
// Uma outra forma de fazermos a mesma coisa seria apenas colocando a propriedade definida dentro do state como uma string, como podemos ver abaixo
// Caso vc quiser criar um alias para o contador tbm podemos fazer como abaixo definido como contadorAlias
// Podemos definir, também, um contador local e relacionar isso com o state do vuex. No caso, é uma forma de relacionar as funcionalidades do vuex com as propriedades
// definidas dentro vuejs como é expresso pelo contadorMultiplicado abaixo
// Existem casos em que precisamos mesclar outros computed properties, independentes das funcionalidades que o Vuex possui
// Para isso, a forma como está definida o computed properties abaixo, com o mapState sendo chamado logo em seguida, não é possível
// Pra resolvermos esse tipo de problema devemos usar uma propriedade chamado Spread Operator, que é expresso por três pontos, ...
import { mapState } from 'vuex'
export default {
  // data () {
  //   return {
  //     contador: 0
  //   }
  // },
  // computed: {
  //   contador () {
  //     return this.$store.state.contador
  //   }
  // },
  data () {
    return {
      contadorLocal: 2
    }
  },
  // computed: mapState(['contador']),
  // computed: mapState({
  //   contador: 'contador',
  //   contadorAlias: 'contador',
  //   contadorMultiplicado (state) {
  //     return state.contador * this.contadorLocal
  //   }
  // }),
  computed: {
    ...mapState({
      contador: 'contador',
      contadorAlias: 'contador',
      contadorMultiplicado (state) {
        return state.contador * this.contadorLocal
      }
    })
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
