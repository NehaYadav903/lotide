const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');

// FUNCTION IMPLEMENTATION
    const without = function(array1, array2) {
      let filteredArray = [];
      for (const element of array1) {
        if (!array2.includes(element)) {
          filteredArray.push(element);
        }
      }
      return filteredArray;
    };
  without([1, 2, 3], [1]);
  without(["1", "2", "3"], [1, 2, "3"]);
  without(["1", "1", "1", "2", "3", "1" , "1"], ["1", 2, "3"]);
    
module.exports = without;