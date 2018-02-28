var assertEquals = require("./test-helper");
/* ---------------------- EXERCISE 4 ---------------------- */
// Write a Javascript function to compute the union of two arrays. the returned array should be sorted in ascending order (Sample input: union([1, 2, 3], [100, 2, 1, 10]), expected output: [1, 2, 3, 10, 100])
function sortedUnion(arr1, arr2) {
  var array = arr1.concat(arr2);
  array.sort(function(a, b) {
    return a - b;
  });

  return removeDuplicates(array);
}

function removeDuplicates(array) {
  var result = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== array[i + 1]) {
      result.push(array[i]);
    }
  }
  return result;
}

assertEquals(sortedUnion([1], [2]), [1, 2]);
assertEquals(sortedUnion([1, 3], [2]), [1, 2, 3]);
assertEquals(sortedUnion([1, 3], [11, 2]), [1, 2, 3, 11]);
assertEquals(sortedUnion([1, 3, 2], [11, 2]), [1, 2, 3, 11]);
assertEquals(sortedUnion([1, 3, 2], []), [1, 2, 3]);
