/*Implement assertObjectsEqual which will take in two objects and console.log an appropriate message to the console.
//FUNCTION IMPLEMENTATION*/
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};
const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  } 
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    } 
  } return true; 
};
const eqObjects = function(object1, object2) {
  let keys1 = Object.keys(object1);
  let keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  let results = false;
  for (const key of keys1) {
    if (Array.isArray(object1[key]) || Array.isArray(object2[key])) {
      return eqArrays(object1[key], object2[key]);
    } else if (object1[key] === object2[key]) {
      results = true;
    } else {
      results = false;
    }
  } return results;
};

//Test code
assertObjectsEqual({a: '1', b: 2}, {b: 2, a: '1'});

module.exports = assertObjectsEqual;