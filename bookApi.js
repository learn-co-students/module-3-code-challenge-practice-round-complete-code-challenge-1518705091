class BookApi {

  static getAllBooks(){
    return fetch("https://flatiron-bookstore-challenge.herokuapp.com/books")
    .then(res => res.json())
  }
  
}
