var assertEquals = require("./assert-helper");

/* ---------------------- EXERCISE 0 ---------------------- */
// define a function that takes in an array of numbers and outputs an array of the numbers that are even
function keepEvenNumbers(numbers) {

}

// Assertions (do not change)
assertEquals(keepEvenNumbers([1, 2, 3, 4]), [2, 4]);
assertEquals(keepEvenNumbers([10, 15, 20, 25, 30, 35]), [10, 20, 30]);

/* ---------------------- EXERCISE 1 ---------------------- */
// define a function that takes in an array of strings and outputs an array of single-word strings (i.e. it has no spaces)
function keepSingleWords(words) {

}

// Assertions (do not change)
assertEquals(keepSingleWords(["hello", "hello world"]), ["hello"]);
assertEquals(keepSingleWords(["hello world", "ok", "bye"]), ["ok", "bye"]);


/* ---------------------- EXERCISE 2 ---------------------- */
// define a function that takes in (i) an array of people and (ii) an integer (ageLimit). 
// It should return an array of the names of the people which are above the age limit
// hint: you need to apply filter and map
function filterUnderagedPeople(people, ageLimit) {
  
}

// Assertions (do not change)
const people = [
  { name: "bob", age: 18 },
  { name: "jane", age: 25 },
  { name: "tim", age: 40 }
];

assertEquals(filterUnderagedPeople(people, 20), ["jane", "tim"]);

assertEquals(filterUnderagedPeople(people, 26), ["tim"]);

/* ---------------------- EXERCISE 3 (BONUS) ---------------------- */
// define a function that takes in (i) an email domain (e.g. 'yahoo.com' or 'gmail.com') and (ii) any number of email strings
// It should return an array of emails that match the domain
// hint: you need to use the ...rest operator in the function's parameters

function filterEmailsByDomain() {

}

let actual = filterEmailsByDomain(
  "yahoo.com",
  "bob@gmail.com",
  "jane@yahoo.com",
  "alice@yahoo.com"
);
let expected = ["jane@yahoo.com", "alice@yahoo.com"];
assertEquals(actual, expected);

actual = filterEmailsByDomain(
  "gmail.com",
  "bob@gmail.com",
  "jane@yahoo.com",
  "alice@yahoo.com"
);
expected = ["bob@gmail.com"];
assertEquals(actual, expected);
