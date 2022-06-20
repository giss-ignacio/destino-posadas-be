const axios = require("axios");
var express = require("express");
const frontendRouter = express.Router();
require("dotenv").config();


frontendRouter.get("/hoteles", async function (req, res, next) {
    let hotelesIds = await consultaDeHoteles();
    // let mockIds = [8051135, 5931564, 291801, 302053, 1522452, 1093286];
    let respuesta = await consultaDePuntajes(hotelesIds);
  
    Promise.all(respuesta).then((values) => {
      res.json(values);
    });
  
    // Mandarlo a la base da datos por Orion
    // hacer el set timeout para que no de API Limit exceeded
  });

  module.exports = frontendRouter; 