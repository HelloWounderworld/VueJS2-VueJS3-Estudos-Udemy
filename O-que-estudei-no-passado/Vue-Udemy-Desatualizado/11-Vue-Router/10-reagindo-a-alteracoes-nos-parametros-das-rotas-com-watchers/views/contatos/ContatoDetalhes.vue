<template>
    <h3 class="font-weight-light">Detalhes sobre contato com id: {{ id }}</h3>
</template>

<script>
export default {
    data() {
        return {
            id: this.$route.params.id
        }
    },
    watch: {
        '$route'(to) {
            this.id = to.params.id
        }
    },
    created () {
        console.log('Parâmtros da rota: ', this.$route.params)
    }
}
</script>