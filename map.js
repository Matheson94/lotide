
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


const assertEqualArrays = (arr1, arr2) => {
  if (eqArrays(arr1, arr2)) { 
    console.log("Equal");
  } else {
    console.log("False");
  }
}



const words = ["ground", "control", "to", "major", "tom"];

/*const map = function(array, callback) {
  const results = [];
  return results;
} */

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const results1 = map(words, word => word[0]);
console.log(results1);


