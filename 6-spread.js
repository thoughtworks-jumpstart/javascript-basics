var assertEquals = require("./assert-helper");

/* ---------------------- EXERCISE 0 ---------------------- */
// define a function that returns the smallest number using spread
function getSmallest(numbers) {
  return Math.min(...numbers);
}
// Assertions (do not change)
assertEquals(getSmallest([1, 2, 3, 4]), 1);
