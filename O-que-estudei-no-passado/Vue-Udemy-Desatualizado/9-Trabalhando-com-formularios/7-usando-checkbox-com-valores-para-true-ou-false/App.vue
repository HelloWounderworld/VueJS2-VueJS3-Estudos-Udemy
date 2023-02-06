<template>
  <div id="app">
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">Formulários no Vue</h1>
        <p class="lead">Treinando a manipulação de formulários</p>
      </div>
    </div>

    <div class="container">

      <div class="row">

        <!-- formulario -->
        <div class="col-sm-6">

          <h3>Preencha abaixo</h3>

          <form>

            <div class="form-group">
              <label>Nome:</label>
              <!-- <input
                type="text"
                class="form-control"
                placeholder="Seu nome"
                v-model="nome"> -->
              <input
                type="text"
                class="form-control"
                placeholder="Seu nome"
                v-model.trim="desenvolvedor.nome">
            </div>

            <div class="form-group">
              <label>Endereço de email:</label>
              <input
                type="email"
                class="form-control"
                placeholder="Seu email"
                v-model.lazy="desenvolvedor.email">
            </div>

            <div class="form-group">
              <label>Idade:</label>
              <input
                type="number"
                class="form-control"
                placeholder="Sua idade"
                v-model.number="desenvolvedor.idade">
            </div>

            <div class="form-group">

              <p>Gênero:</p>

              <div class="form-check form-check-inline">
                <!-- <input type="radio" name="genero" checked class="form-check-input" value="Masculino"> -->
                <input
                  type="radio"
                  name="genero"
                  class="form-check-input"
                  value="Masculino"
                  v-model="desenvolvedor.genero">
                <label class="form-check-label">Masculino</label>
              </div>

              <div class="form-check form-check-inline">
                <!-- <input type="radio" name="genero" checked class="form-check-input" value="Feminino"> -->
                <input
                  type="radio"
                  name="genero"
                  class="form-check-input"
                  value="Feminino"
                  v-model="desenvolvedor.genero">
                <label class="form-check-label">Feminino</label>
              </div>

            </div>

            <div class="form-group">
              <label>Ocupação:</label>
              <select class="form-control" placeholder="Seu email">
                <option>Selecione uma opção...</option>
              </select>
            </div>

            <div class="form-group">

              <p>Tecnologias:</p>

              <div class="form-check form-check-inline">
                <input type="checkbox" class="form-check-input" value="JavaScript">
                <label class="form-check-label">JavaScript</label>
              </div>

              <div class="form-check form-check-inline" value="Vue JS">
                <input type="checkbox" class="form-check-input">
                <label class="form-check-label">Vue JS</label>
              </div>

              <div class="form-check form-check-inline">
                <input type="checkbox" class="form-check-input" value="Vuex">
                <label class="form-check-label">Vuex</label>
              </div>

              <div class="form-check form-check-inline">
                <input type="checkbox" class="form-check-input" value="Vue Router">
                <label class="form-check-label">Vue Router</label>
              </div>

            </div>

            <div class="form-group">
              <label>Resumo de perfil:</label>
              <textarea
                class="form-control"
                placeholder="Conte-nos um pouco sobre você..."
                v-model="desenvolvedor.biografia">
              </textarea>
            </div>

            <div class="form-group">

              <div class="form-check form-check-inline">
                <input
                  type="checkbox"
                  class="form-check-input"
                  v-model="desenvolvedor.notificacoes"
                  true-value="Sim"
                  false-value="Não">
                <label class="form-check-label">Receber notificações por email</label>
              </div>

            </div>

            <button class="btn btn-secondary">Resetar</button>
            <button class="btn btn-success">Enviar</button>

          </form>

        </div>

        <!-- saida -->
        <div class="col-sm-6">

          <h3>Saída</h3>

          <div class="card">

            <div class="card-header">Dados</div>

            <ul class="list-group list-group-flush">
              <li class="list-group-item"><strong>Nome:</strong> {{desenvolvedor.nome}}</li>
              <li class="list-group-item"><strong>Email:</strong> {{desenvolvedor.email}}</li>
              <li class="list-group-item"><strong>Idade:</strong> {{desenvolvedor.idade}}</li>
              <li class="list-group-item"><strong>Gênero:</strong> {{desenvolvedor.genero}}</li>
              <li class="list-group-item"><strong>Ocupação:</strong> </li>
              <li class="list-group-item"><strong>Tecnologias:</strong> </li>
              <li class="list-group-item">
                <strong>Biografia:</strong>
                <!-- <pre>{{desenvolvedor.biografia}}</pre> -->
                <div style="white-space: pre;">{{desenvolvedor.biografia}}</div>
              </li>
              <!-- <li class="list-group-item"><strong>Receber notificações?</strong> {{desenvolvedor.notificacoes ? 'Sim' : 'Não'}}</li> -->
              <li class="list-group-item"><strong>Receber notificações?</strong> {{desenvolvedor.notificacoes}}</li>
            </ul>

            <div class="card-header">Model</div>

            <div class="card-body">
              <pre><code>{{ desenvolvedor }}</code></pre>
            </div>

          </div>

        </div>

      </div>

    </div>

  </div>
