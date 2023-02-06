<template>
    <div>

        <div class="row">
            <div class="col-sm-10">
                <h1 class="font-weight-light">Lista de Tarefas</h1>
            </div>
            <div class="col-sm-2">
                <button
                    class="btn btn-primary float-right"
                    @click="exibirFormularioCriarTarefa">
                        <i class="fa fa-plus mr-2"></i>
                        <span>Criar</span>
                </button>
            </div>
        </div>

        <!-- <h3 class="font-weight-light mt-4">A Fazer {{ $store.getters.tarefasAFazer.length }}</h3>

        <ul class="list-group" v-if="$store.getters.tarefasAFazer.length > 0">
            <TarefasListaIten
                v-for="tarefa in $store.getters.tarefasAFazer"
                :key="tarefa.id"
                :tarefa="tarefa"
                @editar="selecionarTarefaParaEdicao" />
        </ul>

        <p v-else>Nenhuma tarefa a fazer.</p> -->

        <h3 class="font-weight-light mt-4">A Fazer {{ tarefasAFazer.length }}</h3>

        <ul class="list-group" v-if="tarefasAFazer.length > 0">
            <TarefasListaIten
                v-for="tarefa in tarefasAFazer"
                :key="tarefa.id"
                :tarefa="tarefa"
                @editar="selecionarTarefaParaEdicao" />
        </ul>

        <p v-else>Nenhuma tarefa a fazer.</p>

        <!-- <h3 class="font-weight-light mt-4">Concluídas {{ $store.getters.totalDeTarefasConcluidas }}</h3>

        <ul class="list-group" v-if="tarefasConcluidas.length > 0">
            <TarefasListaIten
                v-for="tarefa in tarefasConcluidas"
                :key="tarefa.id"
                :tarefa="tarefa"
                @editar="selecionarTarefaParaEdicao" />
        </ul>

        <p v-else>Nenhuma tarefa foi concluida.</p>

        <TarefaSalvar
            v-if="exibirFormulario"
            :tarefa="tarefaSelecionada" /> -->

        <h3 class="font-weight-light mt-4">Concluídas {{ totalDeTarefasConcluidas }}</h3>

        <ul class="list-group" v-if="tarefasConcluidas.length > 0">
            <TarefasListaIten
                v-for="tarefa in tarefasConcluidas"
                :key="tarefa.id"
                :tarefa="tarefa"
                @editar="selecionarTarefaParaEdicao" />
        </ul>

        <p v-else>Nenhuma tarefa foi concluida.</p>

        <TarefaSalvar
            v-if="exibirFormulario"
            :tarefa="tarefaSelecionada" />

    </div>
</template>

