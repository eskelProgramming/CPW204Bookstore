class Book {
}
let myBook = new Book();
myBook.isbn = "123";
myBook.price = 9.99;
myBook.title = "Programming for Beginners";
myBook.releaseDate = new Date(2023, 9, 8);
console.log(myBook);
window.onload = function () {
    let addBookBtn = document.querySelector("#add-book");
    addBookBtn.onclick = processBook;
};
function processBook() {
    let userBook = getBook();
    if (userBook != null) {
        addBook(userBook);
    }
}
function getBook() {
}
function addBook(b) {
}
