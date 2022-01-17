const middle = require('../middle.js');
const assert = require('chai').assert;

describe("#middle", () => {
  it("returns 2 for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it("returns 3 for [1, 2, 4, 6]", () => {
    assert.deepEqual(middle([1,2,4,6]), [2, 4]); 
  });
});

// assertArraysEqual(middle([1,2,3]));
// assertArraysEqual(middle([1,2,4,6]));
// assertArraysEqual(middle([1,2,6,8]));