 const express = require("express")
 const mongoose = require("mongoose")
 mongoose.connect("mongodb://localhost/my_database",
 {useNewUrlParser: true})
 const app = new express()
 const  ejs = require("ejs")
 const fileUpload =require("express-fileupload")
 const newPostController = require("./controllers/newPost.js")
 const homeController = require("./controllers/home.js")
 const storePostController = require("./controllers/storePost.js")
 const getPostController = require("./controllers/getPost.js")
 const validateMiddleWare = require("./middleware/validateMiddleware")
 const layoutController = require("./controllers/layoutController.js")
 const userController = require("./controllers/newUser.js")
 

 app.set("view engine", "ejs")
 app.use(express.static("public"))
 app.use(express.json())
 app.use(express.urlencoded({extended: true}))
 app.use(fileUpload())

 const customMiddleWare = (req, res, next) => {
  console.log("Custom middle ware called")
  next()
}
app.use(customMiddleWare)
app.use("/posts/store", validateMiddleWare)

 app.get("/", homeController)
 app.get("/post/:id", getPostController)
 app.get("/posts/store", storePostController)
 app.get("/posts/new", newPostController)
 app.get("/about", layoutController)
 app.get("/contact", layoutController)
 app.get("/post", layoutController)
 app.get("/auth/register", newUserController)

//  app.post("/posts/search", (req, res) => {
//    const matchPosts = blogPost.find({body: req.body.title})
//    .then((matchPosts) => {
//     console.log(matchPosts[i])
//     res.render("index")
//    })
//  })

 app.listen(3000, () => {
  console.log("The server is running on port 3000")
 })