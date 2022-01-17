const assertEqual = require('./assertEqual');

function eqArrays(arr1, arr2) {
  let output;
	if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
		return false, "Not An Array";
	}
  if (arr1.length !== arr2.length) return false;
  for (var i = 0, length = arr1.length; i < length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

module.exports = eqArrays;




assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false
assertEqual(eqArrays(["1", "2", "3"], "hello"), false);