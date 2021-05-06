<template>
  <article>
    <header class="entry-header">
      <h1 class="entry-title">
        <NuxtLink :to='`/posts/${this.post.id}`'>{{ post.title }}</NuxtLink>
      </h1>

      <div class="entry-meta">
          <span class="posted-on">
            <time class="entry-date published">{{ getDate(post.createdAt) }}</time>
          </span>
      </div>

      <div class="entry-thumbnail">
        <img :src='post.image' ref="image">
      </div>
    </header>

    <div class="entry-summary">
      <p>
        {{ post.preview }}
        <NuxtLink class="more-link" :to='`/posts/${this.post.id}`'>Read more</NuxtLink>
      </p>
    </div>

    <footer class="entry-footer">
      <span class="cat-links">
        Posted in
        <a href="#" rel="category tag">audio</a>,
        <a href="#" rel="category tag">embed</a>,
        <a href="#" rel="category tag">media</a>
      </span>
    </footer>
  </article>
</template>

<script>
import parseDate from "@/mixins/parseDate";

export default {
  props: ['post'],
  emits: ['imageUpdate'],
  mixins: [parseDate],
  computed: {
    postLink() {
      return 'https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/' + this.post.id;
    }
  },
  mounted() {
    this.$refs.image.addEventListener('error', () => {
      this.$emit('imageUpdate')
    })

    this.$refs.image.addEventListener('load', () => {
      this.$emit('imageUpdate')
    })
  },
  beforeDestroy() {
    this.$refs.image.removeEventListener('error', () => {})

    this.$refs.image.removeEventListener('load', () => {})
  }
}
</script>
