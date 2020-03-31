const assertEquals = require("./assert-helper");

/* ---------------------- EXERCISE 0 ---------------------- */
// define a function that returns the smallest number using sort

function getSmallest(numbers) {

  
}

// Assertions (do not change)
assertEquals(getSmallest([1, 2, 3, 4]), 1);
assertEquals(getSmallest([4, 3, 2, 1]), 1);

/* ---------------------- EXERCISE 1 ---------------------- */
// Define a function that returns the sum of an array
function sum(array) {

}

// Assertions (do not change)
assertEquals(sum([1, 2]), 3);
assertEquals(sum([1, 2, 3, 4]), 10);

/* ---------------------- EXERCISE 2 ---------------------- */
// Define a function that returns an array of even numbers
function evenNumbersOnly(array) {

}

// Assertions (do not change)
assertEquals(evenNumbersOnly([1, 2, 3, 4]), [2, 4]);
assertEquals(evenNumbersOnly([10, 11, 12]), [10, 12]);

/* ---------------------- EXERCISE 3 ---------------------- */
// Define a function that returns the sum of even numbers in the array
// hint: reuse the 2 functions that you defined earlier.
function sumEvenNumbers(array) {

}

// Assertions (do not change)
assertEquals(sumEvenNumbers([1, 2, 3, 4]), 6);
assertEquals(sumEvenNumbers([10, 11, 12]), 22);

/* ---------------------- BONUS: EXERCISE 4 ---------------------- */
// Write a Javascript function to compute the union of two arrays. the returned array should be sorted in ascending order (Sample input: union([1, 2, 3], [100, 2, 1, 10]), expected output: [1, 2, 3, 10, 100])
function sortedUnion(arr1, arr2) {

}

// Assertions (do not change)
assertEquals(sortedUnion([1], [2]), [1, 2]);
assertEquals(sortedUnion([1, 3], [2]), [1, 2, 3]);
assertEquals(sortedUnion([1, 3], [11, 2]), [1, 2, 3, 11]);
