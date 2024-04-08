const express = require("express");
const router = express.Router()

router.use(logger)

router.get("/", (req, res) => {
  //The line below is how we parse query param
  console.log(req.query.name)
  res.send("User List")
})

router.get("/new", (req, res) => {
res.render("users/new")
})

router.post("/", (req, res) => {
  const isValid = true
  if(isValid) {
    users.push({firstName: req.body.firstName})
    res.redirect(`/users/${users.length - 1}`)
  } else {
    console.log("Error")
    res.render("users/new", {firstName: req.body.firstName})
  }
  console.log(req.body.firstName)
  res.send("Hi")
})

router.route("/:id").get((req, res) => {
  console.log(req.user)
  res.send(`Get User With ID ${req.params.id}`)
}).put((req, res) => {
  res.send(`Update User With ID ${req.params.id}`)
}).delete((req, res) => {
  res.send(`Delete User With ID ${req.params.id}`)
})

//The code above is the same as the one below
//router.get("/:id", (req, res) => {
//  res.send(`Get User With ID ${req.params.id}`)
//})

const users = [{name: "Happy"}, {name: "Sfiso"}]
router.param("id", (req, res, next, id) => {
  req.user = users[id]
  next()
})

function logger(req, res, next) {
  console.log(req.originalUrl)
  next()
}

module.exports = router