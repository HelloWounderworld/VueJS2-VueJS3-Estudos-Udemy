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

    <div class="container">

      <router-link to="/" class="btn btn-info mb-2 mr-2">Home</router-link>
      <router-link to="/contatos" class="btn btn-info mb-2 mr-2">Contatos</router-link>
      
      <router-link :to="{path: '/contatos'}" class="btn btn-info mb-2 mr-2">Contatos</router-link>

    </div>
    
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
// Nessa segunda aula, vamos explicar como basicamente o view router funciona. No caso, note que, sempre que vamos chamar algum novo component
// Nela é chamado via rash "/". A vantagem desse formato de chamar os components, exerce uma função muito parecida com a do key. Ou seja, não precisamos
// por meio de reaload, recarregar a página inteira para recarregarmos os components quando ocorrer alguma alteração
// Além disso, podemos usar um recurso chamado history mode, donde serve para que no meio da alternância entre components filhos via rash
// caso eu acesse uma rash não existente que faça a página voltar ao início que é o menu principal
// Para mais detalhes poderá acessar esse link https://router.vuejs.org/guide/essentials/history-mode.html#example-server-configurations
// Por hora, no indez.js, vamos colocar no router o mode: 'history' para conseguirmos continuar com a aplicação que queríamos mostrar
// Nessa Terceira aula, vamos mostrar uma forma de criar alguma forma de acessar os components filhos definidos no views e acessar sem necessidade de coocar manualmente
// as raizes que estão definidos dentro. No caso, o recurso que possibilita isso é o router-link
// Podemos, no caso, trabalhar de forma estática como está acima para o to, mas tbm podemos dinamiza-las colocando a diretiva v-bind no to, que ficaria como :to
</script>
