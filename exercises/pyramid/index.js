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
  const maxColumns = n * 2 - 1;
  const middle = Math.floor(maxColumns / 2);

  for (let row = 0, filledColumns = 1; row < n; ++row, filledColumns += 2) {
    let result = '';

    for (let column = 0; column < maxColumns; ++column) {
      const total = Math.floor(filledColumns / 2);
      result += column >= middle - total && column <= middle + total ? '#' : ' ';
    }

    console.log(result);
  }
}

// test from excercises
// pyramid(1);
// pyramid(2);
// pyramid(3);

module.exports = { pyramid };
