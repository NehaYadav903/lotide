const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');
const eqArrays = require('../eqArrays');

//Test Code
eqArrays(assertArraysEqual(middle([1]), []), true); // => []
eqArrays(assertArraysEqual(middle([1, 2]), []), true); // => [])
eqArrays(assertArraysEqual(middle([1, 2, 3]), [2]), true); // => [2]
eqArrays(assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]), true); // => [3])
eqArrays(assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]), true); // => [2, 3]
eqArrays(assertArraysEqual(middle([1, 2, 3, 3, 5, 6]), [3,4]), true); // => [3, 4]);
