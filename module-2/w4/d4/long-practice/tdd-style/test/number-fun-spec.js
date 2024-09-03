// Your code here 
const {returnsThree, reciprocal} = require('../problems/number-fun')
const {expect} = require('chai')


describe('returnsThree',()=>{
    it('should return the number 3',()=>{
        expect(returnsThree()).to.equal(3);
    })
})

describe('reciprocal',() =>{
    it('should return the reciprocal of a number',()=>{
        expect(reciprocal(2)).to.equal(0.5);
        expect(reciprocal(1)).to.equal(1);
        expect(reciprocal(0.5)).to.equal(2);
    })
})