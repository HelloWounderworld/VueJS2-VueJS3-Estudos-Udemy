<template>
  <!-- Nao se pode colocar dois elementos roots no mesmo bloco template -->
  <!-- Se quiser utilizar dois elementos roots devera colocar as duas em uma div -->
  <div>
    <app-header></app-header>
    <app-contador></app-contador>
  </div>
</template>

<script>
import AppContador from './AppContador.vue'
import AppHeader from './AppHeader.vue'

// A essa altura como exclui do componente global Vue.component
// que estava considrando o AppHeader, nao temos mais ele disponivel
// para utilizacao
export default ({
  component: {
    // 'app-contador': AppContador,
    // AppHeader: AppHeader Como na importacao o AppHeader é o mesmo
    // Podemos enxutar da mesma forma como abaixo
    AppContador
    AppHeader
  }
})
</script>
