export default {
  methods: {
    getDate(date) {
      const locale = 'en-US'
      const options = {
        timeZone: 'UTC',
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      }

      return new Date(date).toLocaleString(locale, options)
    }
  }
}
