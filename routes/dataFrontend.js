const axios = require("axios");
var express = require("express");
const frontendRouter = express.Router();
require("dotenv").config();
const getData = require("./getData.js");
const authadmin = require("../middleware/authadmin");

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


frontendRouter.get("/distribucionAlojamientos", async function (req, res, next) {

  let hoteles = await getData.getDistribucionHoteles();

  Promise.all([hoteles]).then((values) => {
    res.json(values);
  });
});

frontendRouter.get("/promedioNoche", async function (req, res, next) {

  let hoteles = await getData.getPromedioNoche();

  Promise.all([hoteles]).then((values) => {
    res.json(values);
  });
});

frontendRouter.get("/totalOpiniones", async function (req, res, next) {

  let opiniones = await getData.getTotalOpiniones();

  Promise.all([opiniones]).then((values) => {
    res.json(values);
  });
});

frontendRouter.post("/login", async (req, res) => {
    try {
      const user = await data.findByCredentials(
        req.body.email,
        req.body.password
      );
      if (user.activo) {
        const token = await data.generatedAuthToken(user);
        res.send({ user, token });
      } else {
        res.status(403).send("Su cuenta esta inactiva");
      }
    } catch (error) {
      res.status(401).send(error.message);
    }
  });
  

  module.exports = frontendRouter; 