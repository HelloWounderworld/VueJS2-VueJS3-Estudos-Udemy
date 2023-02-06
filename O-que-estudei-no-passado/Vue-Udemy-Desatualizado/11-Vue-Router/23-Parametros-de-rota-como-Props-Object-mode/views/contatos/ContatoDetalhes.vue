<template>
  <div>
    <h3 class="font-weight-light">Detalhes sobre contato com id: {{ id }}</h3>
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
  props: ['id'],
  created() {
    // console.log("Parâmtros da rota: ", this.$route.params);
    console.log("Parâmtros da rota: ", this.$props);
  },
};
</script>
