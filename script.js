const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read  = read;
    this.info = function () {
        return `${title} by ${author}, ${pages} pages, ${read}`;
    }
   
}

function addBookToLibrary() {
    let title = prompt('title');
    let author = prompt('author');
    let pages = prompt('pages');
    let read = prompt('read');
    console.log(title + author + pages + read);
    if (title && author && pages && read) {
        
        myLibrary.push(new Book(title, author, pages, read));
        console.log('executing');
    }
}

addBookToLibrary();

console.log(myLibrary[0]);

const cardContainer = document.querySelector('.card_container');
const add = document.querySelector('#add');

function render (array) {
    while (cardContainer.firstChild) {
        console.log('x');
        cardContainer.removeChild(cardContainer.firstChild);
    }
    for (let i = 0; i < array.length; i++) {
      let myDiv = document.createElement('div');
      myDiv.className = 'card';
      myDiv.append(document.createTextNode(myLibrary[i].title));
      myDiv.append(document.createElement('br'));
      myDiv.append(document.createTextNode('by ' + myLibrary[i].author));
      myDiv.append(document.createElement('br'));
      myDiv.append(document.createTextNode(myLibrary[i].pages + ' pages'));
      cardContainer.append(myDiv);
    }
}

add.onclick=function(){
    addBookToLibrary();
    render(myLibrary);
}



render(myLibrary);