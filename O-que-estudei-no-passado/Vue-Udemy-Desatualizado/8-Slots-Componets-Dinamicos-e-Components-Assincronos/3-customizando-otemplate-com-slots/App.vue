<template>
  <div id="app">

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
    <PostBlog>
      <h2>Components Vue</h2>
      <p>Components sao uma das pecas mais importantes do Vue</p>
    </PostBlog>
    <!-- Logo sempre que vc precisar customizar o template do seu components podemos usar o slot -->

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
