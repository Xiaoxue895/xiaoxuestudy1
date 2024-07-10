/*
Write a function called `myEvery` that behaves like the `Array.every`
method.
*/

// Your code here 
let myEvery = function(arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    if (!cb(arr[i], i, arr)) {
      return false; // Return false as soon as one element fails the condition
    }
  }
  return true; // Return true if all elements pass the condition
};


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

const allFriendsStartWithA = myEvery(friends, friend => {
  return friend.name.startsWith('A');
}); // false

const allFriendsUnder10Years = myEvery(friends, friend => {
  return friend.yearsOfFriendship < 10;
}); // true

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/

try {
  module.exports = {
    allFriendsStartWithA,
    allFriendsUnder10Years,
  };
} catch {}