<script>
// Vamos colocar a propriedade tarefas para o state, pois isso nos dará mais praticidade caso formos alterar a tal lista por vários tipos de components
// No caso, bastaria mapear pelo mapStates como nas outras aulas anteriores
// Se quisermos separar das tarefas já concluídas e das tarefas a fazer. Nessa situação podemos colocar um novo computed properties que indica as tais tarefas concluídas, tarefasConcluidas
// Porém, o uso do getters do vuex, resolverá esse problema de forma mais rápido e permitirá que um conjunto de funções sejam utilizadas em qualquer components
// Vamos aprender a usar os getters nos components
// No caso, foi visto que nos getters é possível configurar uma função que podemos acessar ela chamando via $store.getters
// No caso, isso já serve como um indicativo de que eles podem ser utilizadas como components para conseguir melhorar a sua utilidade usando o property-style
// Assim, como foi feito na tag "A Fazer" e "Concluidas", donde é chamado as funções definidas no getters
// Existem casos em que as funções definidas em getters precisam ser colocadas algum argumento para elas
// Entretanto, no formato $store.getters.funcao, não podemos colocar algum argumento dentro dela. No caso, o que possibilitaria na implementação do argumento de alguma função dentro do getters definida que necessita de um argumento para o teu funcionamento
// seria utilizando o methods-style, donde a tal aplicação está sendo demonstrado a partir da função buscarTarefaPorId definida no store e conectado com o lifecycle hook (created) dentro de TarefaSalvar
// Assim, como foi feito para o state, podemos acessar as funções getters definidas dentro do store usando o mapGetters, importanto o mapGetters dentro do vuex como feito abaixo
// Assim, o computed property definida abaixo, tarefasConcluidas, não será mais necessário o eu uso e nem o uso do $store, como foi feito no A Fazer e Concluidos
// Existe uma outra situação que faz dos estados (state) definido ter a necessidade de alterar ela, seja em colocar algum novo elemento ou objeto, etc...
// De forma resumida, podemos dizer que existem situações em que é necessário ocorrer alguma mutação no estado (state) deifnido no vuex. Para isso, precisamos agora entender a nova funcionalidade chamado mutations do vuex em store, donde foi definido um objeto listaTarefas e esvaziamos a lista definida no state chamado tarefas
// Obs: Sempre utilize o mutation para causar alguma alteração no seu estado!!!
// e chamamos o mutations com $store dentro do lifecycle hook created().
// Um detalhe importante, é que mutations, diferentemente da forma como foi chamado os getters e states pelo $store, não colocamos o nome mutations em si, mas sim commit como foi aplicado no lifecycle hook abaixo
// Podemos tbm colocar argumentos dentro de mutations, mas isso srá feito por meio de Payload
// No caso, dentro lifecycle hook foi definido o payload, que é o segundo argumento definido dentro do commit, e em store, foi definido uma segunda variável na função listaTarefas em mutations (payload), e dentro da função foi chamado o payload definido dentro do commit
// Tal recurso é conhecido como atribuição ia desestruturação!
// A essa altura, podemos ver que o state do vuex, cumpre uma função similar ao data() do export default
// Agora, vamos ver como se faz um commit de mutations com payload em Object Style
// No caso, no lifecycle hook vamos apagar com a string listarTarefas e deixar comente com o objeto dentro dela
// E dentro desse objeto definimos o type, donde nela colocamos qual mutation queremos chamar
// Da mesma forma para getters e state, temos para o mutations o mapMutations que nos permite chamar um conjunto de funções defnidas na mutations, como foi feito abaixo e chamado ela dentro do lifecycle hook
// Além disso, foi mostrado uma outra funcionalidade de mapMutations utilizando ela no methods, donde foi definido um outro nome, carregarTarefas, para chamar a função definida dentro da funcionalidade mutations em vuex
// Lembrando, ...mapMutations podemos chamar apens no methods. Se chamarmos no computed não funcionará
// Mutations devem rodar de forma síncrona (ler algum artigo ou livro que explique bem isso!!)
// Para rodarmos algo de forma assíncrona, devemos usar uma outra funcionalidade que o vuez oferece, que é o actions
// No caso, o grupo de desenvolvedores vue eles resolveram dividir os tipos de funcionalidades que causm alguma mutação para
// tipos síncronas (mutations) e assíncronas (action)
// No caso, no store colocamos, na action, uma função que conecta a mutation (listarTarefas), e agora vamos desativar as funcionalidades as mutations que estamos usando abaixo
// Assim como foi feito para mutation, quando chamamos o $store., em vez de chamamarmos o action, devemos chamar o dispatch que cumpre a função do commit que é feito para mutation para action
// Isso tudo aconte no lifecycle hook created
// Existem situações em que precisamos saber quando o a action termina de executar as suas tarefas ou até mesmo quando se precisa manipular um conjunto de actions e conseguir mapear direito o seu fluxo. Para isso, existe uma funcionalidade que podemos aplicar chamada Promise
// Aplicado elas na função buscarTarefas definida na actions. Além disso, vamos ter que realizar algumas modificações na função listarTarefas dessa actions
// Vamos mostrar como usar o mapActions
// Uma forma de conseguiremos tornar as execuções assíncronas das actions para algo mais síncronas, podemos usar o async e await combinado, pois o await ele serve para esperar que alguma função termine de ser executado para depois ocorrer a execução de alguma outra função
// No caso, no store actions podemos usar isso em listarTarefas
// Chegamos na hora de falarmos da última funcionalidade que o vuex nos oferece, o modules
// No caso, o modules serve para conseguirmos dividir as tarefas e chamamos cada um com o seu conjunto em respectivos lugares
// Estamos aqui mostrando como um state pode ser visto de escopo local e global.
// No caso, o index, que está dentro da pasta store, serve para mostrar que quando estamos acessando, pelo module, os outros states pela instância contador e tarefas definidas
// O state definido dentro de cada const que estamos chamando tem um escopo local e o getter que está sendo utilizado continua no seu escopo local também
// Já o state definido dentro da const store que está chamando outras duas const definida, possui um escopo global
// Mas podemos tbm acessar tais getters e states em seu nível raiz através dos getters que estão definidas em seu escopo local
// Lembrando, que podemos fazer isso somente nos getters e actions
// Agora, vamos mostrar como podemos deixar os nossos modules mais auto contidos de forma a facilitar a organizacao e o acesso de forma imediata
// No caso, uma forma de conseguirmos acessar as instâncias definidas na raiz seria por via do namespaced, como foi usado no index
// Isso nos permite com que as funcoes definidas no getters de cada const, acesse com o escopo raiz, da forma como aparece no console.log Store, por exemplo tarefas/buscarTarefas
// Aqui, no arquivo TarefasLista, para conseguirmos chamar a tal finalidade do namespaced, em cada map ue estamos chamandos o Vuex, bastariamos dizer qual instância dentro do module que definidos que estamos acessando
// No caso 'tarefa', colocar a tal string como o primeiro argumento em cada map. Assim, tornará o suficiente para que cada função definido no getters ela esteja especificada com a tarefa/
// A mesma coisa poderia ser feito no arquivo ContadorCount no map que chamamos e nela chamar a instância 'contador' definido nela
// Além disso, um pequeno detalhe que precisamos tomar cuidado seria dos this.$store.. Note que, no arquivo ContadorCount lá os métodos que definimos não tiramos o .contador a mais colocado
// Isso porque por essa via this.$store, estamos acessando diretamente a instância que definimos
import TarefaSalvar from './TarefaSalvar.vue'
import TarefasListaIten from './TarefasListaIten.vue'
import { mapGetters, mapActions, mapState } from 'vuex'

