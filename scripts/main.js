const myLibrary = [];

function Book(title, img, author, pages, read) {
  this.title = title;
  this.img = img;
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

function display(library) {
  allBooks(library);
  library.forEach(element => {
    const container = document.querySelector('section');
    const card = document.createElement('div');
    card.className = 'card mt-5 rounded shadow-md flex flex-col items-center mx-auto';
    const title = document.createElement('h1');
    title.className = 'bg-gray-900 rounded-t text-white text-center font-bold w-full border-b-2 border-white';
    title.textContent = element.title;
    const img = document.createElement('img');
    img.className = 'w-full h-1/2 border-black border-b-2'
    img.src = 'https://picsum.photos/100/100?random1'
    const author = document.createElement('p');
    author.textContent = element.author;    
    const pages = document.createElement('p');
    pages.textContent = element.pages;
    const read = document.createElement('p');
    read.textContent = element.read;
    container.appendChild(card);
    card.appendChild(title);
    card.appendChild(img);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(read);
  })
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

display(myLibrary)

let modal = document.getElementById('modal');
let btn = document.getElementById('btn');
let span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

