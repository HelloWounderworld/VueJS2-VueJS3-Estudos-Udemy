<template>
  <div>
    <h2 class="font-weight-light">
      Contador: {{$store.state.contador}}
    </h2>
    <button class="btn btn-lg btn-danger mr-1" @click="decrementar">-</button>
    <button class="btn btn-lg btn-success" @click="incrementar">+</button>
  </div>
</template>

<script>

export default {
  data () {
    return {
      contador: 0
    }
  },
  methods: {
    decrementar () {
      this.$store.state.contador--
    },
    incrementar () {
      this.$store.state.contador++
    }
  }
}
</script>
