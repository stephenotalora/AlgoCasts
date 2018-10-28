// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'elppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// O(n) time
function reverse(str) {
  let result = '';

  for (let char of str) {
    result = char + result;
  }

  return result;
}

// using javascript functions
// function reverse(str) {
//   return str.split('').reverse().join('');
// }

// Local tests from examples
// console.log(reverse('apple'));
// console.log(reverse('hello'));
// console.log(reverse('Greetins!'));

module.exports = { reverse };
