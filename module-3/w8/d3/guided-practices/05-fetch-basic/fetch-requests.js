/*
Make fetch requests in the browser for each of the following tasks.
Paste your code for fetch requests here once you finish each task.
*/

/* =============== 1. Print the status code of the response =============== */

// Your code here 

fetch('/products')
  .then((res) => console.log(res.status))



/* ====== 2. Print true if the status of the response was successful ====== */

// Your code here 

fetch('/products')
  .then((res) => console.log(res.ok));

/* =================== 3. Print the Content-Type Header =================== */

// Your code here 

fetch('/products')
  .then((res) => console.log(res.headers.get('Content-Type')));



/* ============== 4. Print the body of the response as text =============== */

// Your code here 

fetch('/products')
  .then((res) => res.text()) 
  .then((body) => console.log(body));


// fetch basic 

// fetch('https://api.example.com/submit', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({ name: 'John', age: 30 })
//   })
//     .then(response => response.json()) // 解析 JSON
//     .then(data => console.log(data))    // 打印数据
//     .catch(error => console.error('Error:', error)); // 处理错误
  
