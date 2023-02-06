<template>
    <div>

        <div class="row">
            <div class="col-sm-10">
                <h1 class="font-weight-light">Lista de Tarefas</h1>
            </div>
            <div class="col-sm-2">
                <button
                    class="btn btn-primary float-right"
                    @click="exibirFormularioCriarTarefa">
                        <i class="fa fa-plus mr-2"></i>
                        <span>Criar</span>
                </button>
            </div>
        </div>

        <h3 class="font-weight-light mt-4">A Fazer {{ $store.getters.tarefasAFazer.length }}</h3>

        <ul class="list-group" v-if="$store.getters.tarefasAFazer.length > 0">
            <TarefasListaIten
                v-for="tarefa in $store.getters.tarefasAFazer"
                :key="tarefa.id"
                :tarefa="tarefa"
                @editar="selecionarTarefaParaEdicao" />
        </ul>

        <p v-else>Nenhuma tarefa a fazer.</p>

        <h3 class="font-weight-light mt-4">Concluídas {{ $store.getters.totalDeTarefasConcluidas }}</h3>

        <ul class="list-group" v-if="tarefasConcluidas.length > 0">
            <TarefasListaIten
                v-for="tarefa in tarefasConcluidas"
                :key="tarefa.id"
                :tarefa="tarefa"
                @editar="selecionarTarefaParaEdicao" />
        </ul>

        <p v-else>Nenhuma tarefa foi concluida.</p>

        <TarefaSalvar
            v-if="exibirFormulario"
            :tarefa="tarefaSelecionada" />

    </div>
</template>

<script>
// Vamos colocar a propriedade tarefas para o state, pois isso nos dará mais praticidade caso formos alterar a tal lista por vários tipos de components
// No caso, bastaria mapear pelo mapStates como nas outras aulas anteriores
// Se quisermos separar das tarefas já concluídas e das tarefas a fazer. Nessa situação podemos colocar um novo computed properties que indica as tais tarefas concluídas, tarefasConcluidas
// Porém, o uso do getters do vuex, resolverá esse problema de forma mais rápido e permitirá que um conjunto de funções sejam utilizadas em qualquer components
// Vamos aprender a usar os getters nos components
// No caso, foi visto que nos getters é possível configurar uma função que podemos acessar ela chamando via $store.getters
// No caso, isso já serve como um indicativo de que eles podem ser utilizadas como components para conseguir melhorar a sua utilidade usando o property-style
// Assim, como foi feito na tag "A Fazer" e "Concluidas", donde é chamado as funções definidas no getters
// Existem casos em que as funções definidas em getters precisam ser colocadas algum argumento para elas
// Entretanto, no formato $store.getters.funcao, não podemos colocar algum argumento dentro dela. No caso, o que possibilitaria na implementação do argumento de alguma função dentro do getters definida que necessita de um argumento para o teu funcionamento
// seria utilizando o methods-style, donde a tal aplicação está sendo demonstrado a partir da função buscarTarefaPorId definida no store e conectado com o lifecycle hook (created) dentro de TarefaSalvar
import TarefaSalvar from './TarefaSalvar.vue'
import TarefasListaIten from './TarefasListaIten.vue'
import { mapState } from 'vuex'

export default {
  components: {
    TarefaSalvar,
    TarefasListaIten
  },
  data () {
    return {
      exibirFormulario: false,
      tarefaSelecionada: undefined
      // tarefas: [
      //   { id: 1, titulo: 'Aprender Vue', concluido: true },
      //   { id: 2, titulo: 'Aprender Vue Router', concluido: true },
      //   { id: 3, titulo: 'Aprender Vuex', concluido: false }
      // ]
    }
  },
  computed: {
    ...mapState(['tarefas']),
    // tarefasConcluidas () {
    //   // return this.$store.state.tarefas
    //   // Pode ser o formato acima ou de baixo, já que a de baixo já tem a instância chamada pelo mapState
    //   // No caso, o filter ele estará acessando os elementos dentro do objeto tarefas
    //   // Porem, fazer isso, caso tiver que implementar um conjunto de propriedades não será viável
    //   // Logo, para isso que existe uma funcionalidade chamada getters do vuex
    //   return this.tarefas.filter(t => t.concluido)
    // }
    tarefasConcluidas () {
      return this.$store.getters.tarefasConcluidas
    }
  },
  methods: {
    exibirFormularioCriarTarefa (event) {
      if (this.tarefaSelecionada) {
        this.tarefaSelecionada = undefined
        return
      }
      this.exibirFormulario = !this.exibirFormulario
    },
    selecionarTarefaParaEdicao (tarefa) {
      this.exibirFormulario = true
      this.tarefaSelecionada = tarefa
    },
    resetar () {
      this.exibirFormulario = false
      this.tarefaSelecionada = undefined
    }
  }
}
</script>
