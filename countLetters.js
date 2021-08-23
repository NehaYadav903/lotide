/*Implement the  function which  should take in a sentence (as a string) and then return a count of each of the letters in that sentence.*/

// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
//   }
// };
const assertEqual = require('./assertEqual');
//FUNCTION IMPLEMENTATION
const countLetters = function(texts) {
  let result = {};    //empty object
  for (const text of texts) {
    if (result[text] === undefined) {
      result[text] = 1;
    } else {
      result[text] += 1;
    }
  }
  return result;
};
console.log(countLetters('LHL'));// countLetters('LHL') should return results indicating that L appears twice, and H once.