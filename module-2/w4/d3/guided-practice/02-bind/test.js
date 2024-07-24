// Your code here 
const Employee = require('./employee');

const employee1 = new Employee('John Wick','Dog Lover');

setTimeout(()=>{
    employee1.sayName()
},2000)

setTimeout(()=>{
    employee1.sayOccupation()
},3000)

