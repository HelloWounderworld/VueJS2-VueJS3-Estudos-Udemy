<template>
  <div>
    <h3 class="font-weight-light">
      <!-- Editar contato com o id: {{ $route.params.id }} -->
      Editar contato com o id: {{ id }}
    </h3>
    <button class="btn btn-secondary mt-4 mb-4" @click="$router.back()">
      Voltar
    </button>
  </div>
</template>

<script>
export default {
  props: ["id"],
  created() {
    console.log("Parâmetro: ", this.$route.params);
  },
  data() {
    return {
      curso: "Curso de VueJS",
    };
  },
  beforeRouteEnter(to, from, next) {
    console.log("beforeRouteEnter");
    // console.log("Curso: ", this.curso); // É para mostrar que não conseguimos acessar as instâncias do data() dessa forma
    // A única forma para conseguir acessar a tal instância, donde é a propriedade única que essa guarda tem e que outras guardas não tem é acessar a tal instância dentro do next como abaixo
    // next();
    if (to.query.autenticado === "true") {
      // next()
      // return
      return next((vm) => {
        console.log("Curso: ", vm.curso);
      });
    }
    next("/contatos");
  },
  beforeRouteLeave(to, from, next) {
    console.log("beforeRouteLeave");
    const confirmar = window.confirm("Deseja realmente sair?");
    next(confirmar);
  },
};
</script>
