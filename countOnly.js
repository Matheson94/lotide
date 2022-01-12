// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) {
   console.log(item);
    if (itemsToCount[item] === true) {
		console.log(itemsToCount[item]);
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
        
    }
  }

  return results;
};



const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("Assertion Passed:✅✅✅ " +  actual + "  ===  " + expected);
  } else {
    console.log(`Assertion Failed:⛔️⛔️⛔️  ${actual} !==  ${expected}`);
  }

};