// test/reverse-string-spec.js
const { expect } = require('chai');
const reverseString = require('../problems/reverse-string');

describe('reverseString function', () => {
  it('should return the reverse of the input string', () => {
    const input = 'fun';
    const output = 'nuf';
    expect(reverseString(input)).to.equal(output);
  });
});

