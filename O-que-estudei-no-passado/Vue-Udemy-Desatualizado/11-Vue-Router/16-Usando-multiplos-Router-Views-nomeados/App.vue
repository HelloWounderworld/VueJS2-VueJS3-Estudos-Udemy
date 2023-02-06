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
      <router-link to="/" class="btn btn-info mb-2 mr-2"
        >Home Estático</router-link
      >
      <router-link to="/" class="btn btn-info mb-2 mr-2" active-class="active">
        Home Com Active-Class
      </router-link>
      <router-link to="/" class="btn btn-info mb-4 mr-2" active-class="active">
        Home Com Active-Class
      </router-link>

      <router-link to="/contatos" class="btn btn-info mb-2 mr-2"
        >Contatos Estático</router-link
      >
      <router-link :to="{ path: '/contatos' }" class="btn btn-info mb-2 mr-2"
        >Contatos com v-bind</router-link
      >
      <router-link
        :to="{ path: '/contatos' }"
        class="btn btn-info mb-2 mr-2"
        active-class="active"
      >
        Contatos com vi-bind e active-class
      </router-link>
      <router-link
        :to="{ path: '/contatos' }"
        class="btn btn-info mb-4 mr-2"
        active-class="active"
      >
        Contatos com vi-bind e active-class
      </router-link>
      <!-- <router-link
        to="/contatos/1"
        class="btn btn-info mb-4 mr-2"
        active-class="active">
        Contatos 1
      </router-link>
      <router-link
        to="/contatos/2"
        class="btn btn-info mb-4 mr-2"
        active-class="active">
        Contatos 2
      </router-link> -->
    </div>
    <router-view />
  </div>
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
// Nessa oitava aula vamos aprender a configurar parâmtros em rotas e usar a mesma
// Para isso, vamos criar uma nova rota pelo index.js do router importanto o arquivo ContatoDetalhes.vue
// Além disso, no arquivo ContatoListaItens.vue precisamos mudar a tag do botão pelo router link e conectando essa nova path criada
// Nessa nona aula, vamos aprender a capturar o parâmetros das rotas. Na aula anterior, aprendemos a configurar as rotas dinamicamente
// Agora o que falta é capturar o parâmetro que foi configurado. No caso, essa captura faremos no ContatoDetalhes.vue donde poderá verificar pelo console.log exibindo o this.$route.params
// Nessa décima aula, vamos reagir as alterações nos parâmetros das rotas com watchers. Para isso, primeiro vamos mostrar dois exemplos pelos Contato 1 e Contato 2 criado acima que mostra o que deveria acontecer
// Quando a tal rota é selecionada. No caso, o watch foi aplicado no ContatoDetalhes
// Existe uma outra forma de reagir às mudanças de parâmetros. Nessa décima e primeira aula vamos usar o reator chamado beforeRouteUpdate
// Nessa décima e segunda aula, vamos aprender a trabalhar com rotas aninhadas. No caso, usaremos um recurso chamado children que é uma forma que não precisa repetir /contatos para depois colocar /:id como foi aplicado em index.js
// Da mesma forma que uma rota foi aninhada pelo children, dentro de uma rota aninhada podemos sucessivamente aninhar mais outras rotas usando o children
// Depois que fizemos um aninhamento do ContatoDetalhes, precisamos chamar o mesmo no ContatosView pelo router-view
// Nessa décima e terceira aula, vamos explicar sobre o component padrão de rotas aninhadas, donde serve em situações em que vc queira acrescentar alguma outra mensagem dentro da rota principal, neste caso, o ContatosView, mesmo sem ter acessado um de seus aninhamentos
// O Vue router nos oferece uma opção tbm de criar rotas nomeadas. No caso, nessa décima e quarta aula, iremos mostrar a sua aplicação de como funciona. No caso, iremos usar um recurso chamado name no index.js. Uma particularidade de rotas nomeadas seria que no :to
// Podemos chamar o objeto dentro do objeto com o params e indicar o id como foi feito no ContatosListaItens. Entretanto, não podemos fazer o mesmo para rotas não nomeadas
// Nessa décima e quinta aula, vamos detalhar a navegação programática. No caso, no arquivo ContatosListaItens.vue isso está sendo aplicado pelo método criado verDetalhes
// Nessa décima e sexta aula, vamos aprender a utilizar múltiplos router views nomeados. No caso, vamos aninhar uma nova rota dentro da rota contatos com a path: ':id/editar' e criar um outro arquivo ContatoEditae.vue dentro da pasta contatos
// No caso, essa criação será necessário criar mais um router-view nomeado para conseguirmos indicar qual a rota deverá ser exibida onde eu preferir.
// Vale ressaltar a impotância de ficar claro como funciona cada aninhamento quando se cria a rota, pois isso nos permite facilitar em confundir qual rota está, por padrão, sendo acionado ou outras manualmente
</script>
