const chai = require("chai");
const expect = chai.expect;

const { Word } = require("../class");

describe("Word", function () {
  describe("Word constructor function", function () {
    it('should have a "word" property', function () {
      // expect.fail("replace with your code");
        const wordInstance = new Word('example');
        expect(wordInstance).to.have.property('word');
      });
    
      it('should set the "word" property when a new word is created', function () {
        const wordInstance = new Word('test');
        expect(wordInstance.word).to.equal('test');
      });
    });


  describe("removeVowels function", function () {
    it("should return a the word with all vowels removed", function () {
      const wordInstance = new Word('example');
      expect(wordInstance.removeVowels()).to.equal('xmpl');
      
      const wordInstanceEmpty = new Word('');
      expect(wordInstanceEmpty.removeVowels()).to.equal('');
      
      const wordInstanceNoVowels = new Word('rhythm');
      expect(wordInstanceNoVowels.removeVowels()).to.equal('rhythm');
    });
  });

  describe("removeConsonants function", function () {
    it("should return the word with the consonants removed", function () {
      // expect.fail("replace with your code");
      const wordInstance = new Word('example');
      expect(wordInstance.removeConsonants()).to.equal('eae');
      
      const wordInstanceEmpty = new Word('');
      expect(wordInstanceEmpty.removeConsonants()).to.equal('');
      
      const wordInstanceNoConsonants = new Word('aeiou');
      expect(wordInstanceNoConsonants.removeConsonants()).to.equal('aeiou');

    });
  });
  
  describe("pigLatin function", function () {
    it("should return the word converted to pig latin", function () {
      // expect.fail("replace with your code");
      const wordInstance1 = new Word('apple');
      expect(wordInstance1.pigLatin()).to.equal('appleyay');
  
      const wordInstance2 = new Word('banana');
      expect(wordInstance2.pigLatin()).to.equal('ananabay');

      const wordInstance3 = new Word('cherry');
      expect(wordInstance3.pigLatin()).to.equal('errychay');
  
      const wordInstance4 = new Word('rhythm');
      expect(wordInstance4.pigLatin()).to.be.undefined;
  
      const wordInstanceEmpty = new Word('');
      expect(wordInstanceEmpty.pigLatin()).to.be.undefined;
    });
  });
});
