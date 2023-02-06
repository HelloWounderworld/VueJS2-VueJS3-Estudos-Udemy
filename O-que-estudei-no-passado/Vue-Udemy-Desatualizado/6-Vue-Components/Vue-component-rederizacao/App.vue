<template>
  <app-contador></app-contador>
</template>

<script>
import AppContador from './AppContador.vue'

export default ({
  component: {
    'app-contador': AppContador
  }
})
</script>
