const takeUntil = function(arr, callback) {
  var result = [] ;
  for(let e of arr) {
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log("and the result is: ", results1);  //[ 1, 2, 5, 7, 2 ]
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);  //[ 'I\'ve', 'been', 'to', 'Hollywood' ]
// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);  //[ 'I\'ve', 'been', 'to', 'Hollywood' ]