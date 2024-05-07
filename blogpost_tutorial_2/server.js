const mongoose = require("mongoose")

mongoose
  .connect("mongodb://localhost:27017/", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {console.log("Sucessfully connect to MongoDB")})
  .catch((err) => {console.error("Connection error", err)})