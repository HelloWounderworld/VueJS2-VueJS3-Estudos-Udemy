<template>
  <div id="app">
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">Requisições HTTP no Vue</h1>
        <p class="lead">
          Usando a biblioteca Axios para fazer chamadas Ajax à uma API REST.
        </p>
      </div>
    </div>

    <div class="container">
      <TarefasLista />
    </div>
  </div>
</template>

<script>
// https://fontawesome.com/start
// Nessa primeira aula, vamos preprar o API Rest. No caso, para isso, iremos usar um arquivo json do github desse link https://github.com/typicode/json-server
// O pacote, github, acima serve para realizar simulações de API para teste, antes de lançar para a produção
// Vamos criar uma pasta db e dentro dela criar um arquivo chamado package.json e o arquivo db.json
// Após isso, iremos rodar no terminal dentro do arquivo db os arquivos que definimos com npm start
import TarefasLista from "./components/TarefasLista.vue";

export default {
  components: {
    TarefasLista,
  },
};
</script>
