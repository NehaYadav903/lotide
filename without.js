const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');
// FUNCTION IMPLEMENTATION
// const assertArraysEqual = function(actual, expected) {
//   if (eqArrays(actual, expected)) {
//     console.log(`✅✅✅ Assertion Passed:${actual} === ${expected}`);
//       } else {
//         console.log(`🛑🛑🛑 Assertion Failed:${actual} !== ${expected}`);
//       }
//     };

//     const eqArrays = function(array1, array2) { //function that can compare two arrays for a perfect match.
//       if (array1.length !== array2.length) {
//         return false;
//       }
//       for (let i = 0; i < array1.length; i++) {
//         if (array1[i] !== array2[i]) {
//           return false;
//         }
//       }
//       return true;
//     };
    const without = function(array1, array2) {
      let filteredArray = [];
      for (const element of array1) {
        if (!array2.includes(element)) {
          filteredArray.push(element);
        }
      }
      return filteredArray;
    };
    console.log(without([1, 2, 3], [1]));
    console.log(without(["1", "2", "3"], [1, 2, "3"]));
    console.log(without(["1", "1", "1", "2", "3", "1" , "1"], ["1", 2, "3"]));
    
    /*const words = ["hello", "world", "lighthouse"];
    console.log(without(["hello", "world", "lighthouse"], ["lighthouse"])); // no need to capture return value for this test case
    // Make sure the original array was not altered by the without function
    assertArraysEqual(words, ["hello", "world", "lighthouse"]);*/
    
    //assertArraysEqual(without([1 ,2, 3], [1]));
    


module.exports = without;