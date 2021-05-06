<template>
  <div id="content" class="site-content">
    <div id="primary" class="content-area">
      <main id="main" class="site-main" role="main">
        <article>
          <header class="entry-header">
            <h1 class="entry-title">{{ postData.title }}</h1>

            <div class="entry-meta">
              <span class="posted-on"><time class="entry-date published">{{ getDate(postData.createdAt) }}</time></span>
            </div>

            <div class="entry-thumbnail">
              <img :src="postData.image" alt="">
            </div>
          </header>

          <div class="entry-content">{{ postData.description }}</div>

          <footer class="entry-footer">
            <span class="cat-links">
            Posted in
            <a href="#" rel="category tag">audio</a>,
            <a href="#" rel="category tag">embed</a>,
            <a href="#" rel="category tag">media</a>
            </span>
          </footer>
        </article>
      </main>
    </div>
  </div>
</template>

<script>
import API from '@/plugins/api'
import parseDate from "@/mixins/parseDate";

export default {
  data() {
    return {
      postData: []
    }
  },
  mixins: [parseDate],
  async mounted() {
    this.postData = await API.getSinglePost(this.$route.params.id)
  }
}
</script>
