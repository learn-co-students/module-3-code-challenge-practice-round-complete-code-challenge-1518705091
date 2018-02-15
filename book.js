const Book = (function(){
  let showPanel = document.getElementById('show-panel')
  return class Book{
    constructor({id, title, description, img_url, users}){
      this.id = id
      this.title = title
      this.description = description
      this.img_url = img_url
      this.users = users
    }

    render(){
      let li = document.createElement('li')
      li.innerText = this.title
      li.id = this.id

      li.addEventListener('click', function(){
        showPanel.innerText = ''

        let titleH3 = document.createElement('h3')
        titleH3.innerText = this.title
        showPanel.append(titleH3)

        let img = document.createElement('img')
        img.src = this.img_url
        showPanel.append(img)

        let descP = document.createElement('p')
        descP.innerText = this.description
        showPanel.append(descP)

        let allReaders = document.createElement('div')
        allReaders.id = "all-readers"
        this.users.forEach(user => {
          let userH4 = document.createElement('h4')
          userH4.innerText = user.username
          allReaders.append(userH4)
        })
        showPanel.append(allReaders)

        let readButton = document.createElement('button')
        readButton.innerText = 'Read'
        readButton.id = 'read-button'
        showPanel.append(readButton)

        readButton.addEventListener('click',function(){
          BooksAdapter.checkoutBook(this.id)
          .then(json => {
            console.log(this.id)
            let readersDiv = document.getElementById('all-readers')
            allReaders.innerText = ''
            json.users.forEach(user => {
              let userH4 = document.createElement('h4')
              userH4.innerText = user.username
              allReaders.append(userH4)
              console.log(user)
            })
          })
        }.bind(this))

      }.bind(this))
      return li
    }
  }
})()
