// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// O(n)
function maxChar(str) {
  const set = {};

  for (const char of str) {
    if (set[char] >= 0) set[char] += 1;
    else set[char] = 1;
  }

  let result = '', reps = 0;
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
