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
 * This function will retrive all the book data
 * from the HTML page. If all the data is valid
 * a Book object will be returned. If any data is 
 * invalid, null will be returned.
 */
function getBook():Book {

}

/**
 * Adds a Book object to web storage. Assumes
 * all data is valid.
 * @param b The Book containing valid data to be added
 */
function addBook(b:Book):void {
    
}