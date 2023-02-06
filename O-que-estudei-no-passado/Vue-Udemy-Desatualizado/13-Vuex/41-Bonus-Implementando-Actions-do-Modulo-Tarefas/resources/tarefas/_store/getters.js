export default {
  // tarefasConcluidas: (state) => {
  //   return state.tarefas.filter(t => t.concluido)
  // }
  // Abaixo é uma outra forma alternativa que faz a mesma coisa que o formato acima
  // tarefasConcluidas: state => state.tarefas.filter(t => t.concluido),
  tarefasConcluidas: (state, getters, rootState, rootGetters) => {
    console.log('Getters: state: ', state, rootState)
    return state.tarefas.filter(t => t.concluido)
  },
  tarefasAFazer: state => state.tarefas.filter(t => !t.concluido),
  totalDeTarefasConcluidas: (state, getters) => getters.tarefasConcluidas.length,
  // buscarTarefaPorId: forma alternativa (state, getters) => {
  //   // return state.tarefas.find(t => t.id === id)
  //   return (id) => {
  //     return state.tarefas.find(t => t.id === id)
  //   }
  // }
  buscarTarefaPorId: state => id => state.tarefas.find(t => t.id === id),
  boasVindas: (state, getters, rootState, rootGetters) => {
    // state.tarefas
    // Caso eu queira acessar em nivel global devemos colocar .tarefas.tarefas
    // getters.tarefasAFazer
    // Caso eu queira acessar em nivel global seria 'tarefas/tarefasAFazer'
    console.log('State Global: ', rootState.usuario)
    console.log('Getter Global: ', rootGetters.mensagemBoasVindas)
    return rootGetters.mensagemBoasVindas
  }
}
