class Book {
}
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
    clearAllErrorMessages();
    let isbnTextBox = document.querySelector("#isbn");
    let titleTextBox = document.querySelector("#title");
    let priceTextBox = document.querySelector("#price");
    let releaseDateTextBox = document.querySelector("#release-date");
    let isValidData = true;
    let isbn = isbnTextBox.value;
    if (!isValidISBN13(isbn)) {
        isValidData = false;
        isbnTextBox.nextElementSibling.textContent = "ISBN must be 13 digits only";
    }
    let title = titleTextBox.value;
    if (title.trim() == "") {
        isValidData = false;
        titleTextBox.nextElementSibling.textContent = "You must provide a title";
    }
    let price = parseFloat(priceTextBox.value);
    if (isNaN(price) || price < 0) {
        isValidData = false;
        priceTextBox.nextElementSibling.textContent = "Price must be a positive number";
    }
    let releaseDate = releaseDateTextBox.value;
    let releaseDateCheck = Date.parse(releaseDate);
    if (isNaN(releaseDateCheck)) {
        isValidData = false;
        releaseDateTextBox.nextElementSibling.textContent = "Release date must be a valid date";
    }
    if (isValidData) {
        let addedBook = new Book();
        addedBook.isbn = isbn;
        addedBook.title = title;
        addedBook.price = price;
        const dateParts = releaseDate.split('-');
        const year = parseInt(dateParts[0]);
        const month = parseInt(dateParts[1]) - 1;
        const day = parseInt(dateParts[2]);
        const correctDate = new Date(year, month, day);
        addedBook.releaseDate = correctDate;
        return addedBook;
    }
    return null;
}
function addBook(b) {
    console.log(b);
    let bookDiv = document.createElement("div");
    let titleHeading = document.createElement("h2");
    titleHeading.textContent = `${b.title} : ${b.isbn}`;
    bookDiv.appendChild(titleHeading);
    let bookDescription = document.createElement("p");
    const currencyFormatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
    });
    let formattedPrice = currencyFormatter.format(b.price);
    bookDescription.textContent = `This book was released on ${b.releaseDate} and costs ${formattedPrice}`;
    bookDiv.appendChild(bookDescription);
    document.querySelector("#book-display").appendChild(bookDiv);
}
function isValidISBN13(data) {
    let regex = /^\d{13}$/;
    return regex.test(data);
}
function clearAllErrorMessages() {
    let allErrorMessages = document.querySelectorAll("form span.error-msg");
    allErrorMessages.forEach(span => span.textContent = "");
}
