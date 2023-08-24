const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CASES
assertEqual("Lighthouse Labs", "Bootcamp"); // This should fail
assertEqual(1, 1); // This should pass
assertEqual("hello", "hello"); // This should pass
assertEqual(5, 10); // This should fail
