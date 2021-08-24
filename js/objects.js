"use strict";

/**
 * TODO:
 * Create an object with firstName and lastName properties that are strings
 * with your first and last name. Store this object in a variable named
 * `person`.
 *
 * Example:
 *  > console.log(person.firstName) // "Rick"
 *  > console.log(person.lastName) // "Sanchez"
 */
let person = {
    firstName: 'Jackie',
    lastName: 'Dallas'
};


/**
 * TODO:
 * Add a sayHello method to the person object that returns a greeting using
 * the firstName and lastName properties.
 * console.log the returned message to check your work
 *
 * Example
 * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
 */

person.sayHello = function (){
    alert("Hello from " + this.firstName + " " + this.lastName + "!")
    console.log("Hello from " + this.firstName + " " + this.lastName + "!")
}

person.sayHello();

/** TODO:
 * HEB has an offer for the shoppers that buy products amounting to
 * more than $200. If a shopper spends more than $200, they get a 12%
 * discount. Write a JS program, using conditionals, that logs to the
 * browser, how much Ryan, Cameron and George need to pay. We know that
 * Cameron bought $180, Ryan $250 and George $320. Your program will have to
 * display a line with the name of the person, the amount before the
 * discount, the discount, if any, and the amount after the discount.
 *
 * Uncomment the lines below to create an array of objects where each object
 * represents one shopper. Use a foreach loop to iterate through the array,
 * and console.log the relevant messages for each person
 */

var shoppers = [
    {name: 'Cameron', amount: 180},
    {name: 'Ryan', amount: 250},
    {name: 'George', amount: 320}
];

function amountWithDiscount(amount){
    return shopper.amount - (shopper.amount * (12 / 100));
}

shoppers.forEach(function (shopper) {
    if(shopper.amount < 200){
        console.log(shopper.name + " only spent " + shopper.amount + ". He does not qualify for a discount. His final total is " + shopper.amount + ".");
    } else{
        console.log(shopper.name + " spent $" + shopper.amount + ". He qualifies for the discount. His final total is " + (shopper.amount - (shopper.amount * (12 / 100))) + ".")
    }
})

/** TODO:
 * Create an array of objects that represent books and store it in a
 * variable named `books`. Each object should have a title and an author
 * property. The author property should be an object with properties
 * `firstName` and `lastName`. Be creative and add at least 5 books to the
 * array
 *
 * Example:
 * > console.log(books[0].title) // "The Salmon of Doubt"
 * > console.log(books[0].author.firstName) // "Douglas"
 * > console.log(books[0].author.lastName) // "Adams"
 */

var book1 = {
    title: "The Autobiography of Malcolm X",
    author: {
        firstName: "Alex",
        lastName: "Haley"
    },
    yearPublished: 1965
}
var book2 = {
    title: "Pimp: The Story of My Life",
    author: {
        firstName: "Iceberg",
        lastName: "Slim"
    },
    yearPublished: 1967
}
var book3 = {
    title: "The Art of War",
    author: {
        firstName: "Sun",
        lastName: "Tzu"
    },
    yearPublished: '5th Century BC'
}
var book4 = {
    title: "Clean Code",
    author: {
        firstName: "Robert",
        lastName: "Martin"
    },
    yearPublished: 2008
}
var book5 = {
    title: "Bullwhip Days: The Slaves Remember",
    author: {
        firstName: "James",
        lastName: "Mellon"
    },
    yearPublished: 2001
}

var books = [book1, book2, book3, book4, book5];

console.log(books[0].title);
console.log(books[0].yearPublished)
console.log(books[0].author)
console.log("-------------")

/**
 * TODO:
 * Loop through the books array and output the following information about
 * each book:
 * - the book number (use the index of the book in the array)
 * - the book title
 * - author's full name (first name + last name)
 *
 * Example Console Output:
 *
 *      Book # 1
 *      Title: The Salmon of Doubt
 *      Author: Douglas Adams
 *      ---
 *      Book # 2
 *      Title: Walkaway
 *      Author: Cory Doctorow
 *      ---
 *      Book # 3
 *      Title: A Brief History of Time
 *      Author: Stephen Hawking
 *      ---
 *      ...
 */


books.forEach(function (book, index) {
    if (index < books.length) {
        console.log("Book No. " + (index + 1));
        console.log("Title: " + book.title);
        console.log("Author: " + book.author.firstName + " " + book.author.lastName);
        console.log("Year Published: " + book.yearPublished);
        console.log("----------")
    }
})



/**
 * Bonus:
 * - Create a function named `createBook` that accepts a title and author
 *   name and returns a book object with the properties described
 *   previously. Refactor your code that creates the books array to instead
 *   use your function.
 * - Create a function named `showBookInfo` that accepts a book object and
 *   outputs the information described above. Refactor your loop to use your
 *   `showBookInfo` function.
 */
// Not right, still working.
function createBook(title, author){
    if(title === books.title && author === books.author){
        console.log(books.yearPublished);
    }
}
createBook('Clean Code', 'Robert Martin')
