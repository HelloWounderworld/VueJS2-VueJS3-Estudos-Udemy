<template>
    <div>
        <h2>Editar filme</h2>

        <div class="form-group">
            <label>Título:</label>
            <input
              type="text"
              class="form-control"
              placeholder="Insira o título"
              :value="filmeSelecionado.titulo"
              @input="filmeSelecionado = { propriedade: 'titulo', valor: $event.target.value }"
            >
        </div>

        <div class="form-group">
            <label>Título:</label>
            <input
              type="text"
              class="form-control"
              placeholder="Insira o ano"
              :value="filmeSelecionado.ano"
              @input="filmeSelecionado = { propriedade: 'ano', valor: $event.target.value }"
            >
        </div>
        <!-- Esse botao abaixo sera usado para salvar as alteracoes linkando com o computed que nao perpetua a mutacao de filho para o pai em tempo real -->
        <button @click="salvarFilme" class="btn btn-primary float-right">Salvar</button>
    </div>
</template>

<script>
import { eventBus } from './../main.js'
// As trocas de :value para v-model ocorrida acima retrata exatamente o problema da rodrigagem
// que está acontecendo na tela de mercadinhos de alteração de alguma dado do produto
// revisar bem essa aula pois assim podera corrigir o problema da rodrigagem!!!
export default {
  props: {
    filme: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      filmeLocal: this.filme
    }
  },
  // Uma forma de evitar a tal mutacao, filho para o pai, como está acontecendo é usando o computed
  computed: {
    filmeSelecionado: {
      set (dados) {
        // o método assign permite criar novos objetos e inclusive ele dá uma nova referência de memória
        // além dele permitir mesclar objetos, quantas que vc quiser
        this.filmeLocal = Object.assign({}, this.filmeLocal, { [dados.propriedade]: dados.valor })
      },
      get () {
        return this.filme
      }
    }
  },
  methods: {
    salvarFilme (event) {
      // Podemos usar essa forma debaixo ou usar o eventBus
      // this.$emit('atualizarFilme', this.filmeLocal)
      // Isso será linkado com a funcao atulizar o filme que esta no FilmesLista
      // com o $on
      eventBus.atualizarFilme(this.filmeLocal)
    }
  }
}
</script>
