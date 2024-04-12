const mongoose = require("mongoose")
const User = require("./user")
mongoose.connect("mongodb://localhost/testdb")

const user = new User({
  name: "Happy",
  age: 26
})