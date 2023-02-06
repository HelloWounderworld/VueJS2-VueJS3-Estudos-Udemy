<template>
    <div>

        <h1 class="font-weight-light">Lista de Tarefas</h1>

        <ul class="list-group" v-if="tarefas.length > 0">
            <TarefasListaIten
                v-for="tarefa in tarefas"
                :key="tarefa.id"
                :tarefa="tarefa" />
        </ul>

        <p v-else>Nenhuma tarefa criada.</p>

        <TarefaSalvar />

    </div>
</template>

<script>

import TarefaSalvar from './TarefaSalvar.vue'
import TarefasListaIten from './TarefasListaIten.vue'

export default {
    components: {
        TarefaSalvar,
        TarefasListaIten
    },
    data() {
        return {
            tarefas: [
                { id: 1, titulo: 'Aprender JavaScript', concluido: true },        
                { id: 2, titulo: 'Aprender Vue', concluido: true },
                { id: 3, titulo: 'Aprender Axios', concluido: false }
            ]
        }
    }
}
</script>
