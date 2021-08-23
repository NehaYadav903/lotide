//Implement a function eqArrays which takes in two arrays and returns true or false, based on a perfect match.

const assertEqual = require('./assertEqual');
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
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => should PASS

module.exports = eqArrays;

