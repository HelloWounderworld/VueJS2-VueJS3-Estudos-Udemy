<template>
  <div class="row">
    <!-- coluna 1 -->
    <div class="col-8">
      <h2>Filmes</h2>

      <ul class="list-group list-group-flush"> -->
        <FilmesListaIten
          v-for="filme in filmes"
          :key="filme.id"
          v-bind="filme"
        />
      </ul>
      <!-- A forma abaixo é uma forma estática, sem usar o v-bind -->
      <!-- <FilmesListaIten filmeTitulo="Vingadores" /> -->
      <!-- Podemos colocar um número no lugar de Vingadores, mas dentro das aspas onde mesmo assim continua valendo o valor -->
      <!-- <FilmesListaIten filmeTitulo="42" /> -->
      <!-- Já quando colocamos o formato do filmeTitulo para um v-bind, mesmo dentro das aspas ele será reconhecido como número -->
      <!-- Assim, no console.log, mapeado pelo created, retornará um warning -->
      <!-- <FilmesListaIten :filmeTitulo="42" /> -->
      <!-- Caso o valor passado para o filmeTitulo, dentro da props, for um valor booleano -->
      <!-- Apenas chamando o filmeTitulo em baixo ele retornará o valor booleano colocado -->
      <!--  <FilmesListaIten filmeTitulo /> -->
      <!-- Mas caso vc quiser chamar um valor booleano false, ou vice versa, precisaremos chamar -->
      <!-- no formato em v-bind como visto abaixo, considerando que o filmeTitulo no props está como true -->
      <!-- <FilmesListaIten :filmeTitulo="false" /> -->
      <!-- Vamos chamar o seletor componente sem chamar o componente dentro do props -->
      <!-- Na aplicacao será mostrado um erro no console -->
      <!-- <FilmesListaIten /> -->
      <!-- No caso, uma outra alternativa para corrigir esse esse do console é colocar no componente -->
      <!-- definido da props, um default e, nela colocar alguma String com o valor padrão -->
      <!-- <FilmesListaIten /> -->
      <!-- Agora chamando o seletor do componente e, dentro dela, chamando o prop definida no props -->
      <!-- <FilmesTituloIten filmeTitulo="Marvel Demolidor"/> -->
    </div>

    <!-- coluna 2 -->
    <div class="col-4">
      <FilmesListaItenInfo />
    </div>
  </div>
</template>

<script>
import FilmesListaIten from './FilmesListaIten.vue'
import FilmesListaItenInfo from './FilmesListaItenInfo.vue'
// Colocado o ano dentro do objeto que descreve cada filme dentro
// de filmes precisamos colocar mais algumas propriedades adicionais
// em props que é o filmeAno adicionado nela
// Porém isso tem uma desvantagem quando se trata de colocar mais propriedades
// dentro do objeto como titulo, ano, texto, dia de semana, etc...
// onde implicaria em colocar cada vez mais propriedades em props
// de forma parecida com filmeAno e ter que chamar um por um no seletor.
// Uma forma para evitar isso seria igualando todos os nomes das propriedades
// acrescentadas no props como está em cada propriedade nova acrescentada
// no objeto que descreve o filme abaixo.
// Dessa forma bastaria, no momento em que chamarmos no seletor, colocar apenas
// v-bind="filme" sem ter que ficar chamando cada elemento do objeto definido.
export default {
  components: {
    FilmesListaIten,
    FilmesListaItenInfo
  },
  data () {
    return {
      filmes: [
        { id: 1, titulo: 'Vingadores Guerra Infinita', ano: 2018 },
        { id: 2, titulo: 'Homem Formiga e a Vespa', ano: 2019 },
        { id: 3, titulo: 'Pantera Negra', ano: 2020 },
        { id: 4, titulo: 'DeadPool 2', ano: 2021 }
      ]
    }
  }
}
</script>
