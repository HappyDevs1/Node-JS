const mongoose = require("mongoose");

// const Tutorial = mongoose.model(
//   "Tutorial",
//   new mongoose.Schema({
//     title: String,
//     author: String,
//     images: []
//   })
// );

// module.exports = Tutorial;

//Embedding images with appropriate fields
const Image = mongoose.model(
  "Image",
  new mongoose.Schema({
    path: String,
    url: String,
    caption: String,
    createdAt: Date
  })
);

module.exports = Image;