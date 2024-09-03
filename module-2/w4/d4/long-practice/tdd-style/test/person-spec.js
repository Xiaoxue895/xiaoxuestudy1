// Your code here 
const Person = require('../problems/person')
const {expect} = require('chai');

describe('Person',()=>{
    describe('constructor',()=>{
        it('should set the name and age properties on the instance',()=>{
            const preson1 = new Person('harry',30);
            expect(preson1).to.have.property('name','harry');
            expect(preson1).to.have.property('age',30)
    })
    })

    describe('sayHello()',()=>{
        it('return a string of the `Person` instances name and a greeting message',()=>{
            const preson1 = new Person('harry',30);
            expect(preson1.sayHello()).to.equal(`hello, my name is harry`);
        })
    })

    




})