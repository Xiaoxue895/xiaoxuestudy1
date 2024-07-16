/*

Fix the `feedPet` function. `feedPet` should take in a pet name and return a
function that, when invoked with a food, will return the pet's name and a list
of foods that you have fed that pet.


*/

function feedPet(name) {
  let name1 = name;
  let fedLog = '';

  return (food) => {
    if(fedLog){
      fedLog += ', ';
    }
    fedLog += food; 
    return `Fed ${name1} ${fedLog}.`; 
  }
}

const feedHydra = feedPet('Hydra');

console.log(feedHydra('bones')); // Fed Hyrda bones.
console.log(feedHydra('Hercules')); // Fed Hyrda bones, Hercules.

const feedHippogriff = feedPet('Hippogriff');

console.log(feedHippogriff('worms')); // Fed Hippogriff worms.
console.log(feedHippogriff('crickets')); // Fed Hippogriff worms, crickets.
console.log(feedHippogriff('chicken')); // Fed Hippogriff worms, crickets, chicken.