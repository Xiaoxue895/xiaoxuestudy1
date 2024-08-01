// class KeyValuePair {
//   constructor(key, value) {
//     this.key = key;
//     this.value = value;
//     this.next = null;
//   }
// }

// class HashTable { // get O(1), set O(1), deleteKey O(1)

//   constructor(numBuckets = 8) {
//     // Initialize your buckets here
//     // Your code here 
//   }

//   hash(key) {
//     let hashValue = 0;

//     for (let i = 0; i < key.length; i++) {
//       hashValue += key.charCodeAt(i);
//     }

//     return hashValue;
//   }

//   hashMod(key) {
//     // Get index after hashing
//     return this.hash(key) % this.capacity;
//   }


//   insert(key, value) {
//     // Your code here 
//   }


//   read(key) {
//     // Your code here 
//   }


//   resize() {
//     // Your code here 
//   }


//   delete(key) {
//     // Your code here 
//   }
// }


// module.exports = HashTable;
class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null; // 指向链表中的下一个节点
  }
}

class HashTable {
  constructor(numBuckets) {
    this.capacity = numBuckets;
    this.data = Array(numBuckets).fill(null);
    this.count = 0;
  }

  // 哈希函数
  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash << 5) + hash + key.charCodeAt(i);
    }
    return hash;
  }

  // 哈希取模
  hashMod(key) {
    return Math.abs(this.hash(key) % this.capacity);
  }

  insert(key, value) {
    // 找到索引
    const index = this.hashMod(key);
    
    // 取得当前索引处的键值对
    let currentPair = this.data[index];
    
    // 如果链表不为空，遍历链表检查是否已经存在相同的键
    while (currentPair) {
      if (currentPair.key === key) {
        // 如果找到相同的键，更新值
        currentPair.value = value;
        return;
      }
      currentPair = currentPair.next;
    }
    
    // 如果没有找到相同的键，则创建新的键值对
    const newPair = new KeyValuePair(key, value);
    
    // 将新的键值对插入到链表的头部
    newPair.next = this.data[index];
    this.data[index] = newPair;
    
    // 增加元素计数
    this.count++;
    
    // 检查是否需要调整哈希表大小
    if (this.count / this.capacity > 0.7) {
      this.resize();
    }
  }
  

  read(key) {
    const index = this.hashMod(key);
    let currentPair = this.data[index];

    while (currentPair) {
      if (currentPair.key === key) {
        return currentPair.value;
      }
      currentPair = currentPair.next;
    }

    return undefined;
  }

  resize() {
    const oldData = this.data;
    const oldCapacity = this.capacity;
    this.capacity *= 2;
    this.data = Array(this.capacity).fill(null);
    this.count = 0;

    for (const bucket of oldData) {
      let currentPair = bucket;
      while (currentPair) {
        this.insert(currentPair.key, currentPair.value);
        currentPair = currentPair.next;
      }
    }
  }

  delete(key) {
    const index = this.hashMod(key);
    let currentPair = this.data[index];
    let prevPair = null;

    while (currentPair) {
      if (currentPair.key === key) {
        if (prevPair) {
          prevPair.next = currentPair.next;
        } else {
          this.data[index] = currentPair.next;
        }
        this.count--;
        return;
      }
      prevPair = currentPair;
      currentPair = currentPair.next;
    }

    return "Key not found";
  }
}

module.exports = HashTable;
