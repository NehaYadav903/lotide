// FUNCTION IMPLEMENTATION
const assertArraysEqual = function (arr1, arr2) {
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

const eqArrays = function (arr1, arr2) {
  for (let x = 0; x < arr1.length; x++) {
    if (arr1[x] !== arr2[x])
      return false;
  }
  return true;
}

const flatten = function (array1) {
  var flattened = [];
  for (let a = 0; a < array1.length; a++) {
    if (Array.isArray(array1[a])) {
      for (let b = 0; b < array1[a].length; b++) {
        flattened.push(array1[a][b]);
      }
    } else {
      flattened.push(array1[a]);
    }
  }
  return flattened;
}

console.log(flatten([1, 2, [3, 4], 5, [6]]));
console.log(flatten([1, 2, [2, 3, 6, 3, 4], 8, 0, 0, 8, 6]));