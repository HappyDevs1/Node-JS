const User = require("../models/user.js")
const path = require("path")

module.exports = (req, res) => {
  User.create(req.body)
    .then(user => {
      res.redirect('/');
    })
    .catch(error => {
      const validationError = Object.keys(error.errors).map(key => error.errors[key].message)
      req.session.validationErrors = validationErrors
      return res.redirect("/auth/register")
    });
};