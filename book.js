const Book = (function() {
  return class Book {
    constructor(data) {
      this.id = data.id,
      this.title = data.title,
      this.description = data.description,
      this.image_url = data.img_url,
      this.users = data.users.map(user => {
        return new User(user)
      })
    }

    renderBookTitle() {
      let li = document.createElement("li")
      li.setAttribute("onclick", `App.fullBookDetails(event, ${this.id})`)
      li.innerHTML = this.title
      return li
    }

    renderDetails() {
      let div = document.createElement('div')
      let h1 = document.createElement('h1')
      h1.innerText = this.title
      let img = document.createElement('img')
      img.setAttribute("src", this.image_url)
      let p = document.createElement('p')
      p.innerText = this.description
      let div2 = document.createElement('div')
      this.users.forEach(user => {
        let h4 = document.createElement('h4')
        h4.innerText = user.name
        div2.append(h4)
      })
      let button = document.createElement('button')
      button.setAttribute("onclick", `App.checkOut(event, ${this.id})`)
      button.innerText = "Read Book"
      div.append(h1)
      div.append(img)
      div.append(p)
      div.append(div2)
      div.append(button)
      return div
    }
  }
})();
