
// Book Class

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// Book Array

const myLibrary = [];

function addBookToLibrary(book) {
  if (myLibrary.some((book) => book.title === newBook.title)) return false;
  myLibrary.push(book);
  saveLocal();
}

function removeFromLibrary(bookTitle) {
  myLibrary = myLibrary.filter((book) => book.title !== bookTitle);
  saveLocal();
}

// Books grid.

function display(library) {
  library.forEach(element => {
    const container = document.querySelector('section');
    const card = document.createElement('div');
    card.className = 'card mt-5 rounded shadow-md flex flex-col items-center mx-auto h-2/3';
    const title = document.createElement('h1');
    title.className = 'bg-gray-900 rounded-t text-white text-center font-bold w-full border-b-2 border-white';
    title.textContent = element.title;
    const img = document.createElement('img');
    img.className = 'w-full h-1/2 border-black border-b-2'
    img.src = 'https://picsum.photos/100/100?random1';
    const author = document.createElement('p');
    author.textContent = element.author;    
    const pages = document.createElement('p');
    pages.textContent = element.pages;
    const read = document.createElement('p');
    read.className = 'readed'
    read.textContent = element.read;
    const markAs = document.createElement('button');
    markAs.textContent = 'Did you read it?';
    markAs.className = 'px-2 py-1 border border-black rounded bg-green-500'
    container.appendChild(card);
    card.appendChild(title);
    card.appendChild(img);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(read);
    card.appendChild(markAs);
  })
}

display(myLibrary)

// Modal functions.

let modal = document.getElementById('modal');
let btn = document.getElementById('btn');
let span = document.getElementsByClassName("close")[0];

const form = document.querySelector(".js-popup-form");
form.addEventListener("submit", addBook);


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

const addBtn = document.querySelector('#addB');

btn.addEventListener('click', addNewBook());

function addNewBook() {
  let title = document.getElementById('title')
  let author = document.getElementById('title')
  let pages = document.getElementById('title')
  let read = document.getElementById('title')
  let book = new Book(title, author, pages, read);
  addBookToLibrary(book);
  localStorage.setItem(book);
}

// Local Storage

function saveLocal() {
  localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
}


const csDestyled = new Book('Computer Science Destiled', 'Wladston Ferreira Filho', 165, true);
const hpOne = new Book('Harry Potter and The Philosopher Stone', 'JK Rowlling', 150, true);
const hpTwo = new Book('Harry Potter and The Chamber of Secrets', 'JK Rowlling', 250, true);
const hpThree = new Book('Harry Potter and The Azkaban Prisioner', 'JK Rowlling', 350, true);

addBookToLibrary(csDestyled);
addBookToLibrary(hpOne);
addBookToLibrary(hpTwo);
addBookToLibrary(hpThree);
