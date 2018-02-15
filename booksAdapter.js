const BooksAdapter = (function(){
  return class BooksAdapter{
    static getAllBooks(){
      return fetch('https://flatiron-bookstore-challenge.herokuapp.com/books')
      .then(res => res.json())
    }

    static checkoutBook(id){
      return fetch('https://flatiron-bookstore-challenge.herokuapp.com/books/' + id, {
        method: "PATCH",
        headers: {
          'Accepts': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user_id: 12,
        })

      }).then(res => res.json())
    }
  }
})()
