const App = (function() {
  return class App {
    static init() {
      console.log("I'm in the app")
      App.getBooks()
    }

    static getBooks() {
      let ul = document.getElementById('list')
      Adapter.getBooks()
      .then(json => {
        json.forEach(book => {
          let newBook = new Book(book)
          list.append(newBook.renderBookTitle())
        })
      })
    }

    static fullBookDetails(event, id) {
      event.preventDefault()
      let showPanel = document.getElementById('show-panel')
      showPanel.innerHTML = " "
      Adapter.getBooks()
      .then(json => {
        let book = json.find(book => {return book.id === id})
        let specificBook = new Book(book)
        showPanel.append(specificBook.renderDetails())
      })
    }

    static checkOut(event, id) {
      let showPanel = document.getElementById('show-panel')
      showPanel.innerHTML = " "
      Adapter.checkOut(id)
      .then(json => {
        let updatedBook = new Book(json)
        showPanel.append(updatedBook.renderDetails())
      })

    }
  }
})();
