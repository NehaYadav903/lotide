const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
const eqObjects = function(object1, object2) {
  console.log(eqObjects(ab, ba)); // => true
 const abc = { a: "1", b: "2", c: "3" };
 console.log(eqObjects(ab, abc)); 
};