var helper = require('./test-helper')

/* ---------------------- EXERCISE 1 ---------------------- */
// Define a function to list the properties of a JavaScript object. Go to the editor

function listProperties() {

}

// helper.test(listProperties({name: 'Tom Hanks'}), 'name')
// helper.test(listProperties({name: 'Tom Hanks', age: 50, rollno: 12}), 'name age rollno')

// Sample Output: name,sclass,rollno

/* ---------------------- EXERCISE 2 ---------------------- */

var books = [ 
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        isAvailable: true
    },
    {
        author: 'JRR Tolkkien',
        title: 'Lord of the Rings',
        isAvailable: true
    },
    {
        author: 'JK Rowling',
        title:  'Harry Potter: The Prisoner of Azkaban', 
        isAvailable: false
    }
 ]

// 2.1 Define a function listTitles(booksArray) that takes in an array of book objects and returns an array of titles (strings)
function listTitles(booksArray) {

}

// helper.test(listTitles(books), ['The Road Ahead', 'Lord of the Rings', 'Harry Potter: The Prisoner of Azkaban'])

// 2.2 Define a function listAuthors(booksArray) that takes in an array of book objects and returns an array of authors (strings)

function listAuthors(booksArray) {
    
}

// helper.test(listTitles(books), ['Bill Gates', 'JRR Tolkkien', 'JK Rowling'])

// 2.3 Define a more general function listValues(booksArray, key) that takes in an array of book objects and returns an array of authors (strings)

function listValues(booksArray, key) {

}

// helper.test(listValues(books, 'author'), ['Bill Gates', 'JRR Tolkkien', 'JK Rowling'])
// helper.test(listValues(books, 'title'), ['The Road Ahead', 'Lord of the Rings', 'Harry Potter: The Prisoner of Azkaban'])

// 2.4 Define a function getAvailableBooks(booksArray) that returns a list of available books


// helper.test(getAvailableBooks(books), ['The Road Ahead', 'Lord of the Rings'])

/* ---------------------- EXERCISE 3 ---------------------- */
/* 3.1 Define an object named fluffycat with the following properties/methods:
    - name: fluffy
    - type: pet
    - makeSound() // return 'meow!'
    - introduceSelf() // return 'meow! my name is fluffy'
*/

helper.test(fluffycat.name, 'fluffy')
helper.test(fluffycat.type, 'pet')
helper.test(fluffycat.makeSound(), 'meow!')
helper.test(fluffycat.introduceSelf(), 'meow! my name is fluffy')

