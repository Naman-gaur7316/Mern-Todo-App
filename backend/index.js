const express = require("express");
const bodyParser = require("body-parser")
const app = express();

app.use(bodyParser.json());

app.get("/todo", (req, res) => {

});

app.post("/todo", (req, res) => {

});

app.put("/completed/:todoId", (req, res) => {

});




app.listen(3000, () => {
    console.log("server is running at port 3000");
})