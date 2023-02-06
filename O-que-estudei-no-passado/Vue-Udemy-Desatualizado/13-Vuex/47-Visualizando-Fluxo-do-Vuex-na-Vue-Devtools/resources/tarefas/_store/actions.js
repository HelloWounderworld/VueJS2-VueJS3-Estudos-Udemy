import TarefasService from './../_services/TarefasService'
import * as types from './mutation-types'

export default {
  // buscarTarefas: (context, payload) => {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve([
  //         { id: 1, titulo: 'Aprender Vue', concluido: true },
  //         { id: 2, titulo: 'Aprender Vue Router', concluido: true },
  //         { id: 3, titulo: 'Aprender Vuex', concluido: false }
  //       ])
  //     }, 2000)
  //   })
  // },
  // listarTarefas: async ({ commit, dispatch, state, rootState, getters, rootGetters }, payload) => {
  //   // Uma forma alternativa que podemos colocar aqui no lugar do { commit } seria colocar um context e dentro dele acessar o commit ou outras funcionalidades que tem de disponível
  //   // console.log('action chamada...')
  //   // setTimeout(() => {
  //   //   console.log('actions executada!')
  //   //   // context.commit('listarTarefas', payload)
  //   //   commit('listarTarefas', payload)
  //   //   // commit('erro', error)
  //   // }, 2000)
  //   console.log('Action: listarTarefas')
  //   // return dispatch('buscarTarefas')
  //   //   .then(tarefas => {
  //   //     console.log('Mutation: listarTarefas')
  //   //     commit('listarTarefas', { tarefas })
  //   //   })
  //   const tarefas = await dispatch('buscarTarefas')
  //   console.log('Mutation: listarTarefas')
  //   // commit('listarTarefas', { tarefas })
  //   commit(types.LISTAR_TAREFAS, { tarefas })
  //   // Com isso, teremos um fluxo muito parecido com algo síncrono, mas ainda continua sendo algo assíncrona
  //   console.log('Actions: state: ', state, rootState)
  //   // A forma certa de acessar as funcionalidades em nivel raiz usando o commit seria o seguinte
  //   // commit('logar', 'Leonardo Takashi Teramatsu', { root: true })
  //   // No caso, o root com o valor booleano true vai encontrar somente as funcionalidades definidas 'logar'
  //   // A mesma ideia é usada para o dispatch
  //   dispatch('logar', 'Leonardo Takashi Teramatsu', { root: true })
  //   // dispatch('logar', null, { root: true }) // Caso não tiver payload
  // }
  concluirTarefa: async ({ dispatch }, payload) => {
    const tarefa = Object.assign({}, payload.tarefa)
    tarefa.concluido = !tarefa.concluido
    dispatch('editarTarefa', { tarefa })
  },
  criarTarefa: ({ commit }, { tarefa }) => {
    return TarefasService.postTarefa(tarefa)
      .then(response => {
        commit(types.CRIAR_TAREFA, { tarefa: response.data })
      })
      .catch(erro => commit(types.SETAR_ERRO, { erro }))
  },
  editarTarefa: async ({ commit }, { tarefa }) => {
    const response = await TarefasService.putTarefa(tarefa)
    commit(types.EDITAR_TAREFA, { tarefa: response.data })
  },
  deletarTarefa: async ({ commit }, { tarefa }) => {
    const response = await TarefasService.deleteTarefa(tarefa.id)
    console.log(response)
    commit(types.DELETAR_TAREFA, { tarefa })
  },
  listarTarefas: async ({ commit }) => {
    // Uma forma alternativa que podemos colocar aqui no lugar do { commit } seria colocar um context e dentro dele acessar o commit ou outras funcionalidades que tem de disponível
    // console.log('action chamada...')
    // setTimeout(() => {
    //   console.log('actions executada!')
    //   // context.commit('listarTarefas', payload)
    //   commit('listarTarefas', payload)
    //   // commit('erro', error)
    // }, 2000)
    // console.log('Action: listarTarefas')
    // return dispatch('buscarTarefas')
    //   .then(tarefas => {
    //     console.log('Mutation: listarTarefas')
    //     commit('listarTarefas', { tarefas })
    //   })
    // const tarefas = await dispatch('buscarTarefas')
    // const response = await TarefasService.getTarefas()
    // console.log('Mutation: listarTarefas')
    // commit('listarTarefas', { tarefas })
    // commit(types.LISTAR_TAREFAS, { tarefas: response.data })
    try {
      console.log('Action: listarTarefas')
      const response = await TarefasService.getTarefas()
      commit(types.LISTAR_TAREFAS, { tarefas: response.data })
      console.log('Mutation: listarTarefas')
    } catch (erro) {
      commit(types.SETAR_ERRO, { erro })
    }
    // Com isso, teremos um fluxo muito parecido com algo síncrono, mas ainda continua sendo algo assíncrona
    // console.log('Actions: state: ', state, rootState)
    // A forma certa de acessar as funcionalidades em nivel raiz usando o commit seria o seguinte
    // commit('logar', 'Leonardo Takashi Teramatsu', { root: true })
    // No caso, o root com o valor booleano true vai encontrar somente as funcionalidades definidas 'logar'
    // A mesma ideia é usada para o dispatch
    // dispatch('logar', 'Leonardo Takashi Teramatsu', { root: true })
    // dispatch('logar', null, { root: true }) // Caso não tiver payload
  },
  selecionarTarefa: ({ commit }, payload) => {
    commit(types.SELECIONAR_TAREFA, payload)
  },
  resetarTarefaSelecionada: ({ commit }) => {
    commit(types.SELECIONAR_TAREFA, { tarefa: undefined })
  }
}
