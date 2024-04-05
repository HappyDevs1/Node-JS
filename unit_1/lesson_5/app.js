const port = 3000,
http = require("http"),
httpStatus = require("http-status-codes"),

//Create server instance
app = http.createServer()

//Funtion to convert objects to readable strings
const getJSONString = (obj) => {
  return JSON.stringify(obj, null, 2)
};

//Event listener for requests
app.on("request", (req, res) => {
  let body = [];

  //Event listener for receiving data
  req.on("data", (bodyData) => {
    body.push(bodyData) //Push received data into the 'body array'
  })

  req.on("end", () => {
    //Concatenate all received data in the 'body' array and convert it to a string
    body = Buffer.concat(body).toString();
  })

  //Log request method , URL and header
  console.log(`URL: ${getJSONString(req.url)}`);
  console.log(`Method: ${getJSONString(req.method)}`);
  console.log(`Headers: ${getJSONString(req.headers)}`);

  //Set response headers
  res.writeHead(httpStatus.OK, {
    "Content-Type": "text/html"
  });
  //Set response message
let responseMessage = "<h1>Welcome!</h1>"
//Send response message
res.end(responseMessage);
});

//Start the server
app.listen(port);
console.log(`The server has started and is listening on: ${port}`)