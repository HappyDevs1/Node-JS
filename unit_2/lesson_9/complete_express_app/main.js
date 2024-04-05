const port = 3000,
 express = require("express"),
 app = express();
 //Define a middleware funtion
 app.use((req, res, next) => {
  //Log the requested path to the console
  console.log(`request made to: ${req.url}`);
  next(); //Call the next function
 });
app.get("/items/:vegetable", (req, res) => {
  //Add a route to get url parameters
 let veg = req.params.vegetable;
 res.send(`This is the page for ${veg}`);
});
app.listen(port, () => {
 console.log(`Server running on port: ${port}`);
});