document.addEventListener("DOMContentLoaded", function() {
  console.log("DA DOM IS LOADED");

  const baseURL = "https://flatiron-bookstore-challenge.herokuapp.com/books";

  // - Get a list of books & render them
  function getListOfBooks() {
    return fetch(baseURL).then(response => {
      return response.json();
    });
  }

  function displayListOfBooks() {
    getListOfBooks().then(booksArray => {
      //console.log(booksArray); //- worked
      booksArray.forEach(book => {
        //console.log(book); //- worked
        let bookTitleContainer = document.getElementById("list-books");
        let bookTitleLi = document.createElement("li");
        let bookTitle = book.title;

        bookTitleLi.innerHTML = bookTitle;
        //addEventListner to each Title before appending
        bookTitleLi.addEventListener("click", handleTitleClick);
        bookTitleContainer.append(bookTitleLi);
      });
    });
  }

  //handle Event Listener - title click - take in an event
  function handleTitleClick(event) {
    //lets fetch our url
    getListOfBooks().then(booksArray => {
      //console.log(booksArray); //- worked
      booksArray.forEach(book => {
        //console.log(book); //- worked
        if (event.target.innerHTML == book.title) {
          //give us back what we want
          let bookImgUrl = book.img_url;
          let bookTitle = book.title;
          let bookDespcription = book.description;
          //console.log(bookImgUrl); //- worked
          let bookProfileContainer = document.getElementById("show-panel");
          let bookPtag = document.createElement("p");

          let bookImgTag = document.createElement("img");

          bookImgTag.setAttribute("src", bookImgUrl);

          bookProfileContainer.innerHTML = `<p> Title: ${bookTitle} </br> <br> Description: ${bookDespcription}</p>`;
          bookProfileContainer.append(bookImgTag);
          // bookProfileContainer.append(bookTitle);
          // bookProfileContainer.append(bookDespcription);
        }
      });
    });
    //console.log("click", event.target.innerHTML); //- worked
  }

  displayListOfBooks();

  handleTitleClick();
});
