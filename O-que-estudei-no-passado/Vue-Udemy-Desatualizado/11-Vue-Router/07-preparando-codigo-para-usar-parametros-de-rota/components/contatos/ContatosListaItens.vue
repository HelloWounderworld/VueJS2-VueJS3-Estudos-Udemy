<template>
    <li>
        <span>{{ contato.nome }}</span>
        <button class="btn btn-info btn-sm float-right">Detalhes</button>
    </li>
</template>

<script>
export default {
    props: {
        contato: {
            type: Object,
            required: true
        }
    }
}
</script>