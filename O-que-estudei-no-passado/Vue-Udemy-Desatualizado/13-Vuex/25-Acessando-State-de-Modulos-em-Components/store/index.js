import { createStore } from 'vuex'

const contadorModule = {
  state: {
    contador: 0
  }
}

const tarefasModule = {
  state: {
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
    buscarTarefas: (context, payload) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([
            { id: 1, titulo: 'Aprender Vue', concluido: true },
            { id: 2, titulo: 'Aprender Vue Router', concluido: true },
            { id: 3, titulo: 'Aprender Vuex', concluido: false }
          ])
        }, 2000)
      })
    },
    listarTarefas: async ({ commit, dispatch }, payload) => {
      // Uma forma alternativa que podemos colocar aqui no lugar do { commit } seria colocar um context e dentro dele acessar o commit ou outras funcionalidades que tem de disponível
      // console.log('action chamada...')
      // setTimeout(() => {
      //   console.log('actions executada!')
      //   // context.commit('listarTarefas', payload)
      //   commit('listarTarefas', payload)
      //   // commit('erro', error)
      // }, 2000)
      console.log('Action: listarTarefas')
      // return dispatch('buscarTarefas')
      //   .then(tarefas => {
      //     console.log('Mutation: listarTarefas')
      //     commit('listarTarefas', { tarefas })
      //   })
      const tarefas = await dispatch('buscarTarefas')
      console.log('Mutation: listarTarefas')
      commit('listarTarefas', { tarefas })
      // Com isso, teremos um fluxo muito parecido com algo síncrono, mas ainda continua sendo algo assíncrona
    }
  }
}

