// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// const isVowel = (char) => ['a', 'e', 'i', 'o', 'u'].includes(char.toLowerCase());

// function vowels(str) {
//   let count = 0; 

//   for (const char of str) {
//     if (isVowel(char)) ++count;
//   }

//   return count;
// }

function vowels(str) {
  return (str.match(/[aeiou]/gi) || []).length;
}

// tests from examples
// console.log(vowels('Hi There!'));
// console.log(vowels('Why do you ask?'));
// console.log(vowels('Why?'))

module.exports = { vowels };
