<template>
  <div id="app">

    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">Vuex</h1>
        <p class="lead">Padrão de Gerenciamento de Estado Centralizado no Vue.</p>
      </div>
    </div>

    <div class="container">
      <!-- <Contador /> -->
      <div class="row">
        <div class="col-sm-9 border-right">
          <TarefasLista />
        </div>
        <div class="col-sm-3">
          <Contador />
        </div>
      </div>
    </div>

  </div>
</template>

<script>
// Bom, tudo que está acontecendo aqui agora são coisas que já vimos no vue components e não tem nenhuma novidade
// No caso, está ocorrendo um gerenciamento sem o vuex
// Agora, vamos instalar o vuex, no terminal com o diretório que tu criou pelo vue cli aberto, digite: vue add vuex (caso vc quiera add de forma automática sem muitas ladainhas)
// Entretanto, vamos add manualmente para entender como o sistema vuex funciona pelos comandos npm i vuex
import Contador from '@/resources/contador/_components/ContadorCount.vue'
import TarefasLista from '@/resources/tarefas/_components/TarefasLista.vue'

export default {
  components: {
    Contador,
    TarefasLista
  }
}
</script>
