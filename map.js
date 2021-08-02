const words = ["ground", "control", "to", "major", "tom"];
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}
const assertArrayEqual = function(arrayOne,arrayTwo){
  if (arrayOne.length !== arrayTwo.length) {
    console.log("🛑🛑🛑Assertion Failed: \"" + arrayOne + "\" !== \"" + arrayTwo + "\"");
    return false;
  }
  for(let x = 0; x< arrayOne.length; x++){
   if(arrayOne[x] !== arrayTwo[x]){
    console.log("🛑🛑🛑Assertion Failed: \"" + arrayOne + "\" !== \"" + arrayTwo + "\"");
    return false;
    }
   }
   console.log("✅✅✅Assertion Passed: " + arrayOne + " === " + arrayTwo);
   return true;
};

const results1 = map(words, word => word[0]);
console.log(results1);

