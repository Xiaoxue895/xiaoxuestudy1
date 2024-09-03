// 1.
function sum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}


try {
  let res = sum(null); 
  console.log(res);
} catch (error) {
  console.error(error.name + ':' + error.message); 
}


// // 2.
// // tests
// sayName("Alex");
// sayName(1);
// // Your code here 

// function sayName(name) {
//   if (typeof name !== 'string') {
//     throw new TypeError('Invalid name! Must be a string!');
//   }
//   console.log(name);
// }

// 3.
function greet(greeting) {
  if (!greeting) {
    throw new Error("There was no greeting given.");
  }

  console.log(greeting);
}

try{
  let newgreet = greet();
  console.log(newgreet);
}catch(error){
  console.error(error.name + ':' + error.message); 
}finally{
  console.log('Hello World!')
}

