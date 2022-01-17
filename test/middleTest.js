const middle = require('../middle.js');
const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual(middle([1,2,3]));
assertArraysEqual(middle([1,2,4,6]));
assertArraysEqual(middle([1,2,6,8]));