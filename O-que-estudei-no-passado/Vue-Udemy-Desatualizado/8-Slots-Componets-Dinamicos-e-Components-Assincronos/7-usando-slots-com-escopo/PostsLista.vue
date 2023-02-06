<template>
  <div>

    <h2>Lista de posts</h2>

    <PostBlogListaIten
      v-for="post in posts"
      :key="post.id"
      :post="post" >
      <slot :meuPost="post"></slot>
    </PostBlogListaIten>

  </div>
</template>

<script>
import PostBlogListaIten from './PostBlogListaIten.vue'
export default {
  components: {
    PostBlogListaIten
  },
  props: {
    posts: {
      type: Array,
      required: true
    }
  }
}
</script>
