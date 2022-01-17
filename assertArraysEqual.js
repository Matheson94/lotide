const eqArrays = require('./eqArrays');


const assertArraysEqual = (arr1, arr2) => {
  if (eqArrays(arr1, arr2)) { 
    console.log("Equal");
  } else {
    console.log("False");
  }
}

module.export = assertArraysEqual;