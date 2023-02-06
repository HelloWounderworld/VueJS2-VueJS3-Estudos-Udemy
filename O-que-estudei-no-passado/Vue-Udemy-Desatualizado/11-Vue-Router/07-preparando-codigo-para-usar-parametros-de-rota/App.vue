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

      <router-link to="/" class="btn btn-info mb-2 mr-2">Home Estático</router-link>
      <router-link
        to="/"
        class="btn btn-info mb-2 mr-2"
        active-class="active">
        Home Com Active-Class
      </router-link>
      <router-link
        to="/"
        class="btn btn-info mb-4 mr-2"
        active-class="active">
        Home Com Active-Class
      </router-link>

      <router-link to="/contatos" class="btn btn-info mb-2 mr-2">Contatos Estático</router-link>
      <router-link :to="{path: '/contatos'}" class="btn btn-info mb-2 mr-2">Contatos com v-bind</router-link>
      <router-link
        :to="{path: '/contatos'}"
        class="btn btn-info mb-2 mr-2"
        active-class="active">
        Contatos com vi-bind e active-class
      </router-link>
      <router-link
        :to="{path: '/contatos'}"
        class="btn btn-info mb-4 mr-2"
        active-class="active">
        Contatos com vi-bind e active-class
      </router-link>

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
// Nessa Quarta aula vamos comentar um detalhe sobre a forma como podemos organizar os recursos de vue router em arquivos separados para apenas serem chamado no main.js
// Ao adicionarmos o recurso vue router pelo vue add router, automaticamente foi criado a pasta raouter e dentro dela o index.js para que dentro dela consigamos definir as paths da forma como queremos
// Sendo assim, só será necessário chamar esse arquivo no main.js da forma como está sendo feito
// Nessa quinta aula vamos mostrar uma forma de aplicar uma classe css para o router-link. No caso, iremos utilizar os recursos do bootstrap, pois nela já existem as classes que servem para aplicar em router-link
// Para aplicarmos as tais classes, devemos usar o active-class e nela chamar as classes do bootstrap existentes
// Antes era necessário utilizar o exact para conseguirmos considerar qual dos botões foram acessadas. Mas, na versão atual esse comportamento já são consideradas dentro active-class
// Ou seja, os active-class já funcionam como exact-active-class
// Nessa sext aula, vamos mostrar que existe uma forma de melhorar a navegação para cada rotas
// Para isso, vamos criar um novo div no ContatosView.vue, um botão de voltar
// Por termos adicionado um novo diretório vua router, agora temos um novo recurso chamado this.$router para utilizarmos.
// Isso nos deixa mais prático a aplicação de router porque nos livra da necessidade de termos que importar o router sempre que precisarmos utilizar algum recurso dela
// Nessa sétima aula, só vamos preparar os códigos para usar parâmetros de rotas
// No caso, vamos montar uma pasta components e dentro dele criar um arquivo ContatosListaItens.vue e ContatosLista.vue
</script>
