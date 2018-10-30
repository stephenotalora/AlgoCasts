// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// O(n) mutable solution
// function chunk(array, size) {
//   const result = [];

//   while(array.length) {
//     result.push(array.splice(0, size));
//   }

//   return result;
// }

// O(n) immutable solution
function chunk(array, size) {
  const result = [];
  let index = 0;

  while (index < array.length) {
    result.push(array.slice(index, index + size));
    index += size;
  }

  return result;
}

// O(n) solution
// function chunk(array, size) {
//   const result = [];
//   const rem = array.length % size;

//   let chunk = [];
//   for (let i = 0; i < array.length; ++i) {
//     chunk.push(array[i]);
    
//     if (chunk.length === size || 
//       (i + 1 >= array.length - rem && chunk.length === rem)) {
//       result.push(chunk);
//       chunk = [];
//     }
//   }

//   return result;
// }

// tests from example
// console.log(chunk([1, 2, 3, 4], 2));
// console.log(chunk([1, 2, 3, 4, 5], 2));
// console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3));
// console.log(chunk([1, 2, 3, 4, 5], 4));
// console.log(chunk([1, 2, 3, 4, 5], 10));

module.exports = { chunk };
