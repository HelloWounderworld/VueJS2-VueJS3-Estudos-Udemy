<template>
    <div>
        <h2>Filme selecionado</h2>
        <!-- Aqui o v-if está condicionando se o filme for selecionado -->
        <div class="card" v-if="filme">
            <div class="card-body">
                <h5 class="card-title">{{filme.titulo}}</h5>
                <button class="btn btn-danger float-right">Editar</button>
            </div>
        </div>
        <p v-else>Nenhum filme selecionado</p>
    </div>
</template>

<script>
// Vamos precisar exportar esse arquivo para o arquivo FilmesLista. Assim, esse arquivo se tornará um componente filho
// do FilmesLista, com o props definido abaixo
export default {
  props: {
    filme: Object
  }
}
</script>
