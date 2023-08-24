const assertEqual = function(actual, expected) {
  const pass = actual === expected;
  const message = pass ? "Passed" : "Failed";
  console.log(`Assertion ${message}: ${actual} === ${expected}`);
};

const countLetters = function(letters) { 
  let letterCount = {};
  for (let i = 0; i < letters.length; i++) {
    const letter = letters[i];
    if (letterCount[letter]) {
      letterCount[letter] += 1;
    } else {
      letterCount[letter] = 1;
    }
  }
  return Object.keys(letterCount).length;
}

// Testing the countLetters function
console.assertEqual(countLetters("abc") === 3, "Test Case 1 Failed");
console.assertEqual(countLetters("hello") === 4, "Test Case 2 Failed");
console.assertEqual(countLetters("mississippi") === 4, "Test Case 3 Failed");

// If all tests pass, this will not produce any output
console.log("All tests passed!");
