<template>
    <div>
        <h2>Filme selecionado</h2>
        <!-- Aqui o v-if está condicionando se o filme for selecionado -->
        <div class="card" v-if="filme">
            <div class="card-body">
                <h5 class="card-title">{{filme.titulo}}</h5>
                <button @click="editar" class="btn btn-danger float-right">Editar</button>
            </div>
        </div>
        <p v-else>Nenhum filme selecionado</p>
    </div>
</template>

<script>
import { eventBus } from './../main.js'
// Vamos precisar exportar esse arquivo para o arquivo FilmesLista. Assim, esse arquivo se tornará um componente filho
// do FilmesLista, com o props definido abaixo. Assim, no componente pai, bastará chamar o seletor definido como foi importado e dentro desse seletor
// conectar com o v-bind o a propriedade definida aqui no props
export default {
  // Como não irei mais receber dados do componente pai e receberei diretamente do
  // componente filho FilmesListaIten, o props abaixo perde o sentido
  // props: {
  //   filme: Object
  // }
  data () {
    return {
      filme: undefined
    }
  },
  created () {
    // $on permite ouvir o evento emitido pelo $emit
    eventBus.$on('selecionarFilme', (filmeSelecionado) => {
      this.filme = filmeSelecionado
    })
    // Assim, estamos estabelecendo a comunicacao entre o componente filho FilmeListaIten e o outro componente filho FilmesListaItenInfo
    // sem precisar por intermédio do pai
  },
  methods: {
    editar (event) {
      this.$emit('editarFilme', this.filme)
    }
  }
}
</script>
