document.addEventListener("DOMContentLoaded", function() {
  function getBooks() {
    return fetch(`https://flatiron-bookstore-challenge.herokuapp.com/books`)
      .then(response => response.json())
      .then(data => renderPreviews(data));
  }

  function renderPreviews(jsonData) {
    let previewPanel = document.querySelector("#list-panel");
    let previewList = document.querySelector("#list");
    jsonData.forEach(book => {
      let li = document.createElement("li");
      let bookTitleText = document.createTextNode(book.title);
      li.append(bookTitleText);
      previewList.append(li);
      let bookId = book.id;
      let bookTitle = book.title;
      let bookDescription = book.description;
      let bookImg = book.img_url;
      let bookUsers = book.users;
      li.addEventListener("click", () => {
        event.preventDefault();
        renderFullView(bookId, bookTitle, bookDescription, bookImg, bookUsers);
      });
    });
  }

  function renderFullView(
    bookId,
    bookTitle,
    bookDescription,
    bookImg,
    bookUsers
  ) {
    let h1Title = document.querySelector("#book-title");
    let h1Text = document.createTextNode(bookTitle);
    h1Title.append(h1Text);
    let img = document.querySelector("#cover");
    img.setAttribute("src", `${bookImg}`);
    let pDescription = document.querySelector("#description");
    let pText = document.createTextNode(bookDescription);
    pDescription.append(pText);
    let users = document.querySelector("#renters");
    bookUsers.forEach(user => {
      let usersLi = document.createElement("li");
      let usersText = document.createTextNode(user.username);
      usersLi.append(usersText);
      users.append(usersLi);
    });
    let form = document.createElement("form");
    let submitButton = document.createElement("input");
    submitButton.type = "submit";
    form.append(submitButton);
    users.append(form);
    form.addEventListener("submit", function() {
      event.preventDefault();
      console.log(bookId);
      rentBook(bookId);
    });
  }

  function rentBook(bookId) {
    fetch(
      `https://flatiron-bookstore-challenge.herokuapp.com/books/${bookId}`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(`{ "user_id": 16 }`)
      }
    )
      .then(response => response.json())
      .then(data => console.log(data));
  }

  getBooks();

  //check out a book
});
