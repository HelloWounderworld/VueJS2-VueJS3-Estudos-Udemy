<template>
  <!-- <h2>SobreOver</h2> -->
  <div>
    <h2>SobreOver</h2>

    <p v-if="autor">Autor: {{ autor }}</p>
    <input type="text" v-model="autor">
  </div>

  <!-- <SobreNos /> -->

</template>

<script>
export default {
  // O name, mesmo nao aparecendo no navegador como SobreNos, ao ver no elements estará mostrando que o componenet SobreOver foi substituido pelo nome SobreNos
  // Mas precisa-se tomar cuidado com o uso no name, pois isso etará chamando ele mesmo recursivamente, o que pode implicar num looping infinito
  name: 'SobreNos',
  data () {
    return {
      autor: ''
    }
  },
  created () {
    console.log('Created!')
  },
  // destroyed () {
  //   console.log('Destroyed!')
  // }
  activated () {
    console.log('Activated!')
  },
  deactivated () {
    console.log('Deactivated!')
  }
}
</script>
