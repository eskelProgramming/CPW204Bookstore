/**
 * Represents a individual book that can be purchased
 */
class Book {
    /**
     * The 13 digit ISBN number
     */
    isbn : string;

    /**
     * The title of the book
     */
    title : string;

    /**
     * The retail price of the individual book
     */
    price : number;

    /**
     * The date the book was first published. This could 
     * be a future date, if the book is not yet released.
     */
    releaseDate : Date;
}

// Book object test code
let myBook = new Book();
myBook.isbn = "123";
myBook.price = 9.99;
myBook.title = "Programming for Beginners";
myBook.releaseDate = new Date(2023, 9, 8); // month is 0-indexed

console.log(myBook);


window.onload = function() {
    // Set up the button click for add book form
    let addBookBtn = document.querySelector("#add-book") as HTMLButtonElement;
    addBookBtn.onclick = processBook;
}

function processBook() {
    let userBook = getBook();
    if(userBook != null) {
        addBook(userBook);
    }
}

/**
 * This function will retrieve all the book data
 * from the HTML page. If all the data is valid
 * a Book object will be returned. If any data is 
 * invalid, null will be returned and error messages
 * will be shown on the webpage.
 */
function getBook():Book {
    // Clear all error messages
    clearAllErrorMessages();

    // Get all inputs
    let isbnTextBox = document.querySelector("#isbn") as HTMLInputElement;
    let titleTextBox = document.querySelector("#title") as HTMLInputElement;
    let priceTextBox = document.querySelector("#price") as HTMLInputElement;
    let releaseDateTextBox = document.querySelector("#release-date") as HTMLInputElement;

    // Validate data
    let isValidData:boolean = true;

    // Validate the ISBN
    let isbn:string = isbnTextBox.value;
    if(!isValidISBN13(isbn)) {
        isValidData = false;
        isbnTextBox.nextElementSibling.textContent = "ISBN must be 13 digits only";
    }

    // Validate the title
    let title:string = titleTextBox.value;
    if (title.trim() == "") {
        isValidData = false;
        titleTextBox.nextElementSibling.textContent = "You must provide a title";
    }

    // Validate the price
    let price:number = parseFloat(priceTextBox.value);
    if (isNaN(price) || price < 0) {
        isValidData = false;
        priceTextBox.nextElementSibling.textContent = "Price must be a positive number";
    }

    // Validate the release date
    let releaseDate = releaseDateTextBox.value;
    let releaseDateCheck = Date.parse(releaseDate); // if invalid, returns NaN
    if (isNaN(releaseDateCheck)) {
        isValidData = false;
        releaseDateTextBox.nextElementSibling.textContent = "Release date must be a valid date";
    }

    if (isValidData) {
        // Create and populate a Book object if all data is valid
        let addedBook = new Book();
        addedBook.isbn = isbn;
        addedBook.title = title;
        addedBook.price = price;
        addedBook.releaseDate = new Date(releaseDate);

        return addedBook;
    }
    return null; // Return null if any data is invalid
}

/**
 * Adds a Book object to web storage. Assumes
 * all data is valid.
 * @param b The Book containing valid data to be added
 */
function addBook(b:Book):void {
    alert("Adding book data was valid, book added");
    console.log(b);
}

/**
 * This validates an ISBN 13 number. Returns true
 * is the ISBN only consists of 13 digits.
 * @param isbn The ISBN number to validate
 * @returns True if the ISBN is valid, false otherwise
 */
function isValidISBN13(data:string):boolean {
    let regex = /^\d{13}$/; // match 13 digits exactly
    return regex.test(data);
}

/**
 * Clears all the validation error messages spans
 * in the form.
 */
function clearAllErrorMessages() {
    // Get all the error spans
    let allErrorMessages = document.querySelectorAll("form span.error-msg");

    // Loop through each span and set the text content to an empty string
    allErrorMessages.forEach(span => span.textContent = "");
}