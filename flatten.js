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
const flatten = function(array1) {
  let flattened = [];
  for (let i = 0; i < array1.length; i++) {
    if (Array.isArray(array1[i])) {
      for (let j = 0; j < array1[i].length; j++) {
        flattened.push(array1[i][j]);
      } 
    } else {
      flattened.push(array1[i]);
    }
  }
  return flattened;
};
console.log(flatten([1, 2, [3, 4], 5, [6]]));
console.log(flatten([1, 2, [2, 3, 6, 3, 4], 8, 0, 0, 8, 6]));