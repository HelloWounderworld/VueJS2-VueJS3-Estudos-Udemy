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
    <PostBlog>
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
    </PostBlog>

  </div>
</template>

<script>
import PostBlog from './components/PostBlog.vue'

export default {
  components: {
    PostBlog
  }
}
</script>

<style scoped>

  .container {
    width: 960px;
    margin: auto;
  }

</style>
