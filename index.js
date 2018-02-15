document.addEventListener("DOMContentLoaded", function() {
  const listPanel = document.getElementById("list-panel");
  let showPanel = document.getElementById("show-panel");

  function fetchBooks() {
    return fetch("https://flatiron-bookstore-challenge.herokuapp.com/books")
      .then(res => res.json())
      .then(json => displayBooks(json));
  }

  function displayBooks(booksList) {
    booksList.forEach(function(book) {
      let newBook = document.createElement("a");
      newBook.href = "#";
      newBook.innerHTML = book.title;
      newBook.dataset.id = book.id;
      let lineBreak = document.createElement("br");
      listPanel.append(newBook, lineBreak);

      // Refactor into separate function
      // Reset HTML on new click
      newBook.addEventListener("click", function(event) {
        event.preventDefault();
        let bookTitle = document.createElement("h1");
        bookTitle.innerHTML = book.title;
        let bookImage = document.createElement("img");
        bookImage.src = book.img_url;
        let bookDesc = document.createElement("p");
        bookDesc.innerHTML = book.description;
        let userList = document.createElement("ul");
        userList.id = book.id;

        let allUsers = book.users;
        allUsers.forEach(function(u) {
          let newUser = document.createElement("li");
          newUser.innerHTML = u.username;
          userList.append(newUser);
        });

        let readBtn = document.createElement("button");
        readBtn.innerHTML = "Read Book";
        readBtn.dataset.id = book.id;
        showPanel.append(bookTitle, bookImage, bookDesc, userList, readBtn);

        readBtn.addEventListener("click", patchUser);
      });
    });
  }

  function patchUser() {
    let findBookId = this.dataset.id;
    return fetch(
      `https://flatiron-bookstore-challenge.herokuapp.com/books/${findBookId}`,
      {
        method: "PATCH",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          user_id: 19
        })
      }
    )
      .then(res => res.json())
      .then(json => addUserToList(json));
  }

  function addUserToList(json) {
    let updatedUserList = document.getElementById(json.id);
    console.log(updatedUserList);
    let getUser = json.users.slice(-1)[0].username;
    let updatedUser = document.createElement("li");
    updatedUser.innerHTML = getUser;
    updatedUserList.append(updatedUser);
  }
  // add alert if user already exists
  fetchBooks();
});
