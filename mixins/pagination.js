export default {
  data() {
    return {
      itemsToShow: 10,
      offsetLeft: 0,
      offsetRight: null,
    }
  },
  computed: {
    pagedPosts() {
      return this.posts.slice(this.offsetLeft, this.offsetRight);
    },
    pages() {
      let pages = []

      for ( let i = 0; i < this.posts.length / this.itemsToShow; i++ ) {
        pages.push({
          number: i + 1,
          active: i + 1 === this.offsetRight / this.itemsToShow
        })
      }

      return pages
    }
  },
  methods: {
    nextPage(pageNumber) {
      if ( typeof pageNumber === 'number' ) {
        this.offsetRight = pageNumber * this.itemsToShow
        this.offsetLeft = this.offsetRight - this.itemsToShow
      } else if ( this.posts.length - this.offsetRight > 0 ) {
        this.offsetLeft += this.itemsToShow
        this.offsetRight += this.itemsToShow
      }
    }
  },
  mounted() {
    this.offsetRight = this.itemsToShow
  }
}
