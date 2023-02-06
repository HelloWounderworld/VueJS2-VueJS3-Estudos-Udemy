<template>
  <div id="app" class="container">

    <h1>Vue JS</h1>

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
    <PostBlog>
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
    </PostBlog>
    <!-- Logo, podemos concluir que todo o escopo renderizado no componente pai, é renderizado no componente pai. E todo o escopo renderizado, dentro do template, do componente filho é renderizado dentro da instância chamada, dentro do componente pai, do componente filho -->

  </div>
</template>

<script>
import PostBlog from './components/PostBlog.vue'

export default {
  components: {
    PostBlog
  },
  data () {
    return {
      autor: 'Leonardo Takashi Teramatsu'
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
