function ageSort(users) {
  // Your code here 
  if (users.length <= 1) return users;

  const pivot = users[Math.floor(users.length / 2)]
  const pivotage = pivot.age;

  const left = [];
  const right = [];
  const mid = [];

  for(const user of users){
    if(user.age < pivotage){
      left.push(user)
    }else if(user.age > pivotage){
      right.push(user)
    }else{
      mid.push(user)
    }
  }
  return [...ageSort(left),...mid,...ageSort(right)];
}

function quickSort(arr) {
  if (arr.length <= 1) return arr;

  const pivot = arr[Math.floor(arr.length / 2)];
  const left = [];
  const right = [];
  const equal = [];

  for (const num of arr) {
    if (num < pivot) {
      left.push(num);
    } else if (num > pivot) {
      right.push(num);
    } else {
      equal.push(num);
    }
  }

  return [...quickSort(left), ...equal, ...quickSort(right)];
}

function oddEvenSort(arr) {
  // Your code here 
  const odd = [];
  const even = [];

  for(let ele of arr){
    if(ele % 2 === 0){
      even.push(ele);
    }else{
      odd.push(ele);
    }
  }

  let oddarr = quickSort(odd);
  let evenarr = quickSort(even);

  return [...oddarr,...evenarr]
}

function validAnagrams(s, t) {
  // Your code here 
  if (s.length !== t.length) {
    return false;
  }

  const sortedS = quickSort(s.split('')).join('');
  const sortedT = quickSort(t.split('')).join('');

  return sortedS === sortedT;
}

function reverseBaseSort(arr) {
  // Your code here 
  const getBase = (num) => num.toString().length;

  const groups = {};

  arr.forEach(num => {

    const base = getBase(num);

    if (!groups[base]) {
      groups[base] = [];
    }

    groups[base].push(num);

  });

  const sortedBaseKeys = Object.keys(groups).sort((a, b) => b - a);

 
  const result = sortedBaseKeys.reduce((acc, base) => {

    const group = groups[base];

    acc.push(...group.sort((a, b) => a - b));
    
    return acc;

  }, []);

  return result;
}

function frequencySort(arr) {
  // Your code here 
  const frequencyMap = {};

  for (const num of arr) {
    if (frequencyMap[num]) {
      frequencyMap[num] += 1;
    } else {
      frequencyMap[num] = 1;
    }
  }

  const entries = [];
  for (const [num, freq] of Object.entries(frequencyMap)) {
    entries.push([Number(num), freq]);
  }

  entries.sort((a, b) => {
    const [numA, freqA] = a;
    const [numB, freqB] = b;

    if (freqA !== freqB) {
      return freqA - freqB;
    }
    return numB - numA;
  });

  const result = [];
  for (const [num, freq] of entries) {
    for (let i = 0; i < freq; i++) {
      result.push(num);
    }
  }

  return result;
}

module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];
