<template>
  <div id="app">
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">Animações</h1>
        <p class="lead">
          Treinando transição/animação de elementos/components no Vue.
        </p>
      </div>
    </div>

    <div class="container">
      <button class="btn btn-primary mb-3" @click="mostrar = !mostrar">
        Alternar
      </button>
      <Transition name="fade">
        <div class="alert alert-primary" v-if="mostrar">Animações no Vue</div>
      </Transition>
      <Transition name="zoom">
        <div class="alert alert-primary" v-if="mostrar">Animações no Vue</div>
      </Transition>
      <Transition name="slide" type="animation" :duration="500">
        <div class="alert alert-primary" v-if="mostrar">Animações no Vue</div>
      </Transition>
      <Transition
        name="slide"
        type="animation"
        :duration="{ enter: 1200, leave: 500 }"
      >
        <div class="alert alert-primary" v-if="mostrar">Animações no Vue</div>
      </Transition>
      <Transition
        enter-from-class=""
        enter-active-class="animated bounceInLeft"
        enter-to-class=""
        leave-from-class=""
        leave-active-class="animated bounceOutDown"
        leave-to-class=""
      >
        <div class="alert alert-primary" v-if="mostrar">Animações no Vue</div>
      </Transition>
      <Transition
        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter"
        @enter-cancelled="enterCancelled"
        @before-leave="beforeLeave"
        @leave="leave"
        @after-leave="afterLeave"
        @leave-cancelled="leaveCancelled"
      >
        <div class="alert alert-primary" v-if="mostrar">Animações no Vue</div>
      </Transition>
      <Transition
        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter"
        @enter-cancelled="enterCancelled"
        @before-leave="beforeLeave"
        @leave="leave"
        @after-leave="afterLeave"
        @leave-cancelled="leaveCancelled"
        :css="false"
      >
        <div class="alert alert-primary" v-if="mostrar">Animações no Vue</div>
      </Transition>
      <Transition
        appear
        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter"
        @enter-cancelled="enterCancelled"
        @before-leave="beforeLeave"
        @leave="leave"
        @after-leave="afterLeave"
        @leave-cancelled="leaveCancelled"
        :css="false"
      >
        <div class="alert alert-primary" v-if="mostrar">Animações no Vue</div>
      </Transition>
      <Transition
        appear
        enter-from-class=""
        enter-active-class="animated bounceInLeft"
        enter-to-class=""
        leave-from-class=""
        leave-active-class="animated bounceOutDown"
        leave-to-class=""
      >
        <div class="alert alert-primary" v-if="mostrar">Animações no Vue</div>
      </Transition>
      <Transition
        appear
        appear-from-class=""
        appear-active-class="animated flipInY"
        appear-to-class=""
        enter-from-class=""
        enter-active-class="animated bounceInLeft"
        enter-to-class=""
        leave-from-class=""
        leave-active-class="animated bounceOutDown"
        leave-to-class=""
      >
        <div class="alert alert-primary" v-if="mostrar">Animações no Vue</div>
      </Transition>
      <Transition
        appear
        appear-from-class=""
        appear-active-class="animated flipInY"
        appear-to-class=""
        @before-appear="beforeAppear"
        @appear="appear"
        @after-appear="afterAppear"
        @appear-cancelled="appearCancelled"
        enter-from-class=""
        enter-active-class="animated bounceInLeft"
        enter-to-class=""
        leave-from-class=""
        leave-active-class="animated bounceOutDown"
        leave-to-class=""
      >
        <div class="alert alert-primary" v-if="mostrar">Animações no Vue</div>
      </Transition>
      <div class="form-group">
        <label>Animações:</label>
        <select class="form-control" v-model="animacaoSelecionada">
          <option value="fade">Fade</option>
          <option value="zoom">Zoom</option>
          <option value="slide">Slide</option>
        </select>
      </div>
      <Transition :name="animacaoSelecionada">
        <div class="alert alert-primary" v-if="mostrar">Animações no Vue</div>
      </Transition>
      <Transition :name="animacaoSelecionada">
        <div class="alert alert-primary" v-if="mostrar">
          Animações no Vue (informação)
        </div>
        <p class="alert alert-success" v-else>Animações no Vue (success)</p>
      </Transition>
      <Transition :name="animacaoSelecionada">
        <div class="alert alert-primary" v-if="mostrar" key="informacao">
          Animações no Vue (informação)
        </div>
        <div class="alert alert-success" v-else key="sucesso">
          Animações no Vue (success)
        </div>
      </Transition>
      <Transition :name="animacaoSelecionada" mode="in-out">
        <div class="alert alert-primary" v-if="mostrar" key="informacao">
          Animações no Vue (informação)
        </div>
        <div class="alert alert-success" v-else key="sucesso">
          Animações no Vue (success)
        </div>
      </Transition>
      <Transition :name="animacaoSelecionada" mode="out-in">
        <div class="alert alert-primary" v-if="mostrar" key="informacao">
          Animações no Vue (informação)
        </div>
        <div class="alert alert-success" v-else key="sucesso">
          Animações no Vue (success)
        </div>
      </Transition>
      <div class="form-group">
        <label>Mensagem:</label>
        <select class="form-control" v-model="alertaAtual">
          <option value="info">Informação</option>
          <option value="warning">Warning</option>
          <option value="success">Success</option>
        </select>
      </div>
      <Transition :name="animacaoSelecionada" mode="out-in">
        <div class="alert alert-primary" v-if='alertaAtual === "info"' key="informacao">
          Animações no Vue (informação)
        </div>
        <div class="alert alert-warning" v-else-if='alertaAtual === "warning"' key="warning">
          Animações no Vue (informação)
        </div>
        <div class="alert alert-success" v-else-if='alertaAtual === "success"' key="sucesso">
          Animações no Vue (success)
        </div>
      </Transition>
      <Transition :name="animacaoSelecionada" mode="out-in">
        <div class="alert alert-info" :key="alertaAtual">
          Animações no Vue
        </div>
      </Transition>
      <Transition :name="animacaoSelecionada" mode="out-in">
        <div :class="classesDeAlerta" :key="alertaAtual">
          Animações no Vue {{alertaAtual}}
        </div>
      </Transition>
      <div class="form-group">
        <label>Component:</label>
        <select class="form-control" v-model="componentSelecionado">
          <option value="AppHome">Home</option>
          <option value="AppSobre">Sobre</option>
        </select>
      </div>
      <Transition :name="animacaoSelecionada" mode="out-in">
        <component :is="componentSelecionado"></component>
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
// Nessa decima e primeira aula, vamos aprender a utilizar classes CSS personalizadas quando vc não quer utilizar os nomes padrões enter e leave como foi mostrado no style. Para isso, vamos usar uma biblioteca chamada Animate.css, donde nela constitui um conjunto de CSS's que possibilita as animações
// No caso, bastaríamos acessar essabibliotecae copiar e colar o link nohead do arquivo Index.html no head para disponibilizar os usos dos recursos disponívei nela
// Depois que aplicado o link no arquivo Index.html, a sua aplicação pode ser vista acima
// Nessa décima segunda aula é explicado sobre gatilhos das animações, para mais detalhes seguir o seguinte link: https://br.vuejs.org/v2/guide/transitions.html#Gatilhos-por-JavaScript
// Nessa decima terceira aula vamos aprender a aplicar tais gatilhos que foram explicados na última aula. A tal aplicação está sendo processada na tag onde tem inúmeros métodos com @
// Nos métodos enter e leave, abaixo, a função done é de vital importância, pois ela serve como um indicador se uma animação foi ou não terminada
// Nessa decima e quarta aula, vamos mostrar como desativar o CSS das animações. Note que, da última aula, a animação que foi criada acima usando somente os comandos javascript linkados com os métodos enter e leave
// Em cada método não foi especificado a ação que precisaria ser feita. No caso, o fato de eu utilizar o transition, por padrão, quando clicar nos botões, ele estará acionando os comandos v-enter e v-leave. Algo que podemos personalizar colocando os name também, como foi feitos nas outras aulas anteriores
// No caso, se quisermos deixar que os efeitos de CSS sejam negadas, bastaríamos acrescentar o :css="false" na tag acima, pois isso fará com que pule os efeitos css`s aplicados sobre ela e permitirá que realizemos as ações puramente pelo javascript
// Nessa decima e quinta aula iremos criar animações utilizando somente javascript
// Nessa decima e sexta aula vamos aprender a animar a renderização inicial, no caso ela será usado aplicando um elemento appear na tag
// Nessa decima e setima/oitava aula, vamos aprender a personalizar tais renderizações aplicadas pelo appear na última aula. No caso, na tag onde usa-se os recursos do Animate.css com o appear podemos perceber que temos tais recursos sendo aplicadas
// Agora, vamos personalizar elas usando appear-class
// Nessa decima nona aula vamos ainda explorar os recursos de animações renderizadas, mas, desta vez, usando o recurso do javascript pelos métodos appear`s
// Nessa vigesima aula vamos aprender a aplica atributps e transições dinâmicas. Para isso vamos precisar definir um novo atributo denotado como animacaoSelecionada
// Nessa vigesima e primeira aula vamos aprender a aplicar tais dinamizações nas animações em um conjunto de Animações, para isso iremos utilizar uma classe do Animate.css chamada alert
// Lembramos que na tag transition só pode ser usada um único componente. Logo, se caso a pessoa quiser colocar mais de uma tag dentro de transition, precisará colocar as diretivas v-if, v-else-if ou v-else, para especificar somente uma delas que será executada
// Note que, se colocarmos duas tags iguais dentro de transition, as animações definidas param de serem processadas. No caso, isso nos obriga a dizer de alguma forma que a tais tags são diferentes pelo atributo key colocando informações diferentes dentro dela
// Nessa vigesima e segunda aula, vamos aprender a ajustar animações com modos de transição, pelo mode
// Nessa vigesima e terceira aula, vamos aprender a usar o atributo key para alternar multiplos elementos. Para isso, precisamos criar uma nova propriedade chamada alertaAtual e o novo div com classe alert-warning e o filtro Mensagem criada. Note que, os próprios values usado na option atribui os valores para o atributo alertaAtual sem necessidade de ter que criar métodos que faça tais alternâncias de strings
// No caso, podemos aproveitar a tal natureza para utilizar a funcionalidade do key. Foi mostrado acima, usando o v-if e v-else-if, que foi criado três mensagens que implica em alternar as informações conforme alternamos o filtro definido pela tag option. Entretanto, se soubermos aproveitar a funcionalidade do key, podemos fazer com que não haja a necessidade de criar três divs para realizar tais alternâncias
// Como foi mostrado no key usado o v-bind e colocado o atributo alertaAtual. Mas essa situação só é mostrado que a tal funcionalidade foi empregada de forma sucedida, mas sem nenhuma visibilidade de tal alteração, como podemos ver no status como ela é feita.
// Para que a tal alteração feita de forma sucedida seja mostrado via status tbm podemos usar o computed para isso, donde foi definido o classesDeAlerta que será o que permite realizar a alternância da classe usando junto com o v-bind visto acima. De maneira análoga, usando o computed, podemos dinamizar a string que será exibida sincronizando de acordo com a classe alternada
// Nessa vigesima e quarta aula, vamos aprender a transitar entre componentes dinâmicos. No caso, transitar entre componentes dinâmicos é muito mais simples do que usando o :key para transitar entre mensagens. No caso, primeiro criamos dois arquivos dentro da pasta components chamados SobreAlert e HomeAlert
// Em seguida, precisamos chamar tais components pelo components e criar um atributo componentSelecionado
import AppHome from './components/HomeAlert.vue'
import AppSobre from './components/SobreAlert.vue'
// Nessa vigesima e quinta aula, vamos aprender a animar múltiplos itens com <transition-group></transition-group> https://vuejs.org/guide/built-ins/transition-group.html
export default {
  components: {
    AppHome,
    AppSobre
  },
  data() {
    return {
      mostrar: true,
      animacaoSelecionada: "fade",
      alertaAtual: "info",
      componentSelecionado: "AppHome"
    };
  },
  computed: {
    classesDeAlerta () {
      return {
        alert: true,
        [`alert-${this.alertaAtual}`]: true
      }
    }
  },
  methods: {
    beforeAppear(el) {
      console.log("beforeAppear", el);
    },
    appear(el, done) {
      console.log("appear", el);
      setTimeout(done, 1000);
    },
    afterAppear(el) {
      console.log("afterAppear", el);
    },
    appearCancelled(el) {
      console.log("appearCancelled", el);
    },
    beforeEnter(el) {
      console.log("beforeEnter", el);
      el.style.opacity = 0;
    },
    enter(el, done) {
      console.log("enter", el);
      let contagem = 0;

      const intervalo = setInterval(() => {
        el.style.opacity = +el.style.opacity + 0.1;
        contagem++;
        if (contagem > 10) {
          clearInterval(intervalo);
          done();
        }
      }, 150);
      // done();
    },
    afterEnter(el) {
      console.log("afterEnter", el);
    },
    enterCancelled(el) {
      console.log("enterCancelled", el);
    },
    beforeLeave(el) {
      console.log("beforeLeave", el);
      el.style.transition = "width 0.5s";
      el.style.overflow = "hidden";
      el.style.whiteSpace = "nowrap";
    },
    leave(el, done) {
      console.log("leave", el);
      let contagem = 0;
      const tamanho = el.offsetWidth;

      const intervalo = setInterval(() => {
        el.style.width = tamanho * (1 - contagem / 10) + "px";
        contagem++;
        if (contagem > 10) {
          clearInterval(intervalo);
          done();
        }
      }, 150);
      // done();
    },
    afterLeave(el) {
      console.log("afterLeave", el);
    },
    leaveCancelled(el) {
      console.log("afterCancelled", el);
    },
  },
};
</script>

<style>
/* body {
  overflow: hidden;
} */
</style>

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
  animation: slide 0.7s cubic-bezier(0.89, 0.41, 1, 0.23);
  transition: opacity 0.7s cubic-bezier(0.89, 0.41, 1, 0.23);
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
.slide-enter-from,
.slide-leave-to {
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
.zoom-enter-active,
.zoom-leave-active {
  transition: transform 0.5s;
}
.zoom-enter-from,
.zoom-leave-to {
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
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
