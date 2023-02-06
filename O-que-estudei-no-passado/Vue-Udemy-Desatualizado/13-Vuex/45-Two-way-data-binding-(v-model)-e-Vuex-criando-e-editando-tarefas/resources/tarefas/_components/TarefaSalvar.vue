<template>
    <div class="mt-4">
        <hr>
        <h2 class="font-weight-light">Salvar Tarefa</h2>
        <form @submit.prevent="salvar">
            <div class="row">
                <div :class="classeColuna">
                    <div class="form-group">
                        <label>Título</label>
                        <!-- <input
                            type="text"
                            class="form-control"
                            placeholder="Título da tarefa"
                            :value="tarefa && tarefa.titulo"> -->
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Título da tarefa"
                            v-model="tarefa.titulo">
                    </div>
                </div>
                <!-- <div class="col-sm-2" v-if="tarefa"> -->
                <div class="col-sm-2" v-if="tarefaSelecionada">
                    <div class="form-group">
                        <label>Tarefa concluída?</label>
                        <button
                            type="button"
                            class="btn btn-sm d-block"
                            :class="classeBotao"
                            @click="tarefa.concluido = !tarefa.concluido">
                                <i class="fa fa-check"></i>
                        </button>
                    </div>
                </div>
            </div>

            <button type="submit" class="btn btn-primary">Salvar</button>
        </form>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      tarefa: {}
    }
  },
  // props: {
  //   tarefa: {
  //     type: Object,
  //     default: undefined
  //   }
  // },
  computed: {
    ...mapState('tarefas', [
      'tarefaSelecionada'
    ]),
    classeColuna () {
      // return this.tarefa
      //   ? 'col-sm-10'
      //   : 'col-sm-12'
      return this.tarefaSelecionada
        ? 'col-sm-10'
        : 'col-sm-12'
    },
    classeBotao () {
      // return this.tarefa && this.tarefa.concluido
      //   ? 'btn-success'
      //   : 'btn-secondary'
      return this.tarefaSelecionada && this.tarefa.concluido
        ? 'btn-success'
        : 'btn-secondary'
    }
  },
  created () {
    // if (this.tarefa) {
    //   console.log('Tarfas por id: ', this.$store.getters.buscarTarefaPorId(this.tarefa.id))
    // }
    this.sincronizar(this.tarefaSelecionada)
  },
  watch: {
    tarefaSelecionada (tarefaNova, tarefaAntiga) {
      this.sincronizar(tarefaNova)
    }
  },
  methods: {
    salvar (event) {
      // const operacao = !this.tarefa ? 'criar' : 'editar'
      const operacao = !this.tarefaSelecionada ? 'criar' : 'editar'
      console.log('Operação: ', operacao)
      this.$emit('salvar', { operacao, tarefa: this.tarefa })
    },
    sincronizar (novaTarefa) {
      this.tarefa = Object.assign({}, novaTarefa || { titulo: '', concluido: false })
    }
  }
}
</script>
