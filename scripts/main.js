
// Book Class
let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// Local Storage

function saveLocal() {
  localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
}

// Book Array


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
  window.location.reload();
}

// Books grid.

function display(library) {
  library.forEach(element => {
    const container = document.querySelector('section');
    const card = document.createElement('div');
    card.className = 'card mt-5 rounded shadow-md flex flex-col items-center mx-auto';
    const title = document.createElement('h1');
    title.className = 'bg-gray-900 rounded-t text-white text-center font-bold w-full border-b-2 border-white';
    title.textContent = element.title;
    const img = document.createElement('img');
    img.className = 'w-full h-1/2 border-black border-b-2';
    img.src = 'https://picsum.photos/100/100?random1';
    const author = document.createElement('p');
    author.textContent = element.author;
    const pages = document.createElement('p');
    pages.textContent = `${element.pages} Pages`;
    const read = document.createElement('p');
    read.className = 'readed';
    read.textContent = element.read;
    const btnContainer = document.createElement('div');
    btnContainer.className = 'flex';
    const markAs = document.createElement('button');
    markAs.textContent = 'Readed?';
    markAs.className = 'px-2 py-1 border border-black rounded bg-green-500';
    const del = document.createElement('button');
    del.textContent = 'Delete';
    del.className = 'px-2 py-1 border border-black rounded bg-green-500 delete';
    container.appendChild(card);
    card.appendChild(title);
    card.appendChild(img);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(read);
    card.appendChild(btnContainer);
    btnContainer.appendChild(markAs);
    btnContainer.appendChild(del);

    function remove() {
      removeFromLibrary(element.title);
    }

    del.addEventListener('click', remove);

    function change() {
      if ((element.read === true) || (element.read === 'Read')) {
        element.read = 'Not Readed';
      } else {
        element.read = 'Read';
      }
      saveLocal();
      window.location.reload();
    }
    markAs.addEventListener('click', change);
  });
}

// Modal functions.

const modal = document.getElementById('modal');
const btn = document.getElementById('btn');
const span = document.getElementsByClassName('close')[0];
/*eslint-disable */
btn.onclick = function () {
  modal.style.display = 'block';
};

span.onclick = function () {
  modal.style.display = 'none';
};

window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};
/* eslint-enable */

function addNewBook() {
  const inputs = document.getElementsByTagName('input');
  const title = inputs[0].value;
  const author = inputs[1].value;
  const pages = inputs[2].value;
  let read = inputs[3].checked;
  read ? read = 'Read' : read = 'Not Read'; // eslint-disable-line no-unused-expressions
  const book = new Book(title, author, pages, read);
  addBookToLibrary(book);
}

const addBtn = document.querySelector('#addB');
addBtn.addEventListener('click', addNewBook);


display(myLibrary);
