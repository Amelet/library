let booksList = [];
let title;
let author;
let pages;
let haveRead;
let maxID = 0;
let id;


function addBook (element) {
    id = element.id
    let ttl = element.title
    let ath = element.author
    let pgs = element.pages
    let hvR = element.haveRead

    let div = document.createElement('div');
    div.innerHTML = '<button class="btn" value='+id+' onclick="deleteBook(this.value)"><i class="fa fa-trash"></i></button> <p class="ttl">'+ttl+'</p> <p>by '+ath+'</p> <p>'+pgs+' page(s)</p> <div class="read-bar-'+hvR+'"> pages read </div>'
    div.setAttribute('class', 'book');
    div.setAttribute('id', element.id)
    document.querySelector('.book-cards').appendChild(div);
}


function bookInfo(id, title, author, pages, haveRead) {
    this.id = id
    this.title = title
    this.author = author
    this.pages = pages
    this.haveRead = haveRead
}


function createBook (id, title, author, pages, haveRead) {
    maxID = assignID(booksList)
    id = maxID + 1
    let book = new bookInfo(id, title, author, pages, haveRead);
    booksList.push(book)
}


function deleteBook (id) {
    booksList = booksList.filter( function(value) {return value.id != id}  )
    let element = document.getElementById(id);
    element.parentNode.removeChild(element);
}

function assignID (booksList) {    
    booksList.forEach(element => {
        currentID = element.id;
        if (currentID >= maxID) {
            maxID = currentID
        }
    })
    return Number(maxID)    
}


function accessFormValues (form) {
    title = form.elements['title'].value
    author = form.elements['author'].value
    pages = form.elements['pages'].value
    haveRead = form.elements['haveRead'].value == true
    createBook(id, title, author, pages, haveRead)
    element = (booksList[booksList.length - 1])
    addBook(element)
}


let form  = document.getElementById('addBookForm');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    accessFormValues(form)    
});

// Fill up book cards with default books //
title = 'Yellow on yellow';
author = 'Marek Piwnicki';
pages = '1';
haveRead = true;
createBook(id, title, author, pages, haveRead)

title = 'Title';
author = 'Author';
pages = 'X';
haveRead = false;
createBook(id, title, author, pages, haveRead)

booksList.forEach(element => {addBook(element)})