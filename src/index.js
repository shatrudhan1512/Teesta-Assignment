const express = require('express')
const route = require('./route')
const app = express()

app.use(express.json());
app.use('/',route)

let port = 3000
app.listen(port, function() {
    console.log("Express is running on",port)
})