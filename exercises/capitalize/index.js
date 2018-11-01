// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  let result = str.charAt(0).toUpperCase();
  
  for (let i = 1; i < str.length; ++i) {
    result += str.charAt(i - 1) === ' ' ? 
      str.charAt(i).toUpperCase() : 
      str.charAt(i).toLowerCase()
  }

  return result;
}

// function capitalize(str) {
//   return str.split(' ').map((word) => (
//     `${word.charAt(0).toUpperCase()}${word.slice(1).toLowerCase()}`
//   )).join(' ');
// }

// console.log(capitalize('a short sentence'));
// console.log(capitalize('a lazy fox'));
// console.log(capitalize('look, it is working!'));

module.exports = { capitalize };
