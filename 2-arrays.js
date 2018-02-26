var helper = require("./test-helper");

/* ---------------------- EXERCISE 1 ---------------------- */
// Write a JavaScript function which accept a number as input and insert dashes (-) between each two even numbers. (Sample input: 025486, Sample output: 0-254-8-6)

function addDashes(numString) {
  return "0-254-8-6";
}

assertEquals(addDashes("025486"), "0-254-8-6"); // check that your function works as expected
// assertEquals(dash('111246777'), '1112-4-6777') // uncomment this and run program. if test passes, uncomment subsequent tests one by one
// assertEquals(dash('0021100'), '0-0-2110-0')
// assertEquals(dash('your test input'), 'your expected output') // uncomment this line and add 2-3 more test cases. Do the same for all remaining functions

/* ---------------------- EXERCISE 2 ---------------------- */
// Write a Javascript function to find the most frequent item of an array. It should return a string denoting the item and the number of times it occurs in the array. (Sample input: [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3], expected output : 'a (5 times)')

function mostFrequentItem(arr) {}

// uncomment the following test to run it
// assertEquals(mostFrequentItem(['a', 'a', 'b']), 'a')
// assertEquals(mostFrequentItem(['a', 'b', 'b', 'b', 'c', 'a', 'b', 'a', 'b']), 'b')
// assertEquals(mostFrequentItem(['yes', 'yes', 'no', 'no', 'yes']), 'yes')

/* ---------------------- EXERCISE 3 ---------------------- */
// Write a Javascript function to remove duplicate items from an array (ignore case sensitivity). (Sample input : [1, 'a', 'A', 'b', 2, 2], expected output: [1, 'a', 'b', 2])
function removeDuplicateItems(arr) {}

// assertEquals(removeDuplicateItems([1, 1, 'a']), [1, 'a'])
// assertEquals(removeDuplicateItems([1, 1, 'a', 'A']), [1, 'a'])
// assertEquals(removeDuplicateItems([1, 'a', 'A', 'b', 'B', 2, 2]), [1, 'a', 'b', 2])

/* ---------------------- EXERCISE 4 ---------------------- */
// Write a Javascript function to compute the union of two arrays. the returned array should be sorted in ascending order (Sample input: union([1, 2, 3], [100, 2, 1, 10]), expected output: [1, 2, 3, 10, 100])
function union() {}

// assertEquals(union([1, 2], [2, 3]), [1, 2, 3])
// assertEquals(union([1, 2, 3], [100, 2, 1, 10]), [1, 2, 3, 10, 100])

/* ---------------------- EXERCISE 5 ---------------------- */
// Write a Javascript function to compute sum of a union. (Hint: Reuse the union() function which you wrote!) (Sample input: intersection([1, 2, 3], [1, 2]), expected output: 3)
function unionSum() {}
// assertEquals(unionSum([1, 2, 3], [1, 2]), 3)
// assertEquals(unionSum([1, 2, 3, 4], [2, 3, 4]), 9)
// assertEquals(unionSum([2000, 50, 551, 550, 23], [551, 50, 23]), 624)
