document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM loaded");

  const baseURL = `https://flatiron-bookstore-challenge.herokuapp.com/books`

  const bookList = document.getElementById('list')
  const showPanel = document.getElementById('show-panel')

  function getData(){
    fetch(baseURL).then(res => res.json())
    .then(json => {
      json.forEach(book => {
        let newBook = new Book(book)
        bookList.innerHTML += `<li data-id="${book.id}">${book.title}</li>`
      })
    })
  }
  getData()

  function readBook(){
    fetch(baseURL + `/37`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "user_id": 1
      })
    }).then(res => res.json())
    .then(json => {
      json.users.forEach(user => {
        let userList = showPanel.getElementById('likeList')
        userList.innerHTML += `<li>user.username</li>`
      })
    })
  }

  showPanel.addEventListener('click', function(e) {
    if(e.target.className === "button"){
      readBook()
    }
  })

  // Be able to checkout a book by clicking on a button To checkout a book a PATCH must be sent to https://flatiron-bookstore-challenge.herokuapp.com/books/:id with the following example JSON string { "user_id": 1 } This route will respond with the updated book json including the list of users who have checked out the book

  bookList.addEventListener('click', function(e){
    showPanel.innerHTML = ''
    let bookId = e.target.dataset.id
    bookStore.find(book => {
      if(e.target.dataset.id == book.id){
        book.render()
      }
    })

  })

});
