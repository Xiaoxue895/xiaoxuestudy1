// Implement the SocialNetwork class here
class SocialNetwork {

  constructor() {
    this.users = {};
    this.follows = {};
    this.currentID = 1;
  }

  addUser(name) {
    // Your code here 
    const userID = this.currentID++;
    this.users[userID] = { id: userID, name: name };
    this.follows[userID] = new Set();
    return userID;
  }

  getUser(userID) {
    // Your code here 
    return this.users[userID] || null;
  }

  follow(userID1, userID2) {
    // Your code here 
    if (!this.users[userID1] || !this.users[userID2]) {
      return false;
    }
    this.follows[userID1].add(userID2);
    return true;
  }

  getFollows(userID) {
    // Your code here 
    return this.follows[userID] || new Set();
  }

  getFollowers(userID) {
    // Your code here 
    const followers = new Set();
    for (const [id, follows] of Object.entries(this.follows)) {
      if (follows.has(Number(userID))) {
        followers.add(Number(id));
      }
    }
    return followers;
  }

  getRecommendedFollows(userID, degrees) {
    // Your code here 
    if (!this.users[userID]) return []; // Return empty array if user does not exist

    const recommended = new Set();
    const visited = new Set();
    const queue = [[userID, 0]];

    while (queue.length > 0) {
      const [currentUserID, currentDegree] = queue.shift();

      if (currentDegree < degrees) {
        for (const followee of this.getFollows(currentUserID)) {
          if (!visited.has(followee) && followee !== userID) {
            visited.add(followee);
            
            // Add followee's followers to the queue for the next degree
            for (const secondDegreeFollowee of this.getFollows(followee)) {
              if (secondDegreeFollowee !== userID && !this.getFollows(userID).has(secondDegreeFollowee)) {
                recommended.add(secondDegreeFollowee);
              }
            }
            
            queue.push([followee, currentDegree + 1]);
          }
        }
      }
    }

    return Array.from(recommended);

  }
}

module.exports = SocialNetwork;
