<template>
  <li class="list-group-item">
    <span>{{ filme.titulo }} | {{ filme.ano }} | {{ filme.diretor }}</span>
    <button class="btn btn-success float-right">Selecionar</button>
  </li>
</template>

<script>
export default {
  // Ate agora usamos a props como uma lista, mas se quisermos tipar ela
  // precisamos colocar um objeto no lugar dela.
  //  Para contornar o problema que apareceu no console.log, bastaríamos colocar
  // no filmeTitulo um Number, junto com a String como uma lista [String, Number]
  // Mas como o nosso filmeTitulo, precisa ser uma String, deixaremos como está
  // Uma outra maneira de validar a os componentes das props seria que, no lugar onde se coloca a tipagem,
  // neste caso a String no filmeTitulo, do componente é tu chamar um objeto e em seguida para tipar o componente
  // chamar uma chave chamado type
  // Além disso, podemos tbm chamar uma relacao chamada required, onde serve para dizer que
  // tal componente dentro do props é obrigatória
  // Caso eu use o default, não faria sentido usar o required, pois e default já obriga o uso
  // do componente de uma forma, mas com um valor definido dentro dela
  // Mas se vc estiver trabalhando algo como objetos que exige o uso do default de um componente definido
  // o default precusa se tornar uma funcao default() { return [] }. Diferente de tipos primitivos como String, Number ou Boolean
  // Uma última opção que podemos configurar seria o validator, na qual em todas as situações, por padrão,
  // o validator deverá ser uma funcao
  // Esse conjunto de funcionalidades que o props possui serve para que outros desenvolvedores
  // quando forem mexer no seu projeto, para servirem de uma instrução didática para eles conseguirem
  // ver o que pode ou não ser alterado e incluído dentro do prop criado
  // Um último detalhe que temos sobre a funcionalidade de props, é que não podemos chamar as funções
  // dentro dela criado pelo computed, methods, etc... Em outras palavras, não podemos acessar
  // as propriedades das instâncias em si, como propriedades definidas no computed, ou objetos definidos no data, etc...
  // inheritAttrs: false,
  props: {
    // titulo: {
    //   type: String,
    //   required: true
    // },
    // ano: {
    //   type: Number,
    //   required: true
    // }
    filme: {
      type: Object,
      required: true
    }
    // Agora, podemos passar o objeto inteiro e utilizar ele dentro da instância vue
    // sem precisar criar cada propriedade para cada atributo criado no filmes, em FilmesLista
  }
  // computed: {
  //   filmeTituloConcatenado () {
  //     return `Titulo: ${this.titulo}`
  //   }
  // },
  // created () {
  //   // Vamos colocar o created para fazer o mapeamento do que está acontecendo
  //   // console.log(typeof this.titulo)
  //   // o this.$attrs nos permite acessar os atributos non props quando tiver
  //   console.log('Attrs: ', this.$attrs)
  // }
}
</script>
