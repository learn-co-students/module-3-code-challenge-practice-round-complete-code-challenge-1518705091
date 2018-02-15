const Adapter = (function() {
  const BASEURL = "https://flatiron-bookstore-challenge.herokuapp.com/books"
  return class Adapter {

    static getBooks() {
      return fetch(BASEURL).then(res => res.json())
    }

    static checkOut(id) {
      return fetch(`${BASEURL}/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          user_id: 15
        })
      }).then(res => res.json())

    }

  }
})();
