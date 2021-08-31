// FUNCTION IMPLEMENTATION
const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');
const middle = function(array) {
  let result = [];
  let theMiddle = Math.floor(array.length / 2);
  if (array.length === 1 || array.length === 2) {
    return result;
  } else if (array.length % 2 === 1) {
    return [array[theMiddle]];
  } else if (array.length % 2 === 0) {
    return [array[theMiddle - 1], array[theMiddle]];
  }
};

module.exports = middle;

//Test code
assertArraysEqual(middle([1]), []);// => []
assertArraysEqual(middle([1, 2]), []); // => []
assertArraysEqual(middle([0, 1, 2]), [2]); // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3 ]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]
