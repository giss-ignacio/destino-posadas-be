const axios = require("axios");
var express = require("express");
const frontendRouter = express.Router();
require("dotenv").config();
const getData = require("./getData.js");


frontendRouter.get("/hoteles", async function (req, res, next) {
    let respuesta = await getData();
  
    Promise.all([respuesta]).then((values) => {
      res.json(values);
    });
  });

  module.exports = frontendRouter; 