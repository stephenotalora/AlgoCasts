// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function charCount (str) {
  const counts = {};

  for (const char of str) {
    if (!(char >= 'a' && char <= 'z' || char >= 'A' && char <= 'Z')) continue;
    counts[char.toLowerCase()] = counts[char.toLowerCase()] + 1 || 1;
  }

  return counts;
}

function anagrams(stringA, stringB) {
  const setA = charCount(stringA);
  const setB = charCount(stringB);
  const set = stringA.length >= stringB.length ? setA : setB;

  for (const char in set) {
    if (!(setB[char] && setB[char] === setA[char])) return false;
  }

  return true;
}

// test from examples
// console.log(anagrams('rail safety', 'fairy tales'));
// console.log(anagrams('RAIL! SAFETY!', 'fairy tales'));
// console.log(anagrams('Hi there', 'Bye there'));

module.exports = { anagrams };
