<template>
  <li>
    <span>{{ contato.nome }}</span>
    <!-- <button class="btn btn-info btn-sm float-right">Detalhes</button> -->
    <!-- <router-link
            :to="`/contatos/${contato.id}`"
            class="btn btn-info btn-sm float-right mr-2">
            Detalhes
        </router-link> -->
    <!-- <router-link
            :to="{ name: 'contato', params: { id: contato.id } }"
            class="btn btn-info btn-sm float-right mr-2">
            Detalhes
        </router-link> -->
    <router-link
      :to="{ path: `/contatos/${contato.id}`, hash: '#parametros' }"
      class="btn btn-info btn-sm float-right mr-2"
    >
      Detalhes
    </router-link>
    <!-- <button
            class="btn- btn-info btn-sm float-right"
            @click="verDetalhes">
            Detalhes
        </button> -->
  </li>
</template>

<script>
export default {
  props: {
    contato: {
      type: Object,
      required: true,
    },
  },
  // methods: {
  //     verDetalhes() {
  //         // this.$router.push(`/contatos/${this.contato.id}`)
  //         // this.$router.push({ path:`/contatos/${this.contato.id} }`})
  //         // this.$router.push({ path:'/contatos', params: {id : this.contato.id} })
  //         // Esse terceiro formato está errado, pois será apenas considerado o path
  //         this.$router.push({ name:'contato', params: {id : this.contato.id} })
  //     }
  // }
};
</script>
