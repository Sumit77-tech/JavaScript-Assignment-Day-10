function createBook(title, author) {
    return {
        title: title,
        author: author,

        printInfo: function() {
            console.log("Title: "+ this.title + ", Author: " + this.author);
        }
    };
}
const book1 = createBook("To kill a Mockingbird", "Harper Lee");
book1.printInfo();

const book2 = createBook("1984", "George Orwell");
book2.printInfo();