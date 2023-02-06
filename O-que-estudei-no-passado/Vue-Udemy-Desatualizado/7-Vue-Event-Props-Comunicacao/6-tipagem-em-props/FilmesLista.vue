<template>
  <div class="row">
    <!-- coluna 1 -->
    <div class="col-8">
      <h2>Filmes</h2>

      <ul class="list-group list-group-flush">
        <FilmesListaIten
          v-for="(filme, index) in filmes"
          :key="index"
          :filmeTitulo="filme"
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
    </div>

    <!-- coluna 2 -->
    <div class="col-4">
      <FilmesListaItenInfo />
    </div>
  </div>
</template>

<script>
import FilmesListaIten from "./FilmesListaIten.vue";
import FilmesListaItenInfo from "./FilmesListaItenInfo.vue";

export default {
  components: {
    FilmesListaIten,
    FilmesListaItenInfo,
  },
  data() {
    return {
      filmes: [
        "Vingadores Guerra Infinita",
        "Homem Formiga e a Vespa",
        "Pantera Negra",
        "DeadPool 2",
      ],
    };
  },
};
</script>
