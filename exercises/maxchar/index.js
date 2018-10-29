// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// O(n)
function maxChar(str) {
  const set = {};
  
  let reps = 0;
  let result = '';

  for (const char of str) {
    set[char] = set[char] + 1 || 1;
  }

  for (const char in set) {
    if (set[char] > reps) {
      result = char;
      reps = set[char]
    }
  }

  return result;
}

// tests from examples
// console.log(maxChar("abcccccccd"));
// console.log(maxChar("apple 1231111"));

module.exports = { maxChar };
