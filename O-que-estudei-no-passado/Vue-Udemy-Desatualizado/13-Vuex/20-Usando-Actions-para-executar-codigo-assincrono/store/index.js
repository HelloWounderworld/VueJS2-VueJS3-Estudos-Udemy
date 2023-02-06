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
      // console.log('before state snapshot')
      // setTimeout(() => {
      //   state.tarefas = tarefas
      //   console.log('callback executado')
      // }, 1000)
      // console.log('after state snapshot')
      state.tarefas = tarefas
    }
  },
  actions: {
    listarTarefas: ({ commit }, payload) => {
      // Uma forma alternativa que podemos colocar aqui no lugar do { commit } seria colocar um context e dentro dele acessar o commit ou outras funcionalidades que tem de disponível
      console.log('action chamada...')
      setTimeout(() => {
        console.log('actions executada!')
        // context.commit('listarTarefas', payload)
        commit('listarTarefas', payload)
        // commit('erro', error)
      }, 2000)
    }
  },
  modules: {
  }
})
