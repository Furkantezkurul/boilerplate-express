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
    let responseMessage = "Hello json";
    if (process.env.MESSAGE_STYLE === "uppercase") {
        responseMessage = responseMessage.toUpperCase();
    }
    res.json({"message": responseMessage });
});
































module.exports = app;
