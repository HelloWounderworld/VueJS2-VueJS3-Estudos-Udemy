<template>
  <div class="row">
    <!-- coluna 1 -->
    <div class="col-8">
      <h2>Filmes</h2>
      <!-- Mudamos a div de baixo de div para ul -->
      <!-- <div class="list-group list-group-flush"> -->
      <ul class="list-group list-group-flush">
        <FilmesListaIten
          v-for="(filme, index) in filmes"
          :key="index"
          :filmeTitulo="filme"
        />
      </ul>
      <!-- </div> -->
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
