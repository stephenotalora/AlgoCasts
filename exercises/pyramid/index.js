// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
  const middle = Math.floor(n / 2);
  console.log(middle);

  for (let row = 0; row < n; ++row) {
    let result = '';

    for (let column = 0; column <= n; ++column) {
      if (column === middle) result += '#';
      else result += ' ';
    }

    console.log(result);
  }
}

pyramid(2);

module.exports = pyramid;
