<template>
  <div>
    <div class="grid bloggrid" ref="grid">
      <template v-for="post in pagedPosts">
        <BlogPost :post="post" @imageUpdate="initMasonry"/>
      </template>
    </div>

    <div class="clearfix"></div>

    <nav class="pagination" v-if="posts.length">
      <a v-for="page in pages"
         @click.prevent="nextPage(page.number)"
         :class="['page-numbers', {'current': page.active}]"
         href="#"
      >
        {{ page.number }}
      </a>
      <a class="next page-numbers"
         href="#"
         @click.prevent="nextPage"
      >Next »</a>
    </nav>
  </div>
</template>

<script>
import API from '@/plugins/api'
import BlogPost from '@/components/BlogPost'
import Pagination from '@/mixins/pagination'

export default {
  data() {
    return {
      apiLink: 'https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/',
      posts: [],
    }
  },
  mixins: [Pagination],
  async mounted() {
    this.posts = await API.getPosts()

    this.initMasonry()

    this.$nextTick(function () {
      this.initMasonry()
    })
  },
  methods: {
    async initMasonry() {
      const Masonry = await import('masonry-layout')
      new Masonry.default(this.$refs.grid, {
        itemSelector: 'article'
      });
    }
  },
  updated() {
    this.initMasonry()
  },
  comments: {
    BlogPost
  }
}
</script>
