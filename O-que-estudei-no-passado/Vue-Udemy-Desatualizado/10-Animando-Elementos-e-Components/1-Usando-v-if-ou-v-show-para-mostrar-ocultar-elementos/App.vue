<template>
  <div id="app">

    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">Animações</h1>
        <p class="lead">Treinando transição/animação de elementos/components no Vue.</p>
      </div>
    </div>

    <div class="container">
      <button class="btn btn-primary mb-3" @click="mostrar = !mostrar">Alternar</button>
      <div class="alert alert-primary" v-if="mostrar">Animações no Vue</div>
    </div>

  </div>
</template>

<script>
// Nessa primeira aula, vamos aprender a utilizar o v-if e v-show como é mostrado no div onde tem a frase Animações no Vue e o botão Alternar
// Mas aqui na primeira aula, não fizemos nenhuma animações. Só fizemos os primeiros preparativos para tais animações

export default {
  data() {
    return {
      mostrar: true
    }
  }
}
</script>
