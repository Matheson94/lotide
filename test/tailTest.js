const tail = require('../tail');
const assert = require('chai').assert;

describe ('#tail', () => {
  it ('returns [6,7] from [5,6,7]', () => {
    assert.deepEqual(tail([5, 6, 7]), [6, 7]);
  });
  it ('returns Lighthouse, Labs from ["Hello", "Lighthouse", "Labs"]', () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  })
});


// assertEqual(tail([5, 6, 7]), [6, 7]);
// assertEqual(tail(["Hello", "Lighthouse", "Labs"]), "Lighthouse", "Labs");
// assertEqual(tail([5]), 5);
// assertEqual(tail([]), undefined);