let express = require('express');
let app = express();
require('dotenv').config();

console.log("Hello World");

app.get("/", function (req, res) {
    //res.send("Hello Express");
    let path = __dirname + '/views/index.html';
    res.sendFile(path);
});

let assetPath = __dirname + "/public";
app.use("/public", express.static(assetPath));

app.get("/json", function (req, res) {
    let response = res.json({"message": "Hello json"});
    let envVariable = process.env.MESSAGE_STYLE;
    let result = response;
    if(envVariable === "uppercase"){
        result = result.toUpperCase();
    }
});
































module.exports = app;
