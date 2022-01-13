
function eqArrays(arr1, arr2) {
	if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
		return "Not An Array";
	}
  if (arr1.length !== arr2.length) return false;
  for (var i = 0, length = arr1.length; i < length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}


const assertArraysEqual = (arr1, arr2) => {
  if (eqArrays(arr1, arr2)) { 
    console.log("Equal");
  } else {
    console.log("False");
  }
}



const takeUntil = function(array, callback) {
  const results = [];
  for (let item of array) {
    if (!callback(item)) {
      results.push(item);
    } else {
      return results;
    }
  }
  console.log(results);
}



const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

