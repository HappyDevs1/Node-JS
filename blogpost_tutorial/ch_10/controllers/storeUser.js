const User = require("../models/user.js")
const path = require("path")

module.exports = (req, res) => {
  User.create(req.body)
    .then(user => {
      res.redirect('/');
    })
    .catch(error => {
      return res.redirect("/auth/register")
    });
};