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
      <Transition>
        <div class="alert alert-primary" v-if="mostrar">Animações no Vue</div>
      </Transition>
    </div>

  </div>
</template>

<script>
// Nessa primeira aula, vamos aprender a utilizar o v-if e v-show como é mostrado no div onde tem a frase Animações no Vue e o botão Alternar
// Mas aqui na primeira aula, não fizemos nenhuma animações. Só fizemos os primeiros preparativos para tais animações
// Nessa segunda aula, vamos usar o elemento chamado transition, donde usamos ela para envolver a div onde consta a frase Animações no Vue
// Lembrando que o componente transition só pode ser utilizado com apenas um único elemento
// Agora, falta linkarmos com as classes enter's e leaves's definidas abaixo nos styles
// Nessa terceira aula, fazremos a aplicações das classes enter's e leaves's definidas em styles abaixo colocando os efeitos dentro de cada classe como pode ser visto abaixo
export default {
  data() {
    return {
      mostrar: true
    }
  }
}
</script>

<style scoped>
/* Entrada */
.v-enter-from {
  opacity: 0;
}
.v-enter-active {
  transition: opacity 1s;
}
.v-enter-to {
  opacity: 1;
}
/* Saida */
.v-leave-from {
  opacity: 1;
}
.v-leave-active {
  transition: opacity 1s;
}
.v-leave-to {
  opacity: 0;
}
</style>
