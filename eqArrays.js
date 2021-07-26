
const arrestArrayEqual = function(arrayOne,arrayTwo){
 let result = true;
 for(let x = 0; x< arrayOne.length; x++){
  if(arrayOne[x] !== arrayTwo[x]){
   result = false;
   }
  }
if(result === true){
 console.log('Assertion Passed: ${arrayOne} ===${arrayTwo}');
 }else{
 console.log('Assertion Failed: ${arrayOne} !== ${arrayTwo}');
}
};
