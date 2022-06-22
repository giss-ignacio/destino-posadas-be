const axios = require("axios");
var express = require("express");
const frontendRouter = express.Router();
require("dotenv").config();
const getData = require("./getData.js");

frontendRouter.get("/hoteles", async function (req, res, next) {
    let respuesta = await getData.getData();

    Promise.all([respuesta]).then((values) => {
      res.json(values);
    });
  });


  frontendRouter.get("/top3hoteles", async function (req, res, next) {
    let respuesta = await getData.getTop3();

    var arrayDeHoteles = [];

    let dato1hotel = await getData.get1Hotel(respuesta[0].Nombre)
    let dato2hotel = await getData.get1Hotel(respuesta[1].Nombre)
    let dato3hotel = await getData.get1Hotel(respuesta[2].Nombre)

    arrayDeHoteles.push(dato1hotel,dato2hotel,dato3hotel)

  //   respuesta.forEach(async function(hotel, index) {
  //     let dato1hotel = await getData.get1Hotel(hotel.Nombre);
  //     console.log(`${index} : ${hotel.Nombre}`);
  //     arrayDeHoteles.push(dato1hotel);
  // });

    Promise.all([arrayDeHoteles]).then((values) => {
      res.json(values);
    });
      });

  module.exports = frontendRouter; 