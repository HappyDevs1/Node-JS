 const express = require("express")
 const path = require("path")
 const mongoose = require("mongoose")
 mongoose.connect("mongodb://localhost/my_database",
 {useNewUrlParser: true})
 const app = new express()
 const  ejs = require("ejs")
 const BlogPost = require("./models/BlogPost.js")
 const fileUpload =require("express-fileupload")

 const Schema = mongoose.Schema;
 
 const BlogPostSchema = new Schema({ 
     title: String, 
     body: String, 
     username: String, 
     datePosted:{ /* can declare property type with an object like this 
     because we need 'default' */ 
     type: Date, 
     default: new Date() 
     }   
     });

 app.set("view engine", "ejs")
 app.use(express.static("public"))
 app.use(express.json())
 app.use(express.urlencoded({extended: true}))
 app.use(fileUpload())

 app.get("/", async (req, res) => {
  const blogposts = await BlogPost.find({})
  res.render("index", {blogposts: blogposts})
 })

 app.get("/about", (req, res) => {
  res.render("about")
 })

app.get("/contact", (req, res) => {
  res.render("contact")
 })
  app.get("/post", (req, res) => {
  res.render("post")
 })

app.get('/post/:id',async (req,res)=>{ 
  const blogpost = await BlogPost.findById(req.params.id)
  res.render('post',{
  blogpost
  }) 
 })
 
 app.get("/posts/new", (req, res) => {
  res.render("create")
 })

 app.post('/posts/store', async (req, res) => {             
  let image = req.files.image;
  image.mv(path.resolve(__dirname, "public/img", image.name), async (error) => {
    await BlogPost.create(req.body, {
      image: "/img/" + image.name
    });
    res.redirect("/");
  });
});

//  app.post("/posts/search", (req, res) => {
//    const matchPosts = blogPost.find({body: req.body.title})
//    .then((matchPosts) => {
//     console.log(matchPosts[i])
//     res.render("index")
//    })
//  })

 app.listen(3000, () => {
  console.log("The server is running on port 4000")
 })