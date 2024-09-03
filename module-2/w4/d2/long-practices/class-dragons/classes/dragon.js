// Your code here 
class Dragon{
  constructor(name,color){
  this.name = name;
  this.color = color;
  }

  breathesFire(){
    return `${this.name} breathes fire everywhere! BURN!!!!`
  }

  static getDragons(...dragons){
    return dragons.map(dragon => dragon.name);

  }
}

module.exports = Dragon;

const toothless = new Dragon("Toothless", "black");
console.log(toothless);
console.log(toothless.breathesFire());
/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Dragon;
} catch {
  module.exports = null;
}
