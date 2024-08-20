function firstStep(input) {
  return input.split('&');
}

function secondStep(input) {
  return input.map(pair => pair.split('='));
}

function thirdStep(input) {
  return input.map(([key, value]) => [key, value.replace(/\+/g, ' ')]);
}

function fourthStep(input) {
  return input.map(([key, value]) => [key, decodeURIComponent(value)]);
}

function fifthStep(input) {
  return input.reduce((acc, [key, value]) => {
    acc[key] = value;
    return acc;
  }, {});
}

function parseBody(str) {
  const step1 = firstStep(str);
  const step2 = secondStep(step1);
  const step3 = thirdStep(step2);
  const step4 = fourthStep(step3);
  return fifthStep(step4);
}


/******************************************************************************/
/******************* DO NOT CHANGE THE CODE BELOW THIS LINE *******************/

module.exports = {
  firstStep,
  secondStep,
  thirdStep,
  fourthStep,
  fifthStep,
  parseBody
};
