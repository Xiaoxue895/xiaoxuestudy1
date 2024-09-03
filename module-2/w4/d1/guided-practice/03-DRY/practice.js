function wantbigOrsmall(num1,num2,choose){
  if(num1 > num2){
    if(choose === 'big'){
      return num1
    }else if(choose === 'small'){
      return num2
      }
    }else if(num1 <= num2){
      if(choose === 'big'){
        return num2
      }else if(choose === 'small'){
        return num1
        }
    }
  }



function multiplyBiggerNumByTwo(num1, num2) {
  let bigNum = wantbigOrsmall(num1,num2,'big');
    return bigNum * 2;

}

function divideBiggerNumByThree(num1, num2) {
  let bigNum = wantbigOrsmall(num1,num2,'big');

    return bigNum / 3;
}

function eatMostTacos(sum1, sum2) {
  let bigNum = wantbigOrsmall(sum1,sum2,'big');

    return `I ate ${bigNum} tacos.`;
}

function adoptSmallerDog(weight1, weight2) {
  let smallDog =wantbigOrsmall(weight1,weight2,'small')

    return `I adopted a dog that weighs ${smallDog} pounds.`;
}


/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
  multiplyBiggerNumByTwo,
  divideBiggerNumByThree,
  eatMostTacos,
  adoptSmallerDog
};
