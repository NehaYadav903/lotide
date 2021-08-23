/*Implement assertArraysEqual which will take in two arrays and console.log an appropriate message to the console.
//FUNCTION IMPLEMENTATION.*/
const eqArrays = require('./eqArrays');
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed:${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed:${actual} !== ${expected}`);
  }
};
module.exports = assertArraysEqual;

