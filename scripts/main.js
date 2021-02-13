const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function allBooks(arg) {
  arg.forEach(element => {
    if (element.read) {
      element.read = 'readed';
    } else {
      element.read = 'no read yet';
    }
    return `${element.title}, ${element.author}, ${element.pages}pages, ${element.read}`;
  });
}

const csDestyled = new Book('Computer Science Destiled', 'Wladston Ferreira Filho', 165, true);
const hpOne = new Book('Harry Potter and The Philosopher Stone', 'JK Rowlling', 150, true);
const hpTwo = new Book('Harry Potter and The Chamber of Secrets', 'JK Rowlling', 250, true);
const hpThree = new Book('Harry Potter and The Azkaban Prisioner', 'JK Rowlling', 350, true);

addBookToLibrary(csDestyled);
addBookToLibrary(hpOne);
addBookToLibrary(hpTwo);
addBookToLibrary(hpThree);

allBooks(myLibrary);

const library = document.createElement('div');
document.getElementsByTagName('body')[0].appendChild(library);
library.classList.add('flex', 'flex-row', 'min-h-full');