// nodemon: restarts node application whenever a change is detected
// table -> collection && row -> document
// Mongoose is an Object Data Modelling Library(ODM) for MongoDB and Node.js, providing a higher level of abstraction.
// It is similar to the relationship between Express and Node, as Express is a layer of abstraction over Node.js while Mongoose is a layer of abstraction over the regular MongoDB driver.
// middleware: software that provides services to software applications beyond those available from the operating system
// env variables: variables in your system that describe the local environment. The most well known environment variable is probably PATH
// cors: mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served

const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

require('dotenv').config()

const app = express() // create express server
const port = process.env.PORT || 5000 // establishing PORT

// instantiate middleware
app.use(cors())
app.use(express.json())  // to parse JSON

// MongoDB connection
const uri = process.env.ATLAS_URI
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true}) // dealing with mongoDB updates

const connection = mongoose.connection
connection.once('open', () =>{
    console.log("MongoDB connection established")
})

// start the express server
app.listen(port, () =>{
    console.log(`Server running on port ${port}`)
})