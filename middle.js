const assertArraysEqual = function(arr1, arr2) {
  if (arr1.length === arr2.length) {
    for (var x = 0; x < arr1.length; x++) {
      if (arr1[x] !== arr2[x]) {
        console.log("Arrays are not the same.");
        return false;
      }
    }
  } else {
    console.log("Arrays are not the same length.");
    return false;
  }
console.log("Arrays are the same.");
return true;
}
const eqArrays = function(array1,array2){
  for(let x = 0; x< array1.length; x++){
   if(array1[x] !== array2[x])
    result = false;
    }
    return true;
   }
   const middle = function (array1) {
    if (array1.length <= 2) {
      return [];
    } else if (array1.length % 2 === 0) {
      var middle = [array1[(array1.length) / 2 - 1], array1[(array1.length / 2)]];
      return middle;
    } else {
      var oddMiddle = [Math.floor((array1.length) / 2) + 1];
      return oddMiddle;
    }
  }
  
  module.exports = middle;