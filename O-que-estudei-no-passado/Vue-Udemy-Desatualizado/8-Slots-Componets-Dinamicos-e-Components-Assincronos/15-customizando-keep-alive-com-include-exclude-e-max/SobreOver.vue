<template>
  <!-- <h2>SobreOver</h2> -->
  <div>
    <h2>SobreOver</h2>

    <p v-if="autor">Autor: {{ autor }}</p>
    <input type="text" v-model="autor">
  </div>
</template>

<script>
export default {
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
