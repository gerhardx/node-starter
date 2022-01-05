var express = require("express");
var router = express.Router();
var hello = require("../controller/hello.controller");

router
  //
  .get("/", hello.world);

module.exports = router;
