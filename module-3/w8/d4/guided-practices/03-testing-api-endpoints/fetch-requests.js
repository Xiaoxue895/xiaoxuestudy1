/*
Make fetch requests in the browser for each of the following tasks.
Paste your code for fetch requests here once you finish each task.
*/

/* =============================== Phase 1 ================================ */
/*
  Make a request with fetch request to GET /posts and print the response
  components to the console.
*/

// Your code here 

fetch('/posts', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  }
})
.then(response => {
  console.log('Status Code:', response.status);
  console.log('Headers:', response.headers);
  return response.json();
})
.then(data => {
  console.log('Body:', data);
})
.catch(error => {
  console.error('Error:', error);
});




/* =============================== Phase 2 ================================ */
/*
  Make a request with fetch request to POST /posts and print the response
  components to the console.
*/

// Your code here 

fetch('/posts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    title: 'New Post',
    content: 'This is the content of the new post.'
  })
})
.then(response => {
  console.log('Status Code:', response.status);
  console.log('Headers:', response.headers);
  return response.json();
})
.then(data => {
  console.log('Body:', data);
})
.catch(error => {
  console.error('Error:', error);
});


