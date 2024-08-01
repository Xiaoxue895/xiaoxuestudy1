// function anagrams(str1, str2) {
//   // Your code here 
// }


// function commonElements(arr1, arr2) {
//   // Your code here 
// }


// function duplicate(arr) {
//   // Your code here 
// }


// function twoSum(nums, target) {
//   // Your code here 
// }


// function wordPattern(pattern, strings) {
//   // Your code here 
// }


// module.exports = [anagrams, commonElements, duplicate, twoSum, wordPattern];

// hashTableProblems.js

function anagrams(str1, str2) {
  if (str1.length !== str2.length) return false;
  
  const count = {};
  
  for (let char of str1) {
    count[char] = (count[char] || 0) + 1;
  }
  
  for (let char of str2) {
    if (!count[char]) return false;
    count[char]--;
  }
  
  return true;
}

function commonElements(arr1, arr2) {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);
  const common = [...set1].filter(item => set2.has(item));
  return common;
}

function duplicate(arr) {
  const set = new Set();
  for (const num of arr) {
    if (set.has(num)) return num;
    set.add(num);
  }
  return null;
}

function twoSum(nums, target) {
  const seen = new Set();
  for (const num of nums) {
    const complement = target - num;
    if (seen.has(complement)) return true;
    seen.add(num);
  }
  return false;
}

function wordPattern(pattern, strings) {
  if (pattern.length !== strings.length) return false;
  
  const patternMap = new Map();
  const wordMap = new Map();
  
  for (let i = 0; i < pattern.length; i++) {
    const pat = pattern[i];
    const word = strings[i];
    
    if (patternMap.has(pat)) {
      if (patternMap.get(pat) !== word) return false;
    } else {
      patternMap.set(pat, word);
    }
    
    if (wordMap.has(word)) {
      if (wordMap.get(word) !== pat) return false;
    } else {
      wordMap.set(word, pat);
    }
  }
  
  return true;
}

module.exports = [anagrams, commonElements, duplicate, twoSum, wordPattern];

