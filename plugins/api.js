const API = {
  getPosts: async () => {
    const data = await fetch('https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/')
    return await data.json()
  },
  getSinglePost: async (id) => {
    const data = await fetch(`https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/${id}`)
    return await data.json()
  }
}

export default API
