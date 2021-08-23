// FUNCTION IMPLEMENTATION
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed:${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed:${actual} !== ${expected}`);
  }
};
const eqArrays = function(array1, array2) { //function that can compare two arrays for a perfect match.
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};
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

