# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @yneha/lotide`

**Require it:**

`const _ = require('@yneha/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

*`assertArraysEqual :` given two arrays, evaluate if they are equal, or not
*`assertEqual :` given two inputs, evaluate if they are equal, or not
*`assertObjectsEqual :` given two objects, evaluate if they are equal, or not
*`countLetters :` when given a string, create an object with letters as keys, which equate to values indicating how many the letter appears in the string
*`countOnly :` given an array of items, then return counts for a specific subset of those items - This is limited to String only
*`eqArrays :` given two arrays, check if they are equal, or not
*`eqObjects :` given two objects, check if they are equal, or not
*`findKey :` given an object and a condition, find the key where the value satisfies the condition
*`findKeyByValue :` given an object and a value, find the key corresponding to the value
*`flatten :` given a nested array, remove all the nested arrays
*`head :` given an array, return the first element within the array
*`letterPositions :` given a string, return an object indicating the index of all the letters in the string
*`map :` given an array and a condition, modify each element to fulfill the given condition
*`middle :` given an array, return the elements in the middle of the array if array length is odd. If the length is even, return both middle numbers.
*`tail :` given an array, return an array without the first element from the original array
*`takeUntil :` given an array and a condition, create a new array with the elements starting from index[0] of the original array, until an element does not meet the condition given.
*`without :` given two arrays, modify array 1 to remove all elements that are in both array 1 and array 2
