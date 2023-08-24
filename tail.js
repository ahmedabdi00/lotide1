function eqArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false; // If lengths are different, the arrays can't be equal
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false; // If any elements are different, the arrays aren't equal
    }
  }

  return true; // If no differences found, the arrays are equal
}

function tail(arr) {
  if (arr.length <= 1) {
    return []; // Return an empty array for arrays with one or zero elements
  }

  // Return a new array containing all elements except the first one
  return arr.slice(1);
}

// Test cases
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(eqArrays(result, ["Lighthouse", "Labs"]), true); // Should pass
