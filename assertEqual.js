/*Implement the function compare the two values it takes in and print out a message telling us if they match or not.
//FUNCTION IMPLEMENTATION*/
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅✅✅Assertion Passed: " + actual + " === " + expected);
  } else {
    console.log("🛑🛑🛑Assertion Failed: \"" + actual + "\" !== \"" + expected + "\"");
  }
};
module.exports = assertEqual;
// Test for assertEqual
// assertEqual("Lighthouse Labs", "Bootcamp");
//  assertEqual(1, 1);
	
