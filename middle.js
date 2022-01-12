function eqArrays(arr1, arr2) {
  let output;
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



const middle = function(array) {
  if (array.length <= 2) {
    return [];
  } else if (array.length % 2 === 0) {
    return [array[Math.ceil(array.length / 2) - 1], array[Math.ceil(array.length / 2)]];
  } else {
    return [array[Math.floor(array.length / 2)]];
  }
}

console.log(middle([2,3,4,5]));
console.log(middle([1,2,3]));