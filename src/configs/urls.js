

const baseURL = 'https://jsonplaceholder.typicode.com'
 const urls =
     {todos :'/todos',
      albums:'/albums',
         comments:'/comments',
     commentsById:(id) => `/comments/${id}`}

export {baseURL, urls}