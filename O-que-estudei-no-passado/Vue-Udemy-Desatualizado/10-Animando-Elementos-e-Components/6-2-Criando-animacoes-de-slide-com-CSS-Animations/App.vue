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
      <Transition name="fade">
        <div class="alert alert-primary" v-if="mostrar">Animações no Vue</div>
      </Transition>
      <Transition name="zoom">
        <div class="alert alert-primary" v-if="mostrar">Animações no Vue</div>
      </Transition>
      <Transition name="slide">
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
// Nessa quarta aula, vamos ver que o formato v-enter e v-leave é algo padrão para os efeitos de animações no transition. Mas podemos personaliza-las nomeandos elas como foi colocado name="fade" em transition
// Nessa quinata aula, mostraremos que podemos abreviar a forma como é exibida nas classes css's com as mesmas funcionalidades juntando com outras classes como é visto no style
// Além de abreviações como foi visto abaixo, podemos tirar a opacidade 1, por conta dessa abreviação estar junta com animação que define a saída e a entrada, deixando somente com a abreviação e a opacidade 0
// Nessa sexta aula vamos aprender a criar uma animação de zoom, como foi definido no style abaixo. Para conseguirmos ver a aplicação funcionar, bastaria substituir o nome "fade" definido no name acima para "zoom"
// Nessa setima aula, vamos aprender a criar uma animação por slide com CSS Animation. Para isso, será necessário utlizar o @keyframes como foi mostrado no style junto com as classes slides definidos
// No caso, o keyframes define que tipo de animações vc quer que ocorra e no slide vc define como será executado a tal animação
export default {
  data() {
    return {
      mostrar: true
    }
  }
}
</script>

<style scoped>
/* Slide */
.slide-enter-from {

}
.slide-enter-active {
  animation: slide 0.7s;
}
.slide-enter-to {

}
.slide-leave-from {

}
.slide-leave-active {
  animation: slide 0.7s reverse;
}
.slide-leave-to {
  
}
@keyframes slide {
  /* from {

  } */
  0% {
    transform: translateX(-100px);
  }
  /* to {

  } */
  100% {
    transform: translateX(0px);
  }
}
/* Zoom */
/* .zoom-enter-from {
  transform: scale(0);
} */
/* .zoom-enter-active {
  transition: transform 0.5s;
} */
/* .zoom-enter-to {
  transform: scale(1);
} */
/* .zoom-enter-to, .zoom-leave-from {
  transform: scale(1);
} */
.zoom-enter-active, .zoom-leave-active {
  transition: transform 0.5s;
}
.zoom-enter-from, .zoom-leave-to {
  transform: scale(0);
}
/* Entrada */
/* .fade-enter-from {
  opacity: 0;
} */
/* .fade-enter-active {
  transition: opacity 1s;
} */
/* .fade-enter-to {
  opacity: 1;
} */
/* Saida */
/* .fade-enter-to, .fade-leave-from {
  opacity: 1;
} */
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
