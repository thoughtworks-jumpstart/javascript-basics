const assertEquals = require("./assert-helper");
const assert = require('assert');

/* ---------------------- EXERCISE 1 ---------------------- */
// Define a function that returns 'hello world'
function hello() {
  return "hello world";
}


/* ---------------------- EXERCISE 2 ---------------------- */
// Define a function, greet(personName), that returns 'hello specificPersonName'. If no name is supplied, return 'hello world'
function greet(name) {

}

/* ---------------------- EXERCISE 3 ---------------------- */
// Define a function, add2Numbers(num1, num2), to return the sum of 2 values


/* ---------------------- EXERCISE 4 ---------------------- */
// Define a function, invertCase(someString), that returns the input string with its case inverted


assertEquals(hello(), "hello world");
assertEquals(greet("tom"), "hello tom");
assertEquals(greet(), "hello world");
assertEquals(add2Numbers(1, 1), 2);
assertEquals(add2Numbers(100, 1), 101);
assertEquals(invertCase("Hello"), "hELLO");
assertEquals(invertCase("hELLO wORLD"), "Hello World");
