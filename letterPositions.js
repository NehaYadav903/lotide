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

const letterPositions = function (sentence) {
  const results = {};
  for (letters of sentence) {
    results[letters] = [];
  }
  for (var b in results) {
    for (var a = 0; a < sentence.length; a++) {
      if (b === sentence[a]) {
        results[b].push(a);
      }
    }
  }
  return results;
}
assertArraysEqual(letterPositions('hello')['h'], [0]);
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions('hello')['l'], [2, 3]);
assertArraysEqual(letterPositions('hello')['o'], [4]); 