</template>

<script>
// iremos usar a diretiva v-model para fazermos um two way data binding
// Para isso iremos usar o input nome para trabalhar com isso e interpolando a variável nome no campo de dados Nome!
// Uma propriedade interessante da diretiva v-model é que ela tem uma natureza bidirecional
// Vamos agora a aprender a agrupar dados e setando um valor inicial no input. Para isso, iremos colocar mais pripriedades no data
// Pois será preciso para conseguirmos mostrar o que iremos ensinar!
// A propriedade desenvolvedor criada abaixo servirá nos v-models de Nome, Endereço de Email e Idade acima no html. De maneira análoga, para as tags que compõe os dados tbm!
// Agora, vamos mostrar que a diretiva v-model possui três tipos de modificadores para two way data binding!
// Note que, ao rodar o fomrulário no vue, dá para perceber que inicialmente a idade está no formato number, dentro da diretiva v-model sendo chamada e da forma como está sendo definida inicialmente
// Porém, ao realizar uma modificação desse valor da idade pelo navegador, o html interpreta o valor colocado como uma string. Bom, isso até algumas versões ateriores. Cuja a solução para isso era colocar a diretiva v-model.number (.number é um tipo de modficiador)
// Um outro tipo de modificador que podemos usar, para strings, seria o modificador trim, no caso ficaria v-model.trim (aplicado no v-model para nome), onde ele capta literalmente tudo que é computado nela. Ou seja, se eu colocar o meu nome Leonardo e colocar um espaço antes e depois do nome '     Leonardo      ', como essa daqui, o comum
// é que ela não seja identificado. Porém, com o modificador trim na ativa mostrará até tais espaços
// Um outro modificador que podemos usar, caso não quisermos verificar a modificação em tempo real, no sentido de se eu digitar algo dentro do input seja mostrado a tal implementação em tempo real, é usando o modificador lazy, como usado no email
// a modificação, com esse modificador, colocado no input só vai aparecer depois que tiver colocado algum argumento dentro e ter ocorrido algum evento de change
// Outro detalhe legal de tais modificadores, seria que podemos encadear uma sequência de modificadores seguindo tais ações da maneira que queremos que ocorra
// Agora, vamos aprender a manipular os inputs do tipo textarea, por via do trecho do código Resumo de perfil
// No caso, vamos criar mais uma propriedade dentro do objeto desenvolvedor, a biografia, para mostrarmos como podemos trabalhar com textarea
// Note que, ao colocar algum texto na descrição biográfica quando eu realizo alguma quebra de linha pelo enter, não é exibido a tal quebra de linha no template da saída, mesmo que a tal quebra de linha seja exibida na propriedade  biografia.
// Para isso, uma forma de conseguirmos que a tal quebra de linha seja exibida no template seria usando a tag pre implementado no template da saíde para biografia
// Uma outra forma de consideramos a quebra de texto sem ser o pre, seria pelo css aplicando white-space: pre; numa div
// Agora, vamos aprender a manipular o radio buttons, usado no trecho do código sobre Gênero
// uma forma de fazer os radios buttons alternarem dos clicks de botôes bastarua usar o name coocando o memso nome em cada uma
// Apenas colocando o name, a seleção do botão poderia estar alternando, porém uma forma deixe que ele fique pré selecionado seria usando o checked para o botão que vc queira que ele começa ser selecionado
// Mas agora, com o intuito de ter mais veratilidade, vamos mostrar como isso é feito com o vueJS
// Vamos ter que criar mais uma propriedade, genero com o nome de seleção exatamente como está acima e usar a diretiva v-model para cada radio buttons e isso faz com que o mesmo evento do checked esteja acontecendo
// Agora, vamos aprender a utilizar inputs do tipo checkbox, pelo trecho do código Tecnologias e receber notificaçoes
// Para isso vamos usar uma nova propriedade, notificações
// No caso, ao definir a propriedade acima podemos definir o v-model para o trech do código Receber notificações como está acima e depois pedir para exibir com a condicional ternária no template de saída
// Agora, vamos aprender a usar o checkbox à base de true e false de forma a ligar tais condicionais com o estado das strings, no trecho Receber notificações
// No caso, podemos usar um atalho chamado true-value e false-value onde podemos colocar alguma string que condiciona caso seja verdade a sentença e na propriedade notificações iremos colocar uma string tbm, em vez de um booleano de forma a não precisar mais da aplicação do if ternário
// Podemos deixar a propriedade notificacoes com um conjunto vazio, caso a pessoa queira iniciar sem nenhuma exibição no template de notificações
export default {
  data () {
    return {
      // nome: ''
      desenvolvedor: {
        nome: 'Leonardo Takashi Teramatsu',
        email: '',
        idade: 25,
        biografia: 'Sou desenvolvedor Noob tentando virar Junior!',
        genero: 'Masculino',
        // notificacoes: false
        notificacoes: 'Não'
      }
    }
  }
}
</script>

<style scoped>
  .btn {
    margin-right: 5px;
  }
</style>
