var assertEquals = require("./assert-helper");

/* ---------------------- EXERCISE 0 ---------------------- */
// define a function that takes in array of strings with every element
// converted to uppercase
function convertToUpperCase(array) {
  return array.map(string => string.toUpperCase());
}

// Assertions (do not change)
assertEquals(convertToUpperCase(["hello"]), ["HELLO"]);
assertEquals(convertToUpperCase(["hello", "gOOdBYE"]), ["HELLO", "GOODBYE"]);


/* ---------------------- EXERCISE 1 ---------------------- */
function multiplyBy10(array) {
  return array.map(number => number * 10);
}

// Assertions (do not change)
assertEquals(multiplyBy10([1, 2]), [10, 20]);
assertEquals(multiplyBy10([3, 5, 7]), [30, 50, 70]);
assertEquals(multiplyBy10([-1, 0, 1]), [-10, 0, 10]);

/* ---------------------- EXERCISE 2 ---------------------- */
// define a function that takes in an array objects and returns only an array
// of strings of the name field

function getName(object) {
  return object.name;
}

function onlyNames(array) {
  return array.map(getName);
}

// Assertions (do not change)
var input = [
  {
    name: "homer",
    favorite: "donuts"
  },
  {
    name: "marge",
    favorite: "family"
  },
  {
    name: "lisa",
    favorite: "school"
  }
];

assertEquals(onlyNames(input), ["homer", "marge", "lisa"]);

/* ---------------------- EXERCISE 3 ---------------------- */
// define a function that removes any non-vowel character from words in an array

function isVowel(character) {
	const vowels = ['a', 'e', 'i', 'o', 'u'];
	return vowels.indexOf(character.toLowerCase()) > -1;
}

function filterVowels(string) {
  return string.split('').filter(isVowel).join('');
}

// An alternative filter function using string.replace and regular expressions
//
// function filterVowelsUsingRegex(string) {
//   return string.replace(/[^aeiou]/gi, '');
// }

function keepOnlyVowels(array) {
  return array.map(filterVowels);
}

// Assertions (do not change)
assertEquals(keepOnlyVowels(["abc"]), ["a"]);
assertEquals(keepOnlyVowels(["exceptional"]), ["eeioa"]);
assertEquals(keepOnlyVowels(["average", "exceptional", "amazing"]), [
  "aeae",
  "eeioa",
  "aai"
]);
