const sha256 = require('js-sha256');

class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable {

  constructor(numBuckets = 4) {
    // Your code here 
    this.count = 0;
    this.capacity = numBuckets;
    this.data = new Array(this.capacity).fill(null);

  }

  hash(key) {
    // Your code here 
    const hashHex = sha256(key).slice(0, 8);
    const hashValue = parseInt(hashHex, 16);
    return hashValue;
  }

  hashMod(key) {
    // Your code here 
    return this.hash(key) % this.capacity;
  }

  insertNoCollisions(key, value) {
    // Your code here 
    const index = this.hashMod(key);

    if(this.data[index] === null){
      this.data[index] = new KeyValuePair(key,value);
      this.count++;
    }else{
      throw new Error('hash collision or same key/value pair already exists!');
    }
  }

  insertWithHashCollisions(key, value) {
    // Your code here 
    const index = this.hashMod(key);
    const newPair = new KeyValuePair(key,value);

    if(this.data[index]){

      newPair.next = this.data[index];
      this.data[index] = newPair;
    }else{
      this.data[index] = newPair;
    }

    this.count++;
  }

  insert(key, value) {
    // Your code here 
  const index = this.hashMod(key);
  let currentpair = this.data[index];

  while(currentpair){
    if(currentpair.key === key){
      break;
    }
    currentpair = currentpair.next;
  }

  if(currentpair){
    currentpair.value = value;
    return;
  }

  const newPair = new KeyValuePair(key, value);
  
  newPair.next = this.data[index];
  this.data[index] = newPair;
  this.count++;
  return;

  }

  // insert(key, value) {

  //   // find the index by running the key through the hashMod function
  //   const index = this.hashMod(key);

    // // grab the pair at the index
    // let currentPair = this.data[index];

    // // check if there currentPair at that index is the key we are trying to insert
    // while(currentPair) {

    //   if(currentPair.key === key) {
    //     break;
    //   };
    //   currentPair = currentPair.next;
    // };

    // if(currentPair) {
    //   currentPair.value = value;
    //   return;
    // }

    // const newPair = new KeyValuePair(key, value);

  //   newPair.next = this.data[index];
  //   this.data[index] = newPair;
  //   this.count++;
  //   return;
  //     // if it is stop
  //     // if it isnt, check the next pair

  //   // check if the currentPair with they key were look for is there
  //     // if it is, overwrite the value

  //   // If there isnt a pair with key were looking for
  //   // create a new KeyValuePair

  //   // set the newPairs next to be the pair currently at that index
  //   // set the pair at that index to be the newPair
  //   // increment our count
  // }

}




module.exports = HashTable;
