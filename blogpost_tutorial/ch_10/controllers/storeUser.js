const User = require("../models/user.js")
const path = require("path")

module.exports = (req, res) => {
  User.create(req.body)
  .then(res.redirect("/"))
}