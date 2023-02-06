<template>
  <div id="app">
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">Requisições HTTP no Vue</h1>
        <p class="lead">
          Usando a biblioteca Axios para fazer chamadas Ajax à uma API REST.
        </p>
      </div>
    </div>

    <div class="container">
      <TarefasLista />
    </div>
  </div>
</template>

<script>
// https://fontawesome.com/start
// Nessa primeira aula, vamos preprar o API Rest. No caso, para isso, iremos usar um arquivo json do github desse link https://github.com/typicode/json-server
// O pacote, github, acima serve para realizar simulações de API para teste, antes de lançar para a produção
// Vamos criar uma pasta db e dentro dela criar um arquivo chamado package.json e o arquivo db.json
// Após isso, iremos rodar no terminal dentro do arquivo db os arquivos que definimos com npm start
// Nessa segunda aula, vamos instalar o axios via npm para podemos, finalmente, iniciar as aulas de vue axios http
// Para a instalação bastaria seguir os passos desse github https://github.com/axios/axios
// Para a finalidade da aula bastaria rodar npm i axios no terminal dentro do arquivo hello-wounder-world-http
// Nessa terceira aula, vamos aprender a fazer requisicao para trazer a lista de tarefas usando o método GET.
// Para saber mais detalhes sobre as requisições que temos em vue axios http segue o link https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Methods
// Porém, por hora, vale ressaltar que os métodos de requisições GET, POST, PUT, DELETE, etc... são tipos de requisições chamadas de ajax
// Vamos criar um novo diretório chamado config dentro do src
// Assim, no arquivo TarefasList.vue vamos importar o config e o Axios
// Assim, no mesmo arquivo ao definirmos o lifecycle hook created dentro dela podemos chamar a lista tarefas que foi definido dentro do db realizando a requisição GET de forma a deixar, em princípio, tarefas como uma lista vazia
// Nessa quarta aula, vamos aprender a utilizar a requisição POST para criar novas tarefas
// No caso, no arquivo TarefasLista vamos definir o atributo chamado exibirFormulario com algum valor booleano
// Em seguida, no mesmo arquivo, vamos definir a TarefasLista e nela definir a div Lista de Tarefas
// Agora, no arquivo TarefaSalvar, na div Tarefa concluida?, dentro do input vamos chamar o v-model com tarefasLocal e na tag form criar o @submit.prevent e dentro dela chamar o método salvar
// Depois disso, no arquivo TarefasLista.vue na tag TarefaSalvar, vamos definir @criar="criarTarefa" e dentro desse método que receberá as informações do emit definido no método salvar de TarefaSalvar, vamos chamar a requisição POST
// Por algum motivo não está indo: Pesquisar - Descberto o problema, foi que na TarefaLista o método estava escrito como methdos e não methods, que é o correto
// Note que no db.json, foi criado um novo elemento com o titulo que vc colocou "Aprender Vuex". Além disso, note que, o id nem foi necessário escrever e ele foi definido automaticamente
// Nessa quinta aula, vamos aprender a selecionar tarefa da lista para edição
// No caso, vamos trabalhar em cima do arquivo TarefasListaIten.vue, em seguida configurar os devidos métodos em TarefaLista e depois configurar outras necessidades em TarefaSalvar
// Um detalhe que precisamos tomar cuidado aqui seria que o botão tarefa concluida dentro da tag form, precisa ser especificado como um tipo botão, pois a tag form está com o método submit dentro dela.
// Entretanto, o tipo de ação que queremos que aconteça no botão não é uma submissão, mas sim uma afirmação conclusiva
// Nessa sexta aula, vamos aprender a usar a requisição PUT para editar tarefas existentes
// Na aula anterior, foi preparado as condições necessárias para tal propósito acima, no arquivo TarefasLista.vue, então o que resta é apenas colocar as requisições necessárias no método editarTarefa
// Nessa oitava aula, vamos aprender a usar a requisição DELETE para excluir Tarefas existentes
// No caso, no arquivo TarefasListaIten, vamos configurar esse uso da mesma forma que foi feito de requisição
import TarefasLista from "./components/TarefasLista.vue";

export default {
  components: {
    TarefasLista,
  },
};
</script>
