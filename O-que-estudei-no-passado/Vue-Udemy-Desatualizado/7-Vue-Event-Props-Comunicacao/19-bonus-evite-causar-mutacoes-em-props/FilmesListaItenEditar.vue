<template>
    <div>
        <h2>Editar filme</h2>
        <!-- Before -->
        <!-- <div class="form-group">
            <label>Título:</label>
            <input
              type="text"
              class="form-control"
              placeholder="Insira o título"
              :value="filme.titulo"
            >
        </div> -->
        <!-- After -->
        <div class="form-group">
            <label>Título:</label>
            <input
              type="text"
              class="form-control"
              placeholder="Insira o título"
              v-model="filme.titulo"
            >
        </div>

        <!-- Before -->
        <!-- <div class="form-group">
            <label>Título:</label>
            <input
              type="text"
              class="form-control"
              placeholder="Insira o ano"
              :value="filme.ano"
            >
        </div> -->
        <!-- After -->
        <div class="form-group">
            <label>Ano:</label>
            <input
              type="text"
              class="form-control"
              placeholder="Insira o ano"
              v-model="filme.ano"
            >
        </div>
    </div>
</template>

<script>
// As trocas de :value para v-model ocorrida acima retrata exatamente o problema da rodrigagem
// que está acontecendo na tela de mercadinhos de alteração de alguma dado do produto
export default {
  props: {
    filme: {
      type: Object,
      required: true
    }
  }
}
</script>
