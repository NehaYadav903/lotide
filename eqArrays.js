// FUNCTION IMPLEMENTATION
const eqArrays = function(arrayOne,arrayTwo){
 let result = true;
 for(let x = 0; x< arrayOne.length; x++){
  if(arrayOne[x] !== arrayTwo[x]){
   result = false;
   }
  }
if(result === true){
 console.log("Assertion Passed:" + arrayOne + "===" + arrayTwo);
 }else{
 console.log("Assertion Failed:"  + arrayOne + "!==" + arrayTwo);
}
return result;
};

// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅✅✅Assertion Passed: " + actual + " === " + expected);
  } else {
    console.log("🛑🛑🛑Assertion Failed: \"" + actual + "\" !== \"" + expected + "\"");
  }
};


assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); 
eqArrays(["1", "2", "3"], ["1", "2", 3]);
eqArrays([1, 2, 3], [3, 2, 1]) ;