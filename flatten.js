const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');

//FUNCTION IMPLEMENTATION
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
flatten([1, 2, [3, 4], 5, [6]]);
flatten([1, 2, [2, 3, 6, 3, 4], 8, 0, 0, 8, 6]);

module.exports = flatten;