// FUNCTION IMPLEMENTATION

const { flatten } = require('lodash');
const assertEqual = require('./assertEqual');
const findKeyByValue = function(obj, val) {
  for (let key of Object.keys(bestTVShowsByGenre)) { 
    if (obj[key] === val) {
      return key;
    }
  }
};
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "Friends"), "adventure");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");

module.exports = findKeyByValue;