export default {
  components: {
    TarefaSalvar,
    TarefasListaIten
  },
  data () {
    return {
      exibirFormulario: false,
      tarefaSelecionada: undefined
      // tarefas: [
      //   { id: 1, titulo: 'Aprender Vue', concluido: true },
      //   { id: 2, titulo: 'Aprender Vue Router', concluido: true },
      //   { id: 3, titulo: 'Aprender Vuex', concluido: false }
      // ]
    }
  },
  computed: {
    // ...mapMutations('listarTarefas'),
    ...mapState('tarefas', ['tarefas']),
    ...mapGetters('tarefas', ['tarefasAFazer', 'tarefasConcluidas', 'totalDeTarefasConcluidas'])
    // tarefasConcluidas () {
    //   // return this.$store.state.tarefas
    //   // Pode ser o formato acima ou de baixo, já que a de baixo já tem a instância chamada pelo mapState
    //   // No caso, o filter ele estará acessando os elementos dentro do objeto tarefas
    //   // Porem, fazer isso, caso tiver que implementar um conjunto de propriedades não será viável
    //   // Logo, para isso que existe uma funcionalidade chamada getters do vuex
    //   return this.tarefas.filter(t => t.concluido)
    // }
    // tarefasConcluidas () {
    //   return this.$store.getters.tarefasConcluidas
    // }
  },
  created () {
    // Em payload (o segundo argumento do commit), podemos passar diretamente uma lista
    // this.$store.commit('listarTarefas', {
    //   tarefas: [
    //     { id: 1, titulo: 'Aprender Vue', concluido: true },
    //     { id: 2, titulo: 'Aprender Vue Router', concluido: true },
    //     { id: 3, titulo: 'Aprender Vuex', concluido: false }
    //   ]
    // })
    // this.$store.commit({
    //   type: 'listarTarefas',
    //   tarefas: [
    //     { id: 1, titulo: 'Aprender Vue', concluido: true },
    //     { id: 2, titulo: 'Aprender Vue Router', concluido: true },
    //     { id: 3, titulo: 'Aprender Vuex', concluido: false }
    //   ]
    // })
    // Note que, no this.listarTarefas que é uma das mutações definidas na mutations, não foi necessário definir algum type ou colocar algum argumeto inicial que nem foi feito em commit, que especifica qual função está sendo chamado
    // O próprio mapMutations, por de baixo dos panos, ele já tem a capacidade de fazer isso
    // this.listarTarefas({
    //   tarefas: [
    //     { id: 1, titulo: 'Aprender Vue', concluido: true },
    //     { id: 2, titulo: 'Aprender Vue Router', concluido: true },
    //     { id: 3, titulo: 'Aprender Vuex', concluido: false }
    //   ]
    // })
    // this.carregarTarefas({
    //   tarefas: [
    //     { id: 1, titulo: 'Aprender Vue', concluido: true },
    //     { id: 2, titulo: 'Aprender Vue Router', concluido: true },
    //     { id: 3, titulo: 'Aprender Vuex', concluido: false }
    //   ]
    // })
    setTimeout(async () => {
      // this.listarTarefas({
      //   tarefas: [
      //     { id: 1, titulo: 'Aprender Vue', concluido: true },
      //     { id: 2, titulo: 'Aprender Vue Router', concluido: true },
      //     { id: 3, titulo: 'Aprender Vuex', concluido: false }
      //   ]
      // })
      // this.$store.dispatch('listarTarefas', {
      //   tarefas: [
      //     { id: 1, titulo: 'Aprender Vue', concluido: true },
      //     { id: 2, titulo: 'Aprender Vue Router', concluido: true },
      //     { id: 3, titulo: 'Aprender Vuex', concluido: false }
      //   ]
      // })
      // Uma outra forma alternativa, assim como foi feito para mutations, é chamar a funcionalidade em sua forma de objetos usando type abaixo
      // this.$store.dispatch({
      //   type: 'listarTarefas',
      //   tarefas: [
      //     { id: 1, titulo: 'Aprender Vue', concluido: true },
      //     { id: 2, titulo: 'Aprender Vue Router', concluido: true },
      //     { id: 3, titulo: 'Aprender Vuex', concluido: false }
      //   ]
      // })
      // this.$store.dispatch('listarTarefas')
      //   .then(() => {
      //     console.log('Actions executadas!')
      //   })
      // this.carregarTarefas()
      //   .then(() => {
      //     console.log('Actions executadas!')
      //   })
      // this.listarTarefas()
      //   .then(() => {
      //     console.log('Actions executadas!')
      //   })
      await this.listarTarefas()
      console.log('Actions executadas')
    }, 1000)
  },
  methods: {
    // ...mapActions(['listarTarefas']),
    ...mapActions('tarefas', {
      carregarTarefas: 'listarTarefas',
      listarTarefas: (dispatch, payload, options) => {
        return dispatch('listarTarefas', payload, options)
      }
    }),
    // ...mapMutations(['listarTarefas']),
    // ...mapMutations({
    //   carregarTarefas: 'listarTarefas',
    //   listarTarefas: (commit, payload, options) => {
    //     commit('listarTarefas', payload, options)
    //   }
    // }),
    exibirFormularioCriarTarefa (event) {
      if (this.tarefaSelecionada) {
        this.tarefaSelecionada = undefined
        return
      }
      this.exibirFormulario = !this.exibirFormulario
    },
    selecionarTarefaParaEdicao (tarefa) {
      this.exibirFormulario = true
      this.tarefaSelecionada = tarefa
    },
    resetar () {
      this.exibirFormulario = false
      this.tarefaSelecionada = undefined
    }
  }
}
</script>
