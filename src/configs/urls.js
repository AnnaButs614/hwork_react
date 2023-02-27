

const baseURL = 'https://jsonplaceholder.typicode.com'
 const urls =
     {todos :'/todos',
         posts:'/posts',
         postById:(id) => `/posts/${id}`,
      albums:'/albums',
         comments:'/comments',
     commentsById:(id) => `/comments/${id}`}

export {baseURL, urls}