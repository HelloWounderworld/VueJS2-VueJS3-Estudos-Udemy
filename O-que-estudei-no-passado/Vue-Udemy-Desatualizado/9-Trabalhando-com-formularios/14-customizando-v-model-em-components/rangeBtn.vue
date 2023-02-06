<template>
  <div>
    <!-- <label>{{label}}</label> -->
    <label>{{customLabel}}</label>
    <!-- <input
      type="range"
      v-bind="$attrs"
      :value="value"
      :class="inputClasses"
      @input="$emit('input', $event.target.value)"> -->
    <!-- <input
      type="range"
      v-bind="$attrs"
      :value="value"
      :class="inputClasses"
      @input="atualizar"> -->
    <input
      type="range"
      v-bind="$attrs"
      :value="valor"
      :class="inputClasses"
      @change="atualizar">
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  model: {
    prop: 'valor',
    event: 'input'
  },
  props: {
    label: String,
    // value: [Number, String],
    valor: [Number, String],
    inputClasses: [String, Object, Array]
  },
  data () {
    return {
      // valorAtual: this.value || this.$attrs.min
      valorAtual: this.valor || this.$attrs.min
    }
  },
  computed: {
    customLabel () {
      return `${this.label} (R$ ${this.valorAtual})`
    }
  },
  methods: {
    atualizar (event) {
      const valor = event.target.value
      // this.$emit('input', valor)
      this.$emit('change', valor)
      this.valorAtual = valor
    }
  },
  created () {
    console.log('Attrs', this.$attrs)
  }
}
</script>
