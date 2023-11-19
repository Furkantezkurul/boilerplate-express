let express = require('express');
let app = express();

console.log("Hello World");

app.get("/", function (req, res) {
    //res.send("Hello Express");
    let path = __dirname + '/views/index.html';
    res.sendFile(path);
});

let assetPath = __dirname + "/public";
app.use("/public", express.static(assetPath));

































module.exports = app;
