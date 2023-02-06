<template>
  <div id="app" class="container">

    <!-- <h1>Vue JS</h1> -->

    <!-- <PostBlog titulo="Components Vue"/>
    <PostBlog titulo="Passando dados via props"/> -->

    <!-- Agora, suponhamos que exista uma situacao em que o template do PostBlog components tenha que ser customizado -->
    <!-- <h2>Components Vue</h2>
    <p>Components sao uma das pecas mais importantes do Vue</p> -->
    <!-- A ideia aqui é passar o html criado acima dentro do component PostBlog para er renderizado internamete desse component, como algo da forma abaixo -->
    <!-- <PostBlog titulo="Components Vue">
      <h2>Components Vue</h2>
      <p>Components sao uma das pecas mais importantes do Vue</p>
    </PostBlog> -->
    <!-- Um recuros que favorece tais feitos seria pelo slot aplicado no componente filho, onde isso permite do uso dos seletores como uma forma de tag abaixo -->
    <!-- <PostBlog>
      <h2>Components Vue</h2>
      <p>Components sao uma das pecas mais importantes do Vue</p>
    </PostBlog> -->
    <!-- Logo sempre que vc precisar customizar o template do seu components podemos usar o slot -->
    <!-- O uso abaixo é um exemplo de como se usa um multiplo slots -->
    <!-- <PostBlog>
      <h2>Components Vue</h2>
      <p>Components sao uma das pecas mais importantes do Vue</p>
      <small>por Leonardo Takashi</small>
    </PostBlog> -->
    <!-- A forma como está acima, fará com que apenas repita os três slots definidos no PostBlog -->
    <!-- Para evitar isso, será necessário personalizar cada slot com o recurso name e chamar elas cada tag renderiado dentro do componente filho -->
    <!-- E para cada slot personalizado com o name, abaixo será chamdo pelo slot cada nome denotado pelo name -->
    <!-- e isso teria que ser aplicado na tag template para depois chamar o conteudo que queira ser renderizado pelo component filho -->
    <!-- <PostBlog>
      <template v-slot:cabecalho>
        <h2>Components Vue</h2>
      </template>
      <template v-slot:conteudo>
        <p>Components sao uma das pecas mais importantes do Vue</p>
        <span>...</span>
      </template>
      <template v-slot:rodape>
        <small>por Leonardo Takashi</small>
      </template>
    </PostBlog> -->
    <!-- Podemos usar o slot personalizado como default, que é uma personalizacao implícita para a tag slot. No PostBlog, a tag slot, para conteudos, não está personalizado -->
    <!-- Percebe-se que no componente filho, PostBlog, foi colocado uma outra tag de link no conteudo, e dentro dele foi colocado outra tag de slot -->
    <!-- Note que, abaixo, em nenhum momento foi chamado a tal slot personalizada que está incluso dentro da div com o css de conteudo, porem no navegador já é exibida a tal link Ler mais... -->
    <!-- <PostBlog>
      <template v-slot:cabecalho>
        <h2>Components Vue</h2>
      </template>
      <template v-slot:default>
        <p>Components sao uma das pecas mais importantes do Vue</p>
        <span>...</span>
      </template>
      <template v-slot:rodape>
        <small>por Leonardo Takashi</small>
      </template>
    </PostBlog> -->
    <!-- Porém o tal slot personalizado poderia ser usado chamando ela e atribuindo o outro nome como abaixo, deixando evidente a hierarquia do compoenente pai para filho -->
    <!-- Ou seja, onde estava escrito Ler mais... foi mudado para Detalhes -->
    <!-- <PostBlog>
      <template v-slot:cabecalho>
        <h2>Components Vue</h2>
      </template>
      <template v-slot:default>
        <p>Components sao uma das pecas mais importantes do Vue</p>
        <span>...</span>
      </template>
      <template v-slot:rodape>
        <small>por Leonardo Takashi</small>
      </template>
      <template v-slot:botao>
        Detalhes
      </template>
    </PostBlog> -->
    <!-- Um detalhe muito importante que precisa ficar claro seria a diferenca entreo o escopo de estilizacao e o escopo de compilacao -->
    <!-- No caso, podemos ver a tal diferenca na classe que foi criada, post-paragrafo -->
    <!-- Quando definimos o css no compoenet filho, post-paragrafo, da classe que está sendo definido no componente pai, mesmo assim o efeito é surtido (tem que tirar o scopedno style, caso estiver escrito nela) -->
    <!-- Ou seja, podemos estilizar conteudos passados dentro dos slots, no componente pai, pelo componente filho -->
    <!-- Um outro detalhe que podemos verificar aqui, seria que no slot do rodape, foi chamado uma interpolacao autor -->
    <!-- note que, mesmo assim, o slot rodape, personalizado no PostBlog conseguiu possuir a tal interpolacao e renderizar o css como foi definido para o rodape -->
    <!-- <PostBlog>
      <template v-slot:cabecalho>
        <h2>Components Vue</h2>
      </template>
      <template v-slot:default>
        <p class="post-paragrafo">Components sao uma das pecas mais importantes do Vue</p>
        <span>...</span>
      </template>
      <template v-slot:rodape>
        <small>por {{ autor }}</small>
      </template>
    </PostBlog> -->
    <!-- Logo, podemos concluir que todo o escopo renderizado no componente pai, é renderizado no componente pai. E todo o escopo renderizado, dentro do template, do componente filho é renderizado dentro da instância chamada, dentro do componente pai, do componente filho -->
    <!-- Como foi visto na hierarquia de algumas aplicacoes  anteriores, mesmo que a rendrizacao esteja ocorrendo dentro do escopo do componente filho instanciado -->
    <!-- a partir do momento em que renderizarmos a instancia do escopo filho, pelo pai será considerado a renderizacao do componente pai, como podemos ver pela classe definida post-paragrafo -->
    <!-- Entretanto, existem situacoes em que, mesmo com o esccopo pai sendo renderizado sobre o escopo filho, algumas caracteristicas definidas no escopo filho, precisaria ser a prioriedade da aplicacao em vez da renderizaccaodoescopo pai -->
    <!-- Para alcancar a tal funcionalidade teria que usar um recurso slot-scoped -->
    <!-- Para criarmos uma situacao que retrate a necessidade do uso desse recurso, vamos ter que criar um outro arquivo vue, PostBlogListaIten -->
    <!-- <PostBlog>
      <template v-slot:cabecalho>
        <h2>Components Vue</h2>
      </template>
      <template v-slot:default>
        <p class="post-paragrafo">Components sao uma das pecas mais importantes do Vue</p>
        <span>...</span>
      </template>
      <template v-slot:rodape>
        <small>por {{ autor }}</small>
      </template>
    </PostBlog> -->
    <!-- Percebe-se que a hierarquia está definido como Avo: App.vue, Pai: PostsLista.vue e Filho/Neto: PostBlogListaIten.vue -->
    <!-- O filho/neto está definido a estrutura, o pai está definindo quem vai ser renderizado com essa estrutura e o avo está só chamando a estrutura concluida -->
    <!-- <PostsLista :posts="posts" /> -->
    <!-- Já agora, usaremos o seletor como uma tag onde receberá os que foram definidos nos componentes filhos -->
    <!-- Note que, nesse caso ocorrerá um erro no console dizendo que houve uma duplicagem de slots -->
    <!-- Para corrigir esse problema, precisamos passar uma diretiva v-bind dentro do slot do componente PostsLista, :meuPost, para conseguir possibilitar que as propriedades definidas do componente PostBlogListaIten sejam renderizadas-->
    <!-- <PostsLista :posts="posts">
      <h2>Vue Components</h2>
      A sintaxe nova do slot-scope, agora, é como está expressada abaixo
      Note que, a forma como está sendo usado o slot-scope já mostra a sua linhagem de heranca de filho/neto para pai e, por fim, avo
      <template v-slot:default="slotProps">
        <h2>{{ slotProps.meuPost.titulo }}</h2>
        <p>{{ slotProps.meuPost.conteudo }}</p>
        <small>{{ slotProps.meuPost.autor }}</small>
      </template>
    </PostsLista> -->
    <!-- Uma outra alternativa que podemos utilizar, em vez do slotProps, seria usar da linguagem de javascript aceita, EcmaScript 6, para fazer a mesma coisa feita anterioremente -->
    <!-- <PostsLista :posts="posts">
      <template v-slot:default="{ meuPost }">
        <h2>{{ meuPost.titulo }}</h2>
        <p>{{ meuPost.conteudo }}</p>
        <small>{{ meuPost.autor }}</small>
      </template>
    </PostsLista> -->
    <!-- Aqui mostraremos como alternar varios componentes com componentes dinamicos -->
    <h1>Components Dinâmicos</h1>

    <button @click="componentSelecionado = 'HomeSweet'">HomeSweet</button>
    <button @click="componentSelecionado = 'PostsLista'">Posts</button>
    <button @click="componentSelecionado = 'SobreOver'">SobreOver</button>

    <!-- O uso do is com a diretiva v-bind é obrigatório -->
    <!-- Podemos passar um objeto javascript dentro do is {} -->
    <!-- A tag component é o que dinamiza os componentes -->
    <!-- Note que, a inclusao da diretiva :posts permitiu acessar a propriedade definida nos componentes filhos PostsListaIten e PostBlogListaIten -->
    <!-- Entretanto, passar a diretiva :post diretamente dentro da tag não é a melhor forma de trabalhar com componentes dinamizados, pois isso torna muito restrito os conteúdo que precisam ser acessados ao ocorrer alguma forma de alternacao, nesse caso com os botoes -->
    <!-- inclusive essa forma de dinamizar componentes poderia ser aplicado na nova lista de compras que estou criando no toftmarket, no caso, fazendo com que o arquivo onde sera codado o gerar lista compras, seja um componente filho -->
    <!-- Para solucionar a tal restricao, podemos usar o computed -->
    <!-- <component
      :is="componentSelecionado"
      :posts="posts"></component> -->
    <!-- Configurado da devida forma no computed aplicamos ela da seginte forma -->
    <!-- <component
      :is="componentSelecionado"
      v-bind="propsAtuais"> -->
      <!-- o script que foi colocado no SobreOver serve para mostrar que as alternancias entre botoes significa que nas instancias sao criadas a cada alternacao, pois se nao fosse, ou seja, usada já a existente, apareceria o mesmo autor, Leonardo, em SobreOver -->
      <!-- Uma outra forma de verificar seria usando o lifecycle hook created e o destroyed -->
      <!-- Mas um detalhe que quero resaltar aqui é que tal comportamento pode ser alterado, ou seja, pode fazer com que a mesma instancia seja utilizada, em vez de criar uma nova -->
      <!-- Isso sera possivel pelo uso do recurso chamado keep-alive, um tipo de componente -->
    <!-- </component> -->
    <!-- Aplicando o keep-alive -->
    <!-- Agora, alternando da mesma forma feita anterioremente, o comportamento será correspondido como foi solicitado -->
    <!-- Mas isso faz perdermos o lifecycle hook created e o destroyed -->
    <!-- <keep-alive>
      <component
        :is="componentSelecionado"
        v-bind="propsAtuais"> -->
        <!-- o script que foi colocado no SobreOver serve para mostrar que as alternancias entre botoes significa que nas instancias sao criadas a cada alternacao, pois se nao fosse, ou seja, usada já a existente, apareceria o mesmo autor, Leonardo, em SobreOver -->
        <!-- Uma outra forma de verificar seria usando o lifecycle hook created e o destroyed -->
        <!-- Mas um detalhe que quero resaltar aqui é que tal comportamento pode ser alterado, ou seja, pode fazer com que a mesma instancia seja utilizada, em vez de criar uma nova -->
        <!-- Isso sera possivel pelo uso do recurso chamado keep-alive, um tipo de componente -->
      <!-- </component>
    </keep-alive> -->
    <!-- Quando trabalhamos com componentes dinâmicos dentro de keep-alive, estes ganham dois novos lifecycle hooks, activated e deactivated, que podemos chamar no componentes filhos -->
    <!-- <keep-alive>
      <component
        :is="componentSelecionado"
        v-bind="propsAtuais">
      </component>
    </keep-alive> -->
    <!-- Quando trabalhamos com keep-alive podemos, tbm,configuar algumas props para customizar o comportamento deles com include (mantém a instânca no cache), exclude (não mantém a instância no cache) e max -->
    <!-- <keep-alive :include="'SobreOver'">
      <component
        :is="componentSelecionado"
        v-bind="propsAtuais">
      </component>
    </keep-alive> -->
    <!-- Mantém a instância em forma de cache do HomeSweet e do SobreOver -->
    <!-- <keep-alive :include="/HomeSweet|SobreOver/">
      <component
        :is="componentSelecionado"
        v-bind="propsAtuais">
      </component>
    </keep-alive> -->
    <!-- <keep-alive :exclude="['HomeSweet','PostsLista']">
      <component
        :is="componentSelecionado"
        v-bind="propsAtuais">
      </component>
    </keep-alive> -->
    <!-- Agora o max onde vc pode indicar a quantidade de instância que vc queira manter no cache -->
    <!-- No caso, ela funciona da forma que quem será mantido e excluido sejam, respetivamente, o próximo cara que tu vai acessar e o último cara que tu acessou -->
    <keep-alive :max="2">
      <component
        :is="componentSelecionado"
        v-bind="propsAtuais">
      </component>
    </keep-alive>
    <!-- Um outro recursos que são muito úteis tbm são os componentes assíncronos, que são úteis para aplicações em larga escala -->

  </div>
</template>

<script>
// import PostBlog from './components/PostBlog.vue'
import HomeSweet from './components/HomeSweet.vue'
import PostsLista from './components/PostsLista.vue'
import SobreOver from './components/SobreOver.vue'

export default {
  components: {
    PostsLista,
    HomeSweet,
    SobreOver
  },
  data () {
    return {
      // autor: 'Leonardo Takashi Teramatsu'
      componentSelecionado: 'HomeSweet',
      posts: [
        { id: 1, titulo: 'Components no Vue', conteudo: 'Components sao uma das pecas mais importantes', autor: 'Leonardo Takashi' },
        { id: 2, titulo: 'Distribuindo conteudos em Slots', conteudo: 'Slots podem ser usados como repositorios de codigo HTML', autor: 'Leonardo Takashi' }
      ]
    }
  },
  computed: {
    propsAtuais () {
      return this.componentSelecionado === 'PostsLista' ? { posts: this.posts } : {}
    }
  }
}
</script>

<style scoped>

  .container {
    width: 960px;
    margin: auto;
  }

  /* .post-paragrafo {
    color: red;
  } */

</style>
