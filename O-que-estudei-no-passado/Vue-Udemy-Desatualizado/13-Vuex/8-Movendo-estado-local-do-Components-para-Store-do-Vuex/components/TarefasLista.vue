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
        <ul class="list-group" v-if="tarefas.length > 0">
            <TarefasListaIten
                v-for="tarefa in tarefas"
                :key="tarefa.id"
                :tarefa="tarefa"
                @editar="selecionarTarefaParaEdicao" />
        </ul>

        <p v-else>Nenhuma tarefa criada.</p>

        <TarefaSalvar
            v-if="exibirFormulario"
            :tarefa="tarefaSelecionada" />

    </div>
</template>

<script>
// Vamos colocar a propriedade tarefas para o state, pois isso nos dará mais praticidade caso formos alterar a tal lista por vários tipos de components
// No caso, bastaria mapear pelo mapStates como nas outras aulas anteriores
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
    ...mapState(['tarefas'])
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
