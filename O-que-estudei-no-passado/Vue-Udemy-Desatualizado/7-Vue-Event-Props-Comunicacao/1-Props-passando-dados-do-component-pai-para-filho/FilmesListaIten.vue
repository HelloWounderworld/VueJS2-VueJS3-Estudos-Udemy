<template>
    <li class="list-group-item">
        <span>{{ filmeTitulo }}</span>
        <button class="btn btn-success float-right">Selecionar</button>
    </li>
</template>

<script>
// props usando o array serve para conseguir tornar particular de cada filme que atribui dentro dele
export default {
  props: ['filmeTitulo']
}
</script>
