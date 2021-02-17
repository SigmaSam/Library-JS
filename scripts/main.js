
// Book Class

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// Book Array

let myLibrary = []

if (localStorage.getItem('myLibrary')) {
  myLibrary = JSON.parse(localStorage.getItem('myLibrary'));
}

function addBookToLibrary(newBook) {
  // if (myLibrary.some((book) => book.title === newBook.title)) return false;
  myLibrary.push(newBook);
  saveLocal();
}

function removeFromLibrary(bookTitle) {
  myLibrary = myLibrary.filter((book) => book.title !== bookTitle);
  saveLocal();
  location.reload();
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
    const del = document.createElement('button');
    del.textContent = 'Delete';
    del.className = 'px-2 py-1 border border-black rounded bg-green-500 delete'
    container.appendChild(card);
    card.appendChild(title);
    card.appendChild(img);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(read);
    card.appendChild(markAs);
    card.appendChild(del);
    del.addEventListener('click', remove);
    function remove(){
      removeFromLibrary(element.title);
    }
    markAs.addEventListener('click', change);
    function change(){
      if (element.read == true) {
        element.read = false;
      } else {
        element.read = true;
      }
      saveLocal();
      location.reload();
    }
  })
}

// Modal functions.

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

function addNewBook() {
  let inputs = document.getElementsByTagName('input');
  let title = inputs[0].value
  let author = inputs[1].value;
  let pages = inputs[2].value;
  let read = inputs[3].checked;
  let book = new Book(title, author, pages, read);
  addBookToLibrary(book);
}

const addBtn = document.querySelector('#addB');
addBtn.addEventListener('click', addNewBook);

// Local Storage

function saveLocal() {
  localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
}

display(myLibrary);
