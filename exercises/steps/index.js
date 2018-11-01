// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// function steps(n) {
//   for (let y = 0; y < n; ++y) {
//     let result = '';
    
//     for (let x = 0; x < n; ++x) {
//       result += x <= y ? '#' : ' ';
//     }

//     console.log(result);
//   }
// }

function steps(n, y = 0) {
  if (y === n) return;
  
  var result = '';
  for (let x = 0; x < n; ++x) {
    result += x <= y ? '#' : ' ';
  }

  console.log(result);
  steps(n, y + 1);
}

// test from example
// steps(4);
// steps(3);
// steps(4);

module.exports = { steps };
