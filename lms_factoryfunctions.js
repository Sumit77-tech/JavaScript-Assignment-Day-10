function createBook(title, author) {
    return {
        title: title,
        author: author,
        details() {
            return `Title: ${this.title}, Author: ${this.author}`;
        }
    };
}
function createLibrary() {
    let books = [];
    return {
        addBook(book) {
            books.push(book);
        },
        removeBookByTitle(title) {
            books = books.filter(book => book.title !== title);
        },
        listBooks() {
            if(books.length === 0) {
                console.log("No Books available.");
            } else {
                books.forEach(book => {
                    console.log(book.details());
                });
            }
        }
    };
}
const library = createLibrary();
const book1 = createBook("1984", "George Orwell");
const book2 = createBook("To kill a Mockingbird", "Harper Lee");
const book3 = createBook("The Great Gatsby", "F. Scott Fitzerald");

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

library.listBooks();

library.removeBookByTitle("1984");

library.listBooks();