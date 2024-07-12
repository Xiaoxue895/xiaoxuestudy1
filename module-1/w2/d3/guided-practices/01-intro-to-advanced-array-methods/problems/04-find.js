/*
Given the `friends` array below, use the `Array.find()` method to get the first
friend whose name contains 3 or more vowels. Assign the output of
`Array.find()` to the `threeVowelFriend` variable.
*/

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

// Hint: create an array of vowels to use in your solution.
function countvowels(word){
  let vowels = ["a","e","i","o","u"];
  let newWord = word.toLowerCase();
  let count = 0;

  for(let char of newWord){
    if(vowels.includes(char)){
      count++;
    }
  }
  return count;
}

const threeVowelFriend = friends.find(function(friend){
  return countvowels(friend.name) >= 3;
})

console.log(threeVowelFriend); // [ { name: 'Angela', yearsOfFriendship: 2 } ]


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/

try {
  module.exports = threeVowelFriend;
} catch {}
