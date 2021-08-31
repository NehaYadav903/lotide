const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');

// FUNCTION IMPLEMENTATION
const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
	 if (results[sentence[i]]) {
      results[sentence[i]].push(i);//loop
    } else if (sentence[i] === " ") { //remove space
      [sentence[i]].slice(" ");
	    } else {
	      results[sentence[i]] = [i];
    }
  }
  return results; //put value in array as obj
};

//Test Code
console.log(letterPositions('lighthouse in the house'));
assertArraysEqual(letterPositions('hello')['h'], [0]);
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions('hello')['l'], [2, 3]);
assertArraysEqual(letterPositions('hello')['o'], [4]); 

module.exports = letterPositions;
