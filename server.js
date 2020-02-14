const express = require("express")
const bodyParser = require('body-parser')
const MongoClient = require("./database/connetion")
const app = express()


MongoClient().then(()=> {
    console.log("connected")
})
.catch(console.log)

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.get("/", (req, res)=> {
    res.send("welcome to hands on demo of WebHook")
})

app.get("/api/webhook", (req, res)=> {
    res.send("get")
})

app.post("/api/webhook", (req, res)=> {
    res.send("get")
})

app.post("/api/webhook", (req, res)=> {
    res.send("post")
})

app.put("/api/webhook/:id", (req, res)=> {
    res.send("put")
})

app.delete("/api/webhook", (req, res)=> {
    res.send("delete")
})


app.listen(3000)