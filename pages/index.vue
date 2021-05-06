<template>
  <div class="container">
    <div id="content" class="site-content">
      <div id="primary" class="content-area">
        <main id="main" class="site-main" role="main">
          <Blog/>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import Blog from '@/components/Blog'

export default {
  comments: {
    Blog
  }
}
</script>

<style>

</style>
