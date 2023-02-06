<template>
  <div>
    <h1 class="font-weight-light">Lista de Tarefas</h1>

    <ul class="list-group" v-if="tarefas.length > 0">
      <TarefasListaIten
        v-for="tarefa in tarefas"
        :key="tarefa.id"
        :tarefa="tarefa"
      />
    </ul>

    <p v-else>Nenhuma tarefa criada.</p>

    <TarefaSalvar />
  </div>
</template>

<script>
import axios from "axios";

import config from "./../config/config.js";
import TarefaSalvar from "./TarefaSalvar.vue";
import TarefasListaIten from "./TarefasListaIten.vue";

export default {
  components: {
    TarefaSalvar,
    TarefasListaIten,
  },
  data() {
    return {
      tarefas: [],
    };
  },
  created() {
    axios.get(`${config.apiURL}/tarefas`).then((response) => {
      console.log(response);
      this.tarefas = response.data;
    });
  },
};
</script>
