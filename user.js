const User = (function() {
  return class User {
    constructor(userObj) {
      this.id = userObj.id,
      this.name = userObj.username
    }
  }
})();
