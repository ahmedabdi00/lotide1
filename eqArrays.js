// FUNCTION IMPLEMENTATION
const eqArrays = function(arr1, arr2) {
  // Check if the arrays have the same length
  if (arr1.length !== arr2.length) {
    return false;
  }

  // Check each element in the arrays
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false; // If any element is not equal, return false
    }
  }

  return true; // If all elements are equal, return true
};

// TEST CASES
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // Should be true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // Should be false
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // Should be true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // Should be false
assertEqual(eqArrays([], []), true); // Both empty arrays, should be true
assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), false); // Different lengths, should be false
assertEqual(eqArrays([1, 2, 3], [1, 2, "3"]), false); // Different types, should be false
