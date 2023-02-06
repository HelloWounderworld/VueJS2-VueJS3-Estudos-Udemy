import { createStore } from 'vuex'

export default createStore({
  state: {
    contador: 0,
    tarefas: []
  },
  getters: {
    // tarefasConcluidas: (state) => {
    //   return state.tarefas.filter(t => t.concluido)
    // }
    // Abaixo é uma outra forma alternativa que faz a mesma coisa que o formato acima
    tarefasConcluidas: state => state.tarefas.filter(t => t.concluido),
    tarefasAFazer: state => state.tarefas.filter(t => !t.concluido),
    totalDeTarefasConcluidas: (state, getters) => getters.tarefasConcluidas.length,
    // buscarTarefaPorId: forma alternativa (state, getters) => {
    //   // return state.tarefas.find(t => t.id === id)
    //   return (id) => {
    //     return state.tarefas.find(t => t.id === id)
    //   }
    // }
    buscarTarefaPorId: state => id => state.tarefas.find(t => t.id === id)
  },
  mutations: {
    listarTarefas: (state, { tarefas }) => {
      // uma forma alternativa é colocar algum outro nome de variável, como payload, no caso ficaria, (state, payload)
      // E assim, visto que, dentro do payload é definido um conjunto que tem como o elemento tarefas
      // para acessa-la, bastaria definir como payload.tarefas
      // state.tarefas = payload.tarefas
      console.log('before state snapshot')
      setTimeout(() => {
        state.tarefas = tarefas
        console.log('callback executado')
      }, 1000)
      console.log('after state snapshot')
    }
  },
  actions: {
  },
  modules: {
  }
})
