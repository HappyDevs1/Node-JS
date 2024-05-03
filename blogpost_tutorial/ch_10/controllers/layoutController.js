// layoutController.js

const express = require("express");
const router = express.Router();

// Import the BlogPost model if needed
// const BlogPost = require("../models/BlogPost.js");

// Define route handlers
const aboutPage = router.get("/about", (req, res) => {
  res.render("about");
});

const contactPage = router.get("/contact", (req, res) => {
  res.render("contact");
});

const postPage = router.get("/post", (req, res) => {
  res.render("post");
});

// Export the router
module.exports = router;
