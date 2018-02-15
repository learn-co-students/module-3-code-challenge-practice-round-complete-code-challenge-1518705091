document.addEventListener("DOMContentLoaded", function() {
  function renderList() {
    let list = document.getElementById("list");
    fetch(`https://flatiron-bookstore-challenge.herokuapp.com/books`)
      .then(res => res.json())
      .then(json => {
        json.forEach(jsonItem => {
          let li = document.createElement("li");
          li.innerText = jsonItem.title;
          li.id = jsonItem.id;

          li.addEventListener("click", function() {
            let show = document.getElementById("show-panel");
            show.innerText = "";
            let title = document.createElement("h2");
            title.innerText = jsonItem.title;
            let image = document.createElement("img");
            image.src = jsonItem.img_url;
            let description = document.createElement("p");
            description.innerText = jsonItem.description;

            show.append(title);
            show.append(image);
            show.append(description);

            let userList = document.createElement("ul");
            userList.id = "users";
            jsonItem.users.forEach(person => {
              let user = document.createElement("li");
              user.innerText = person.username;
              userList.append(user);
              show.append(userList);
            });

            let button = document.createElement("button");
            button.innerText = "Read Book";

            show.append(button);

            button.addEventListener("click", function() {
              fetch(
                `https://flatiron-bookstore-challenge.herokuapp.com/books/${
                  jsonItem.id
                }`,
                {
                  method: "PATCH",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ user_id: 17 })
                }
              )
                .then(res => res.json())
                .then(json => {
                  let users = document.getElementById("users");
                  let li = document.createElement("li");
                  li.innerText = "streich";
                  users.append(li);
                });
            });
          });
          list.append(li);
        });
      });
  }

  renderList();
});
