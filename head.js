function head(arr) {
  if (arr.length === 0) {
    return undefined; // Return undefined for empty arrays
  }
  return arr[0];
}


function assertEqual(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
}

// Test cases
assertEqual(head([5, 6, 7]), 5); // Should pass
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); // Should pass
assertEqual(head([42]), 42); // Should pass for an array with one element
assertEqual(head([]), undefined); // Should pass for an empty array
assertEqual(head([undefined, "Lighthouse", "Labs"]), undefined); // Should pass for an array with undefined as the first element
