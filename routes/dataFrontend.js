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

frontendRouter.get("/getServicioPorMes/", async function (req, res, next) {
  const miAno = req.query.a
  const miMes = req.query.m
  const miConcepto = req.query.c
  const miTipo =req.query.t

  console.log("INICIO - Pregunto");
  console.log(miAno);
  console.log(miMes);
  console.log(miConcepto);
  console.log(miTipo);
  console.log("FIN - Pregunto");
  let Servicios = await getData.getServicioPorMes(miAno,miMes,miConcepto,miTipo);
  //let Servicios = await getData.getServicioPorMes();
  //var Cantidad = Servicios.length;
  var Cantidad = 0;
  var promedio;
  var acumulador = 0;

  for (var i=0; i<Servicios.length; i++) {
    if (Servicios[i].Valor == undefined) {
      //  block of code to be executed if the condition is true
      console.log("Se encontro el campo Valor sin Datos");
    } else {
      //  block of code to be executed if the condition is false
      acumulador = acumulador + Servicios[i].Valor;
      Cantidad ++;
      console.log(Servicios[i].Valor);   
    }
      
      }
  promedio = acumulador /Cantidad;
  console.log("INICIO - Respondo");
  console.log("Cantidad :" +Cantidad);
  console.log("promedio :" +promedio);
  console.log("acumulador :" +acumulador);
  console.log(Servicios);
  Promise.all([Servicios]).then((values) => {
    res.json(values);
  });
});

  module.exports = frontendRouter; 