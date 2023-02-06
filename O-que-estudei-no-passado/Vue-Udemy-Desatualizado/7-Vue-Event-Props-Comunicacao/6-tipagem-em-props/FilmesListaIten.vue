<template>
  <li class="list-group-item">
    <span>{{ filmeTituloConcatenado }}</span>
    <button class="btn btn-success float-right">Selecionar</button>
  </li>
</template>

<script>
export default {
  // Ate agora usamos a props como uma lista, mas se quisermos tipar ela
  // precisamos colocar um objeto no lugar dela.
  //  Para contornar o problema que apareceu no console.log, bastaríamos colocar
  // no filmeTitulo um Number, junto com a String como uma lista [String, Number]
  // Mas como o nosso filmeTitulo, precisa ser uma String, deixaremos como está
  props: {
    filmeTitulo: String,
  },
  computed: {
    filmeTituloConcatenado() {
      return `Titulo: ${this.filmeTitulo}`;
    },
  },
  created() {
    // Vamos colocar o created para fazer o mapeamento do que está acontecendo
    console.log(typeof this.filmeTitulo);
  },
};
</script>
