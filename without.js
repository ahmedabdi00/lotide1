// Function to compare two arrays for equality
const eqArrays = function(arr1, arr2) {
  // Check if the arrays have different lengths; if so, they can't be equal
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false; // If any element is not equal, return false
    }
  }

  return true; // If all elements are equal, return true
};

// Function to print assertion results for arrays
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`❌ Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

// Function to remove unwanted elements from an array
const without = function(source, itemsToRemove) {
  const result = [];

  for (const item of source) {
    if (!itemsToRemove.includes(item)) {
      result.push(item);
    }
  }

  return result;
};

// Test cases
const words = ["hello", "world", "lighthouse"];
const numbers = [1, 2, 3, 4, 5];

// Test case 1: Remove one element
const result1 = without(words, ["lighthouse"]);
assertArraysEqual(result1, ["hello", "world"]); // ["lighthouse"] is removed

// Test case 2: Remove multiple elements, including different data types
const result2 = without(numbers, [2, "4"]);
assertArraysEqual(result2, [1, 3, 5]); // [2, "4"] is removed

// Test case 3: Ensure the original array is not modified
assertArraysEqual(words, ["hello", "world", "lighthouse"]); // Original array is still intact
