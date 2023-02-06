<template>
  <!-- <div>
    <slot></slot>
  </div> -->
  <div class="post">

    <slot>
      <div class="post-cabecalho">
        <h2>{{ post.titulo }}</h2>
      </div>

      <div class="post-conteudo">
        <p>{{ post.conteudo }}</p>
      </div>

      <div class="post-rodape">
        <small>{{ post.autor }}</small>
        <a href="#" class="link">Ler mais...</a>
      </div>
    </slot>

    <!-- <div class="post-cabecalho">
      <slot name="cabecalho"></slot>
    </div>

    <div class="post-conteudo">
      <slot></slot>
    </div>

    <div class="post-rodape">
      <slot name="rodape"></slot>
      <a href="#" class="link">
        <slot name="botao">Ler mais...</slot>
      </a>
    </div> -->

  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>

  .post {
    margin: 15px auto;
  }

  .post-cabecalho {
    padding: 5px 12px;
    background-color: #eee;
  }

  .post-conteudo {
    font-size: 16px;
  }

  .post-rodape {
    font-style: italic;
  }

  .link {
    float: right;
  }

  .post-paragrafo {
    color: green;
  }

</style>
