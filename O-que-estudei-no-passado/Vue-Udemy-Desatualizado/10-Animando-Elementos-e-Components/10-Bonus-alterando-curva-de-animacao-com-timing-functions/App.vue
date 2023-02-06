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
      <Transition name="slide" type="animation" :duration="500">
        <div class="alert alert-primary" v-if="mostrar">Animações no Vue</div>
      </Transition>
      <Transition name="slide" type="animation" :duration="{ enter: 1200, leave: 500 }">
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
// Nessa sexta-2 aula, vamos aprender a criar uma animação por slide com CSS Animation. Para isso, será necessário utlizar o @keyframes como foi mostrado no style junto com as classes slides definidos
// No caso, o keyframes define que tipo de animações vc quer que ocorra e no slide vc define como será executado a tal animação
// Nessa setima aula, vamos mostrar como se mescclao transition e o animation em CSS usando a opacidade nas classes slide's definidas abaixo
// Nessa oitava aula, vamos aprender a indicar o tipo de regra principal que queremos utilizar. Por padrão, ao colocarmos no slide-leave-active a opacidade para 2 segundos
// Vamos perceber um comportamento estranho. Isso é devido ao Vue, por padrão, optar por valores maiores de animação sendo o primeiro a ser executado. No caso, se quisermos ter mais controle de quem seria o primeiro a executar
// Precisaríamos utilizar um elemento chamado type e nela indicar qual tipo de animação vc quer que seja ativado primeiro, como é mostrado na div em que usa o slide, como name
// Nessa nona aula, vamosaprender a configurar o tempo de transição da animação manualmente usando o elemento duration aplicado na dive slide
// Nessa decima aula, vamos aprender a utilizar timing function que tem como funçãoalterar a curva de aniamção. No caso, isso é um recuros de css que temos, donde ela tem como padrão uma sequência de ativação linear nela, quando não configurado nada à respeito
// Mas o CSS oferece um recurso chamado animation timing function, onde vc pode definir qual tipo de sequência de animações que ela pode ser executadas
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
/* .slide-enter-from {
  opacity: 0;
} */
/* .slide-enter-active {
  animation: slide 0.7s ease-in-out;
  transition: opacity 0.7s ease-in-out;
} */
.slide-enter-active {
  animation: slide 0.7s cubic-bezier(.89,.41,1,.23);
  transition: opacity 0.7s cubic-bezier(.89,.41,1,.23);
}
/* .slide-enter-to {
  opacity: 1;
} */
/* .slide-leave-from {
  opacity: 1;
} */
.slide-leave-active {
  animation: slide 0.7s reverse;
  transition: opacity 2s;
}
.slide-enter-from, .slide-leave-to {
  opacity: 0;
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
