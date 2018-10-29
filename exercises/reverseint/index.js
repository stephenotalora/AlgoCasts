// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

const DECIMAL = 10;

// constime time
function reverseInt(n) {
  let result = 0;
  let input = n < 0 ? n * -1 : n;

  while (input) {
    result = (result + (input % DECIMAL) / DECIMAL) * DECIMAL;
    input = Math.floor(input / DECIMAL);
  }

  return n < 0 ? result * -1 : result;
}

// results from example:
// console.log(reverseInt(15));
// console.log(reverseInt(981));
// console.log(reverseInt(500));
// console.log(reverseInt(-51));
// console.log(reverseInt(-90));

module.exports = { reverseInt };
