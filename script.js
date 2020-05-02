const myLibrary = [];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read  = false;
    this.info = function () {
        return `${title} by ${author}, ${pages} pages, ${read}`;
    }
   
}

function addBookToLibrary() {
    let title = prompt('title');
    let author = prompt('author');
    let pages = prompt('pages');
    console.log(title + author + pages);
    if (title && author && pages) {
        
        myLibrary.push(new Book(title, author, pages));
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
      cardContainer.append(myDiv);
      let info = document.createElement('div');
      info.className = 'card_info';
      myDiv.append(info);
      info.append(document.createTextNode(myLibrary[i].title));
      info.append(document.createElement('br'));
      info.append(document.createTextNode('by ' + myLibrary[i].author));
      info.append(document.createElement('br'));
      info.append(document.createTextNode(myLibrary[i].pages + ' pages'));
      let isRead = document.createElement('button');
      isRead.className = 'toggle';
      isRead.append(document.createTextNode('*'));
      myDiv.append(isRead);
      
      if (myLibrary[i].read == true) {
        myDiv.style.backgroundColor = '#c2ffee';
        myDiv.style.color = '#6d6d6d';
        isRead.style.backgroundColor = 'aquamarine';
        isRead.style.color = 'white'; 
        } else {
            myDiv.style.backgroundColor = 'aquamarine';
            myDiv.style.color = 'white';
            isRead.style.color = 'white';
            isRead.style.color = 'aquamarine';
        }


      isRead.addEventListener('click', function (){
        if (myLibrary[i].read == true) {
        this.parentElement.style.backgroundColor = 'aquamarine';
        this.parentElement.style.color = 'white';
        this.style.backgroundColor = 'white';
        this.style.color = 'aquamarine';
        myLibrary[i].read = false;    
        } else {
        this.parentElement.style.backgroundColor = '#c2ffee';
        this.parentElement.style.color = '#6d6d6d';
        this.style.backgroundColor = 'aquamarine';
        this.style.color = 'white'; 
        myLibrary[i].read = true;
        }
      })
    }
}

add.onclick=function(){
    addBookToLibrary();
    render(myLibrary);
}


render(myLibrary);