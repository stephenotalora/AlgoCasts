// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// O(n)
/*
function reverse(str) {
  if (!str) return str; 

  let reversed = '';

  for (const char of str) {
    reversed = char + reversed;
  }

  return reversed;
}

// O(n) time
function palindrome(str) {
  return reverse(str) === str;
}
*/

// constant time constant space complexity
function palindrome(str) {
  const len = str.length;
  let s = 0, e = len - 1;
  
  while(s < e) {
    if (str.charAt(s) !== str.charAt(e)) return false;
    ++s; --e;
  }

  return true;
}

// Test from example
// console.log(palindrome('abba'));
// console.log(palindrome('abcdefg'));

module.exports = { palindrome };
