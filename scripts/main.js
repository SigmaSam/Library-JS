let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function addBookToLibrary(book) {
    myLibrary.push(book)
}

function allBooks(arg) {
    arg.forEach(element => {
        if(read) {
            read = 'readed'
        } else {
            read = 'no read yet'
        }
        return title + ', ' + author+ ', ' + pages + ' pages, ' + read         
    });
}

let csDestyled = new Book('Computer Science Destiled', 'Wladston Ferreira Filho', 165, true);
let hpOne = new Book('Harry Potter and The Philosopher Stone', 'JK Rowlling', 150, true);
let hpTwo = new Book('Harry Potter and The Chamber of Secrets', 'JK Rowlling', 250, true);
let hpThree = new Book('Harry Potter and The Azkaban Prisioner', 'JK Rowlling', 350, true);

addBookToLibrary(csDestyled);
addBookToLibrary(hpOne);
addBookToLibrary(hpTwo);
addBookToLibrary(hpThree);

console.log(allBooks(myLibrary))

