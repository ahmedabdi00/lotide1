// Function to compare two arrays for equality
const eqArrays = function(arr1, arr2) {
  // Check if the arrays have different lengths; if so, they can't be equal
  if (arr1.length !== arr2.length) {
    return false;
  }
  // Iterate through each element in the arrays
  for (let i = 0; i < arr1.length; i++) {
    // If any elements at the same index are not equal, the arrays are not equal
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  // If no differences were found, the arrays are equal
  return true;
};

// Function to assert if two arrays are equal
const assertArraysEqual = function(actual, expected) {
  // Use the eqArrays function to compare the actual and expected arrays
  const result = eqArrays(actual, expected);
  if (result) {
    // If the result is true, print a passed message
    console.log(`Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    // If the result is false, print a failed message
    console.log(`Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

// Example test cases
assertArraysEqual([1, 2, 3], [1, 2, 3]); // This should pass
assertArraysEqual([1, 2, 3], [3, 2, 1]); // This should fail
assertArraysEqual(["apple", "banana"], ["apple", "banana"]); // This should pass
assertArraysEqual(["apple", "banana"], ["apple", "orange"]); // This should fail
