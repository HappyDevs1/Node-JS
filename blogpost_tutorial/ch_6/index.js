 const express = require("express")
 const path = require("path")
 const mongoose = require("mongoose")
 mongoose.connect("mongodb://localhost/my_database",
 {useNewUrlParser: true})

 const app = new express()
 const  ejs = require("ejs")


 app.set("view engine", "ejs")
 app.use(express.static("public"))

 app.get("/", (req, res) => {
  res.render("index")
 })
 app.get("/about", (req, res) => {
  res.render("about")
 })
 app.get("/post", (req, res) => {
  res.render("post")
 })
 app.get("/contact", (req, res) => {
  res.render("contact")
 })
 app.get("/posts/new", (req, res) => {
  res.render("create")
 })

 app.listen(4000, () => {
  console.log("The server is running on port 4000")
 })