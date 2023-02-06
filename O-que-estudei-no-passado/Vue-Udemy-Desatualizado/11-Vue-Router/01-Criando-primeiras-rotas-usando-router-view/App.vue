<template>
  <div id="app">
    
    <div class="jumbotron">
      <h1 class="display-4">Vue Router</h1>
      <p class="lead">Adicionando rotas a Single Page Applications no Vue.</p>
    </div>

    <!-- <div class="container">

      <h3 class="font-weight-light">Contatos</h3>

    </div> -->

    <!-- <div class="container">

      <router-view></router-view>

    </div> -->
    
  </div>
  <router-view/>
</template>

<script>
// Na introducao, antes de comecarmos as aulas,para acessar o bootstrap que precisamos
// basta acessar esse link aqui https://getbootstrap.com/docs/4.1/getting-started/introduction/
// Agora, vamos configurar um vue router no nosso projeto usando o vue cli pelo comando vue add router ou npm i vue-router
// Nessa primeira aula, vamos aprender a utilizar um recurso chamado router-view
// No caso, a pasta views junto com o index.js dentro da pasta router, nos fornecerá as rotas que queremos acessar usando o router-view.
// Mas essa tag não será preciso utilizar visto o formato como estã configurado no arquivo main.js da forma como estamos linkando o .use(router)
// O que indica a aplicação automática de qualquer component definido no router
</script>
