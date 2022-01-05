var bodyParser = require("body-parser");
var express = require("express");
var config = require("./config/config");
var app = express();
var http = require("http").Server(app);

var user = require("./middleware/routes");

app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

app.use(express.json({ limit: "50mb" }));
app.setMaxListeners(0);

app.use(user);

// app.get("*", function (req, res) {
//   res.sendFile(__dirname + "/public/index.html");
// });

var server = http.listen(config.port, function () {
  console.log("Server Started");
});
server.timeout = 10000;
