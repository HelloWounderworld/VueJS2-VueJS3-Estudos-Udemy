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
  props: ['id']
}
</script>
