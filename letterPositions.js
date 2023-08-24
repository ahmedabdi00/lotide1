const letterPositions = function (sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    const character = sentence[i]
    if (character !== ' ') {
      if (results[character]) {
        results[character].push(i)

      } else {
        results[character] = [i];
      }
    }
  }
  return results;
};

// Test the letterPositions function with the input "lighthouse in the house"
const inputSentence = "lighthouse in the house";
const positions = letterPositions(inputSentence);

// Display the results
console.log(positions);



// { 
//   l: [0],
//   i: [1, 11],
//   g: [2],
//   h: [3, 5, 15, 18],
//   t: [4, 14],
//   o: [6, 19],
//   u: [7, 20],
//   s: [8, 21],
//   e: [9, 16, 22],
//   n: [12]
// }
