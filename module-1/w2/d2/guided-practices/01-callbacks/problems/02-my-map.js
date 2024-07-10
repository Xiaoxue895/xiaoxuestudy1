/*
Write a function called `myMap` that behaves like the `Array.map`
method.
*/

// Your code here 
let myMap = function(arr,cb){
  let result = [];

  for(let i = 0;i < arr.length; i++){
    let res = cb(arr[i],i,arr);
    result.push(res);
  }
  return result;
}

const friends = [
  {
    name: "Albert",
    yearsOfFriendship: 3
  },
  {
    name: "Angela",
    yearsOfFriendship: 2
  },
  {
    name: "Freddy",
    yearsOfFriendship: 8
  },
  {
    name: "Agatha",
    yearsOfFriendship: 6
  }
];

const goodFriendsOrNot = myMap(
  friends,
  friend => friend.yearsOfFriendship > 5
); // [false, false, true, true]


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/

try {
  module.exports = goodFriendsOrNot;
} catch {}
