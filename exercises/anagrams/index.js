// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

const compare = (a, b) => a > b;

function format(str) {
  if (!(str && str.length)) return '';
  return str.replace(/[^\w]/g, '')
    .toLowerCase().split('')
    .sort().join();
}

function anagrams(stringA, stringB) {
  return format(stringA) === format(stringB);
}

// function charCount (str) {
//   const counts = {};
//   const targetStr = str.replace(/[^\w]/g, '').toLowerCase();

//   for (const char of str) {
//     counts[char] = counts[char] + 1 || 1;
//   }

//   return counts;
// }

// O(n) run time, exponential complexity
// function anagrams(stringA, stringB) {
//   const setA = charCount(stringA);
//   const setB = charCount(stringB);
  
//   if (Object.keys(setA).length !== Object.keys(setB).length) {
//     return false;
//   }

//   for (const char in setA) {
//     if (!(setB[char] && setB[char] === setA[char])) return false;
//   }

//   return true;
// }

// test from examples
// console.log(anagrams('rail safety', 'fairy tales'));
// console.log(anagrams('RAIL! SAFETY!', 'fairy tales'));
// console.log(anagrams('Hi there', 'Bye there'));

module.exports = { anagrams };
