import {
  LISTAR_TAREFAS
} from './mutation-types'

export default {
  // listarTarefas: (state, { tarefas }) => {
  //   // uma forma alternativa é colocar algum outro nome de variável, como payload, no caso ficaria, (state, payload)
  //   // E assim, visto que, dentro do payload é definido um conjunto que tem como o elemento tarefas
  //   // para acessa-la, bastaria definir como payload.tarefas
  //   // state.tarefas = payload.tarefas
  //   // console.log('before state snapshot')
  //   // setTimeout(() => {
  //   //   state.tarefas = tarefas
  //   //   console.log('callback executado')
  //   // }, 1000)
  //   // console.log('after state snapshot')
  //   state.tarefas = tarefas
  // }
  [LISTAR_TAREFAS]: (state, { tarefas }) => {
    state.tarefas = tarefas
  }
}
