require('dotenv').config();
let express = require('express');
let app = express();

console.log("Hello World");

app.use(function(req, res, next) {
    let methodName = req.method;
    let ipadress = req.ip;
    let path = req.path;
    console.log(methodName + " " + path + " - " + ipadress);
    next();
  });


app.get("/", function (req, res) {
    //res.send("Hello Express");
    let path = __dirname + '/views/index.html';
    console.log("test");
    res.sendFile(path);
});

app.get("/json", function (req, res) {
    let responseMessage = "Hello json";
    if (process.env.MESSAGE_STYLE === "uppercase") {
        responseMessage = responseMessage.toUpperCase();
    }
    
    res.json({ message: responseMessage });
});

let assetPath = __dirname + "/public";
app.use("/public", express.static(assetPath));



































module.exports = app;
