//Implement the definition for function eqObjects which will take in two objects and returns true or false, based on a perfect match.

const assertEqual = require('./assertEqual');
const isObject = function(object) {
  return object !== null && typeof object === 'object';
};
const eqObjects = function(object1, object2) { 
  const key1 = Object.keys(object1);// Returns true if both objects have identical keys with identical values.
  const key2 = Object.keys(object2);// Otherwise you get back a big fat false!
  if (key1.length !== key2.length) {
    return false;
  }
  for (const key in key1) {
    const val1 = object1[key];
    const val2 = object2[key];
    const areObjects = isObject(val1) && isObject(val2);
    if (areObjects && !eqObjects(val1, val2) || !areObjects && val1 !== val2) {
      return false;
    }
  }
  return true;
};

// Test code
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true
const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false); // => false
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true
const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false

module.exports = eqObjects;

