"use strict";

const port = 3000,
  //Add the express module to your application.
  express = require("express"),
  //Assign the express application to the app constant
  app = express();
app
  //Set up a GET route for the home page
  .get("/", (req, res) => {
    console.log(req.params);
    console.log(req.body);
    console.log(req.url);
    console.log(req.query);
    //issue a response from the server to the client with res.send
    res.send("Hello, Universe!");
  })
  .listen(port, () => {
    console.log(`The Express.js server has started and is listening on port number: ${port}`);
  });
