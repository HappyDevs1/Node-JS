const bcrypt = require("bcrypt");
const User = require("../models/user");

module.exports = (req, res) => {
  const { username, password } = req.body;

  User.findOne({ username: username })
    .then(user => {
      if (user) {
        bcrypt.compare(password, user.password)
          .then(same => {
            if (same) { // if passwords match
              // store user session, will talk about it later
              res.redirect('/');
            } else {
              res.redirect('/auth/login');
            }
          })
          .catch(error => {
            console.error("Error comparing passwords:", error);
            res.redirect('/auth/login');
          });
      } else {
        res.redirect('/auth/login');
      }
    })
    .catch(error => {
      console.error("Error finding user:", error);
      res.redirect('/auth/login');
    });
};