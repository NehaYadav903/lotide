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


module.exports = assertArraysEqual;