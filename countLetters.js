const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛔️⛔️⛔️Assertion Failed: ${actual} !== ${expected}`);
  }
};


const countLetters = function(string) {
  // Accumulator
  answer = {};
  // Loop thru string
  for (const char of string) {
    if (char !== ' ') {
      if (answer[char]) {
        answer[char] += 1;
      } else {
        answer[char] = 1;
      }
    }
  
}
}
countLetters("LHL");
countLetters("Lighthouse Labs");