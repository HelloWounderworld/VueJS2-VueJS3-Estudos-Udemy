<template>
    <div class="Contatos container">
        <h3 class="font-weight-light">Contatos</h3>
        <button class="btn btn-secondary mt-4 mb-4" @click="voltar">Voltar</button>
    </div>
</template>

<script>
export default {
    methods: {
        voltar () {
            // this.$router.push({ path: '/' })
            // acima é a forma alternativa
            // this.$router.push('/')
            // this.$router.replace('/')
            // a forma replace acima nos permite apenas adicionar uma outra rota para uma rota já existente
            // Difere com o push. pois o push ele literalmente cria um novo histórico de rota
            // this.$router.go(-1)
            // o go, acima, serve para conseguir decidir se queremos voltar ou seguir para o histórico de navegação
            // this.$router.foward()
            // o foward, como o nome já disse, serve para prosseguir
            this.$router.back()
            // o back, serve para voltar um histórico anterior
        }
    }
}
</script>
