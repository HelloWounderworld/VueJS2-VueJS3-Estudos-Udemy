<template>
  <div>
    <h3 class="font-weight-light">Detalhes sobre contato com id: {{ id }}</h3>
    <div style="height: 900px"></div>
    <p id="parametros">Parâmetros: {{ parametros }}</p>
    <p>
      Hash Para mostrar que estamos capturando o parâmetro Hash:
      {{ $route.hash }}
    </p>
    <router-link :to="`/contatos/${id}/editar`" class="btn btn-primary">
      Editar
    </router-link>
  </div>
</template>

<script>
export default {
  // data() {
  //   return {
  //     id: this.$route.params.id,
  //   };
  // },
  // watch: {
  //     '$route'(to) {
  //         this.id = to.params.id
  //     }
  // },
  // beforeRouteUpdate(to, from, next) {
  //   this.id = to.params.id;
  //   next();
  // },
  // props: ['id'],
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  created() {
    // console.log("Parâmtros da rota: ", this.$route.params);
    console.log("Parâmtros da rota: ", this.$props);
  },
  data() {
    return {
      parametros: this.$route.params,
    };
  },
  beforeRouteUpdate(to, from, next) {
    console.log("beforeRouteUpdate");
    this.parametros = to.params;
    next();
    // Para o beforeRouteUpdate, nela poderá ser acessado as instâncias do data() diretamente sem precisar realizar um call back como foi feito no beforeRouteEnter
  },
};
</script>
