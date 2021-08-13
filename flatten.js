// FUNCTION IMPLEMENTATION
const eqArrays = function(arrayOne,arrayTwo){
  for(let x = 0; x< arrayOne.length; x++){
   if(arrayOne[x] !== arrayTwo[x]){
    result = false;
    }
   }
   return true;
}
 if(result === true){
  console.log("Assertion Passed:" + arrayOne + "===" + arrayTwo);
  }else{
  console.log("Assertion Failed:"  + arrayOne + "!==" + arrayTwo);
 }
 return result;