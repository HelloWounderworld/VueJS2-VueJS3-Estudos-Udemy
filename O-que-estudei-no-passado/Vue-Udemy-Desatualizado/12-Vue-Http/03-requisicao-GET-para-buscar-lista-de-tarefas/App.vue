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
// Nessa segunda aula, vamos instalar o axios via npm para podemos, finalmente, iniciar as aulas de vue axios http
// Para a instalação bastaria seguir os passos desse github https://github.com/axios/axios
// Para a finalidade da aula bastaria rodar npm i axios no terminal dentro do arquivo hello-wounder-world-http
// Nessa terceira aula, vamos aprender a fazer requisicao para trazer a lista de tarefas usando o método GET.
// Para saber mais detalhes sobre as requisições que temos em vue axios http segue o link https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Methods
// Porém, por hora, vale ressaltar que os métodos de requisições GET, POST, PUT, DELETE, etc... são tipos de requisições chamadas de ajax
// Vamos criar um novo diretório chamado config dentro do src
// Assim, no arquivo TarefasList.vue vamos importar o config
import TarefasLista from "./components/TarefasLista.vue";

export default {
  components: {
    TarefasLista,
  },
};
</script>
