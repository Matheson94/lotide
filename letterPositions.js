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



const letterPositions = function(string) {
  const results = {};
  for (let i = 0; i < string.length; i++) {
    if (string.charAt(i) !== " ") {
      if (results[string.charAt(i)]) {
        results[string.charAt(i)].push(i);
      } else {
        //results[string.charAt(i)] = [i];
      }
    }
  }
  console.log('results:', results);
  return results;
};


assertEqualArrays(letterPositions("hello").e, [1]);