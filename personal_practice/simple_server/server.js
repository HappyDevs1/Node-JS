const express = require("express")
const app = express()

//This code allow us to render static html files (that have fixed content)
app.use(express.static("public"))
//This code below allow us to access the body of EJS files, like input values
app.use(express.urlencoded({extended: true}))
//This code allow our server to be able to read EJS files
app.set("view engine", "ejs")
app.use(express.json())

//This code connects our routes to our server, so that we can have access to all the routes created in the routes file
const userRouter = require("./routes/users")
app.use("/users", userRouter)

app.listen(3000)