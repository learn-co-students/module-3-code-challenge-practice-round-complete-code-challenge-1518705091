document.addEventListener("DOMContentLoaded", function() {
  console.log('Loaded')

  let list = document.getElementById('list')
  let showPanel = document.getElementById('show-panel')

  BooksAdapter.getAllBooks()
  .then(bookObjects => {

    console.log(bookObjects)
    let list = document.getElementById('list')

    bookObjects.forEach(book => {
      let newBook = new Book(book)
      list.append(newBook.render())
    })
  })

});
