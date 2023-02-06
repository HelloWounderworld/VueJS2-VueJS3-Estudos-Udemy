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
      <router-link to="/home" class="btn btn-info mb-2 mr-2"
        >Home Estático</router-link
      >
      <router-link
        to="/home"
        class="btn btn-info mb-2 mr-2"
        active-class="active"
      >
        Home Com Active-Class
      </router-link>
      <router-link
        to="/home"
        class="btn btn-info mb-4 mr-2"
        active-class="active"
      >
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
    <transition name="slide" mode="out-in">
      <router-view />
    </transition>
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
// Nessa décima e sétima aula, vamos entender sobre como funciona a correpondência de rotas (https://router.vuejs.org/guide/essentials/dynamic-matching.html) no vue router. No caso, basicamente precisa entender a sua ordem de prioridade das rotas definidas
// A priori, quanto mais antes a rota definida maior ela terá a prioridade. Porém, para efeito de um experimento, no index.js, criamos mais uma rota dentro das sub-rotas de contatos, a rota teste logo em seguida da rota :id, onde o nível de chamada se equivale ao da rota editar.
// A pergunta seria, quem dessas rotas serão chamadas? No caso, ele continua funcionando como estava antes. Porém, ao colocarmos meus-contatos.com/contatos/teste será renderizado mesmo assim. Isso, porque, o Vue router ele trabalha com a primeira ocorrência que ele encontra
// No caso, no index.js temos em primeiro a rota :id, que é uma rota dita genérica, e ela cumpre a função de acionar a rota editar. No caso, pulando a rota teste. A mesma anlogia funciona colocando a rota teste antes da rota :id dentro da matriz de subrotas children
// Assim, um detalhe muito importante que precisamos considerar é que, ao criar uma rota, sempre, mas sempre, as mais genéricas precisam estar pelas últimas e as mais específicas, nesse contexto a rota teste, precisam estar mais no início para que fique mais organizado e não corre possíveis erros de renderizações na sequência em que não deseje
// Logo, a rota teste, ela precisa vir primeiro que as rotas :id e :id/editar. Bom, esse tipo de comportamento, pelo menos, era válida até o Vue do passado, pois parece que atualmente não precisa seguir a tal ordem para que ocorra a renderização da forma como desejamos
// Nessa décima e sétima aula 2, vamos aprender a configurar redirecionamentos de rotas. No caso, esse recurso ele serve para caso vc queira mudar o nome da rota. Por exemplo, se colocarmos a rota contatos para o meus-contatos. O que vai acontecer é que na tela aparecerá algo do tipo erro 404 not found
// E para evitar que isso ocorra, que a função de redirecionamento será útil
// No caso, no arquivo index.js, quando ocorre essa mudança de rota, o redirecionamento é feito pela função chamada redirect, criando mais uma rota, com o nome contatos e dentro dessa rota colocar o redirect indicando a rota com o novo nome
// Dessa forma, podemos redirecionar a nova rota com o novo nome. No caso, ao acessar o contatos, colocado na barra do link, ela será redirecionado para o meus-contatos
// Agora, vamos experimentar uma outra coisa. Voltando tudo como estava antes de aplicar o redirecionamento, na index.js, vamos pegar a rota home, e agora aplicar um redirecionamento nela.
// Agora, no App.vue, os router-links em que consta Home, em todas elas, precisamos colocar o to, que estava como /, para /home.
// Após feito essa alteração, podemos ver no vue router, que ao acionarmos a rota raiz, /, ela será redirecionado automaticamente para a rota contatos com a componente ContatosHome.vue, sendo renderizado, algo que no Vue de antes não ocorria e para que ocorra era necessário colocar o name e nela indicar de qual rota ela está relacionada, a contatos, e exatamene no redirect, onde está redirecionado para a rota contatos, teríamos que ter colocado da forma redirect: { name: 'contatos' }
// Agora, só para terminar, o redirect ela pode ser dinamizada colocando uma função dentro dela em vez de algo estático, chamando apenas o nome da rota.
// Nessa décima e oitava aula, vamos aprender a configurar alias de rotas. No caso, a diferença entre redirecionamento de rotas e alias, é que o redirecionamento funciona da forma em que uma rota já existente e, que antes era usada, ao acessar ela novamente, simplesmente, ela será redirecionada para a nova rota. Ou seja, isso não apaga a existência da rota antiga.
// Já o alias, ela simplesmente não deixa essa rota antiga existente explícita. Ou seja, ao criarmos uma nova rota com o novo nome à custa de uma rota antiga, ao acessarmos a rota antiga, o conteúdo exibido será da rota nova, porém sem deixar o nome da rota nova explícita.
// Como exemplo disso, ao aplicarmos o alias: '/meus-contatos' no arquivo index.js, e acessarmos ela, será exibida o conteúdo da rota contatos, mas sem deixar isso explícito, pois na url estará marcado meus-contatos e não apenas contatos, que é da rota original onde se criou todo o conteúdo
// A mesma analogia funciona para as rotas crianças/aninhadas.
// Podemos colocar um múltiplo alias tbm em forma de matriz, sendo que o nome de outros contatos dentro dela, sendo expressa na forma de string
// Nessa décima e nona aula, vamos aprender a configurar uma rota curinga para caso um usuário tente acessar alguma rota que não exista
// Para isso, usaremos o seguinte recurso aplicado no path o path: '/:pathMatch(.*)*'.
// Vale ressaltar que essa rota que estamos criando ela é a mais genérica e possível de existir de todas as rotas, o que é conveniente e ajuda a configurar a tal rota na última lista
// Para mais detalhes, seguir com a leitura https://router.vuejs.org/guide/essentials/dynamic-matching.html#catch-all-404-not-found-route
// Mas, em muitos casos, queremos exibir uma msg dizendo que está sendo acessado uma página não existente
// Para isso, vamos precisar criar um arquivo que exiba tal msg, um novo component Error404View e add no index.js
// Lembrando, que a rota curinga criada acima é uma rota que atinge o escopo global. No caso, existe uma forma de caso o usuário acesse alguma rota inexistente dentro da rota contatos seja exibida uma outra msg
// Para isso, vamos ter que criar um novo component dentro de contatos, Error404Contatos
// Nessa vigésima aula, vamos aprender a utilizar o querr Params, que é uma forma de acessar a url incluindo os parâmetros nela
// No caso, no arquivo ContatosLista.vue, colocamos uma aba chamada Contatos e nela configuramos o seu
// Vale ressaltar, também, que tal tipo de acrescento de parâmetro na url pode ser configurado já nas rotas definidas dentro de index.js
// Nessa vigésima e primeira aula, que será mais como uma aula bônus, vamos inspecionar com o Vue Devtools para analisar os comportamentos das ocorrências. Para isso seria necessário instalar a extensão para possbilitar a tal inspeção]
// Nessa vigésima e segunda aula, vamos aprender a utilizar os parâmetros de rota como Props: boolean mode. Esse recurso, além de deixar o nosso component muito menos acoplado ao roteador em si ou ao uso da rota em específico nos permite, ao mesmo tempo, reagir a alterações nesses parâmetros
// No caso, no arquivo index.js, usaremos na rota id uma props nela. No caso, no component ContatoDetalhes, nela podemos desabilitar o data e o beforeRouteUpdate
// Nessa vigésima e terceira aula, iremos mostrar que o props, assim como nas aulas anteriores, é possível colocar o props da forma object como podemos observar no arquivo index.js
// Nessa vigésima e quarta aula, iremos mostrar uma terceira forma do props. Até a aula anterior, vimos que temos a forma booleana e a forma objeto de props. Nessa aula, vamos mostrar que existe a forma function do props também
// No caso, no arquivo index.js podemos ver a tal aplicação na rota contatos e no component ConatosView configurando a tal aplicação da rota. A mesma coisa é feita no ContatosLista
// Nessa vigésima e quinta aula, vamos mostrar a quarta e quinta fomra de props, o Casting e Validação. Mas essas duas seriam uma subfuncionalidade do function mode do props
// No caso, no component ContatoDetalhes, na props definida nela, em vez de um array com uma string, vamos colocar um objeto
// No caso, aparentemente não ocorreu nenhuma alteração, mas se vc dar um refresh na página será mostrado um erro no console. Esse erro indica que o tipo de rota colocado não está condizendo com o que é exigido
// No caso, isso é devido ao parâmetro id que é exigido como um número, mas na atualização ela é inserido como uma string. No caso, para resolver esse tipo de problema, o que seria necessário é pegar no ContatosListaItens e nela configuar a rota
// contatos como name para path e, no index.js, mudarmos o props na forma booleana aninhada dentro da rota contatos para o modo function
// Nessa vigésima e sexta aula, é uma aula bônus onde iremos ver sobre padrôes avaçados para correspondência de rotas (https://router.vuejs.org/guide/essentials/dynamic-matching.html#catch-all-404-not-found-route)
// No caso, no arquivo index.js, no aninhamento id da rota contatos, nela iremos espeificar o tipo de conversão que devemos fazer incluindo (\\d+) dentro do id, feito isso, antes o tipo de retorno, quando colocado contatos/"alguma string" era devolvido como NaN, mas agora é devolvido o Error 404, indicando que a tal rota é reconhecida como algo não definido
// Além disso, podemos também colocar um parâmetro opcional na rota editar para que seja reconhecido alguma outra rota ou o parâmetro adicional colocado nela usando o :opcional? e configurando um created no ContatosEditar para mostrar que isso está ocorrendo
// Existe uma outra alternativa para fazer múltiplos :opcional? que é usando o :zeroOuMais* ou :umOuMais+
// Nessa vigésima e sétima aula, vamos introduzir ao conceito de guardas de rotas seguir o pdf correspondente
// Nessa vigésima e oitava aula, vamos aprender a usar as Guardas de rota "beforeEach" e "afterEach" (Global), donde tal implementação está ocorrendo no arquivo index.js
// Nessa vigésima e nona aula, vamos aprender a usar a guarda de rota chamada "beforeEnter" (Na rota) implementada no index.js
// Nessa trigésima aula, vamos aprender a trabalhar com a guarda de rota "beforeRouteEnter" (No component), donde a tal implementação ocorreu no index.js na rota contatos editar e no arquivo ContatoEditar.vue
// Nessa trigésima e primeira aula, vamos aprender a trabalhar com a guarda da rota "beforeRouteUpdate" (No component), donde tal implementação ocorreu no index.js e no arquivo ContatoDetalhes
// Nessa trigésima e segunda aula, vamos aprender a trabalhar com a guarda de rota "beforeRouteLeave" (No component), donde a tal implementação está ocorrendo no arquivo ContatoEditar.
// Nessa trigésima e terceira aula, vamos aprender a trabalhar com a guarda de rota "beforeResolve", implementado dentro do arquivo index.js. Até agora, foi mostrado todas as guarda de rotas existentes para poder trablar dentro do Vue route
// Para saber mais a fundo desses conceitos bastar acessar o link: https://router.vuejs.org/guide/advanced/navigation-guards.html#using-the-options-api
// Nessa trigésima e quarta aula, vamos detalhar o uso da função next em guardas de rota dentro do index.js e no arquivo ContatoEditar.vue
// Nessa trigésima e quinta aula, vamos aprender a usar o recurso meta fields
// No arquivo index.js vamos aplicar o na rota editar
// Nessa trigésima e sexta aula, vamos mostrar casos em que o meta fields é útil.
// Para isso, vamos precisar criar um novo arquivo dentro do src, event-bus.js - Essa aula ficou muito ruim, pois houve problemas de compatibilidade da versão Vue para Vue3
// No caso, deixarei em aberto essa aula para que eu possa aprender ela por outra via https://v3.router.vuejs.org/guide/advanced/meta.html
// Nessa trigésima e sétima aula, vamos animar as navegações com transition. Para maior informação, basta acessar o link https://router.vuejs.org/guide/advanced/transitions.html
// A tal implementação pode ser seguida diretamente do transition aplicada no router-view acima
// O mesmo tipo de animação pode ser feita nos router-view do arquivo ContatosView
</script>

<style>
.slide-enter-from,
.slide-leave-to {
  transform: translateX(-50px);
  opacity: 0;
}
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s;
}
</style>
