document.addEventListener("DOMContentLoaded", function() {

  console.log("I'm here");

  getAllBooks()
  function getAllBooks(){
    BookApi.getAllBooks()
    .then(booksArr => {
      booksArr.forEach(book => {
        renderBookList(book)
      })
    })
  }

  function renderBookList(book){
    let bookContainer = document.querySelector("#list-panel") // #list-panel
        let bookUl = document.querySelector("#list") // #ul

            let bookLi = document.createElement("li")
                bookLi.innerText = book.title
                bookLi.dataset.id = book.id
                bookLi.id = book.id
                bookLi.setAttribute("onclick", renderBook(book)) // not working
                // bookLi.addEventListener("click", renderBook(book))
                // bookli.onclick = renderBook(book)
                bookUl.append(bookLi)


  }

  function renderBook(book){
    // console.log(book) // works
    let bookContainer = document.querySelector("#show-panel") // #show-panel

        bookContainer.innerHTML = `
          <h2>${book.title}</h2>
          <img src="${book.img_url}">
          <p>${book.description}</p>
          <button data-id="${book.id}" onclick="rentBook(${book.id})">Rent Book</button>
        `
        // not calling the function onclick

        // let bookTitle = document.createElement("h2")
        //     bookTitle.innerText = book.title
        //     bookTitle.id = book.id
        //     bookContainer.append(bookTitle)
        // let bookImg = document.createElement("img")
        //     bookImg.src = book.img_url
        //     bookContainer.append(bookImg)
        //     let br = document.createElement("br")
        //     bookContainer.append(br)
        // let bookDescription = document.createElement("p")
        //     bookDescription.innerText = book.description
        //     bookContainer.append("bookDescription")
        // let rentBookBtn = document.createElement("button")
        //     rentBookBtn.setAttribute("value", "Rent Book") // not working
        //     bookContainer.append(rentBookBtn)
  }

  function rentBook(id){
    return fetch(`https://flatiron-bookstore-challenge.herokuapp.com/books/${id}`, {
      method: "PATCH",
      body: JSON.stringify({
        "user_id": 13
      })
    })
    .then(res => res.json())
    .then(json => console.log(json))
  }






});
