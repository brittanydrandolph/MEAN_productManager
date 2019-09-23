const mongoose = require("mongoose")
const express = require("express")
const app = express()
app.use(express.json())
app.use(express.static(__dirname + "/public/dist/public"))


mongoose.connect("mongodb://localhost/Products2", {useNewUrlParser: true});
require("./server/configs/mongoose")

require("./server/configs/routes")(app)

app.listen(8000, function(){
    console.log("Listening on port 8000 - GREAT WORK!")
})