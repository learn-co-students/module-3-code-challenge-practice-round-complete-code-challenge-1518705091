let bookStore = []
class Book {
  constructor({id, title, description, img_url, users}) {
    this.id = id
    this.title = title
    this.description = description
    this.img_url = img_url
    this.users = users
    bookStore.push(this)
  }

  render(){
    const showPanel = document.getElementById('show-panel')
    const bookInfo = `<div>
  	<h1>${this.title}</h1>
  	<img src="${this.img_url}" alt="book cover">
  	<p>${this.description}</p>
  	<ul id="likeList"></ul>
  	<button class="button" type="button" name="read book">Read Book</button>
  	</div>`
    showPanel.innerHTML += bookInfo
  }
}
// description
// :
// "When her seven-year-old nephew, a hemophiliac, mysteriously disappears during their camping trip, pediatrician Lorrie Ryan races against time to find the missing boy with the help of FBI agent Stuart Saunders. Previously published as Panda Bear Is Critical. Reprint."
// id
// :
// 1
// img_url
// :
// "http://books.google.com/books/content?id=CEMZ1OoPDIAC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
// title
// :
// "Picture Perfect"
// users
// :
// Array(1)
// 0
// :
// created_at
// :
// "2018-02-14T21:31:10.197Z"
// id
// :
// 2
// updated_at
// :
// "2018-02-14T21:31:10.197Z"
// username
// :
// "auer"


// "When her seven-year-old nephew, a hemophiliac, mysteriously disappears during their camping trip, pediatrician Lorrie Ryan races against time to find the missing boy with the help of FBI agent Stuart Saunders. Previously published as Panda Bear Is Critical. Reprint."
// id
// :
// 1
// img_url
// :
// "http://books.google.com/books/content?id=CEMZ1OoPDIAC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
// title
// :
// "Picture Perfect"
// users
// :
// Array(2)
// 0
// :
// created_at
// :
// "2018-02-14T21:31:10.197Z"
// id
// :
// 2
// updated_at
// :
// "2018-02-14T21:31:10.197Z"
// username
// :
// "auer"
// __proto__
// :
// Object