// export default createStore({
//   // state: {
//   //   contador: 0,
//   //   tarefas: []
//   // },
//   // getters: {
//   //   // tarefasConcluidas: (state) => {
//   //   //   return state.tarefas.filter(t => t.concluido)
//   //   // }
//   //   // Abaixo é uma outra forma alternativa que faz a mesma coisa que o formato acima
//   //   tarefasConcluidas: state => state.tarefas.filter(t => t.concluido),
//   //   tarefasAFazer: state => state.tarefas.filter(t => !t.concluido),
//   //   totalDeTarefasConcluidas: (state, getters) => getters.tarefasConcluidas.length,
//   //   // buscarTarefaPorId: forma alternativa (state, getters) => {
//   //   //   // return state.tarefas.find(t => t.id === id)
//   //   //   return (id) => {
//   //   //     return state.tarefas.find(t => t.id === id)
//   //   //   }
//   //   // }
//   //   buscarTarefaPorId: state => id => state.tarefas.find(t => t.id === id)
//   // },
//   // mutations: {
//   //   listarTarefas: (state, { tarefas }) => {
//   //     // uma forma alternativa é colocar algum outro nome de variável, como payload, no caso ficaria, (state, payload)
//   //     // E assim, visto que, dentro do payload é definido um conjunto que tem como o elemento tarefas
//   //     // para acessa-la, bastaria definir como payload.tarefas
//   //     // state.tarefas = payload.tarefas
//   //     // console.log('before state snapshot')
//   //     // setTimeout(() => {
//   //     //   state.tarefas = tarefas
//   //     //   console.log('callback executado')
//   //     // }, 1000)
//   //     // console.log('after state snapshot')
//   //     state.tarefas = tarefas
//   //   }
//   // },
//   // actions: {
//   //   buscarTarefas: (context, payload) => {
//   //     return new Promise((resolve, reject) => {
//   //       setTimeout(() => {
//   //         resolve([
//   //           { id: 1, titulo: 'Aprender Vue', concluido: true },
//   //           { id: 2, titulo: 'Aprender Vue Router', concluido: true },
//   //           { id: 3, titulo: 'Aprender Vuex', concluido: false }
//   //         ])
//   //       }, 2000)
//   //     })
//   //   },
//   //   listarTarefas: async ({ commit, dispatch }, payload) => {
//   //     // Uma forma alternativa que podemos colocar aqui no lugar do { commit } seria colocar um context e dentro dele acessar o commit ou outras funcionalidades que tem de disponível
//   //     // console.log('action chamada...')
//   //     // setTimeout(() => {
//   //     //   console.log('actions executada!')
//   //     //   // context.commit('listarTarefas', payload)
//   //     //   commit('listarTarefas', payload)
//   //     //   // commit('erro', error)
//   //     // }, 2000)
//   //     console.log('Action: listarTarefas')
//   //     // return dispatch('buscarTarefas')
//   //     //   .then(tarefas => {
//   //     //     console.log('state: {
//   //   contador: 0,
//   //   tarefas: []
//   // },
//   // getters: {
//   //   // tarefasConcluidas: (state) => {
//   //   //   return state.tarefas.filter(t => t.concluido)
//   //   // }
//   //   // Abaixo é uma outra forma alternativa que faz a mesma coisa que o formato acima
//   //   tarefasConcluidas: state => state.tarefas.filter(t => t.concluido),
//   //   tarefasAFazer: state => state.tarefas.filter(t => !t.concluido),
//   //   totalDeTarefasConcluidas: (state, getters) => getters.tarefasConcluidas.length,
//   //   // buscarTarefaPorId: forma alternativa (state, getters) => {
//   //   //   // return state.tarefas.find(t => t.id === id)
//   //   //   return (id) => {
//   //   //     return state.tarefas.find(t => t.id === id)
//   //   //   }
//   //   // }
//   //   buscarTarefaPorId: state => id => state.tarefas.find(t => t.id === id)
//   // },
//   // mutations: {
//   //   listarTarefas: (state, { tarefas }) => {
//   //     // uma forma alternativa é colocar algum outro nome de variável, como payload, no caso ficaria, (state, payload)
//   //     // E assim, visto que, dentro do payload é definido um conjunto que tem como o elemento tarefas
//   //     // para acessa-la, bastaria definir como payload.tarefas
//   //     // state.tarefas = payload.tarefas
//   //     // console.log('before state snapshot')
//   //     // setTimeout(() => {
//   //     //   state.tarefas = tarefas
//   //     //   console.log('callback executado')
//   //     // }, 1000)
//   //     // console.log('after state snapshot')
//   //     state.tarefas = tarefas
//   //   }
//   // },
//   // actions: {
//   //   buscarTarefas: (context, payload) => {
//   //     return new Promise((resolve, reject) => {
//   //       setTimeout(() => {
//   //         resolve([
//   //           { id: 1, titulo: 'Aprender Vue', concluido: true },
//   //           { id: 2, titulo: 'Aprender Vue Router', concluido: true },
//   //           { id: 3, titulo: 'Aprender Vuex', concluido: false }
//   //         ])
//   //       }, 2000)
//   //     })
//   //   },
//   //   listarTarefas: async ({ commit, dispatch }, payload) => {
//   //     // Uma forma alternativa que podemos colocar aqui no lugar do { commit } seria colocar um context e dentro dele acessar o commit ou outras funcionalidades que tem de disponível
//   //     // console.log('action chamada...')
//   //     // setTimeout(() => {
//   //     //   console.log('actions executada!')
//   //     //   // context.commit('listarTarefas', payload)
//   //     //   commit('listarTarefas', payload)
//   //     //   // commit('erro', error)
//   //     // }, 2000)
//   //     console.log('Action: listarTarefas')
//   //     // return dispatch('buscarTarefas')
//   //     //   .then(tarefas => {
//   //     //     console.log('Mutation: listarTarefas')
//   //     //     commit('listarTarefas', { tarefas })
//   //     //   })
//   //     const tarefas = await dispatch('buscarTarefas')
//   //     console.log('Mutation: listarTarefas')
//   //     commit('listarTarefas', { tarefas })
//   //     // Com isso, teremos um fluxo muito parecido com algo síncrono, mas ainda continua sendo algo assíncrona
//   //   }
//   // },Mutation: listarTarefas')
//   //     //     commit('listarTarefas', { tarefas })
//   //     //   })
//   //     const tarefas = await dispatch('buscarTarefas')
//   //     console.log('Mutation: listarTarefas')
//   //     commit('listarTarefas', { tarefas })
//   //     // Com isso, teremos um fluxo muito parecido com algo síncrono, mas ainda continua sendo algo assíncrona
//   //   }
//   // },
//   modules: {
//     contador: contadorModule,
//     tarefas: tarefasModule
//   }
// })

const store = createStore({
  modules: {
    contador: contadorModule,
    tarefas: tarefasModule
  }
})

console.log('Store: ', store)

export default store
