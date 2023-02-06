<template>
    <h3 class="font-weight-light">Detalhes sobre contato com id: {{ $route.params.id }}</h3>
</template>

<script>
export default {
    created () {
        console.log('Parâmtros da rota: ', this.$route.params)
    }
}
</script>