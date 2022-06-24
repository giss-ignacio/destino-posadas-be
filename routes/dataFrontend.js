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

frontendRouter.get("/promedioPosadas", async function (req, res, next) {
  
  let respuestaPersonal = await getData.getPromedioPosadas("Personal");
  let respuestaLimpieza = await getData.getPromedioPosadas("Limpieza");
  let respuestaPrecioCalidad = await getData.getPromedioPosadas("Precio/Calidad");
  let respuestaUbicacion = await getData.getPromedioPosadas("Ubicacion");
  let respuestaWifi = await getData.getPromedioPosadas("WiFi");
  let respuestaTotal = await getData.getPromedioPosadas("Puntuacion");

  let promedioPuntuaciones = {
    personal: parseFloat(respuestaPersonal.toFixed(2)),
    limpieza: parseFloat(respuestaLimpieza.toFixed(2)),
    precioCalidad: parseFloat(respuestaPrecioCalidad.toFixed(2)),
    ubicacion: parseFloat(respuestaUbicacion.toFixed(2)),
    wifi: parseFloat(respuestaWifi.toFixed(2)),
    total: parseFloat(respuestaTotal.toFixed(2))
  }

  Promise.all([respuestaTotal,respuestaPersonal,
    respuestaLimpieza,respuestaPrecioCalidad,respuestaUbicacion,respuestaWifi]).then((values) => {
    res.json(promedioPuntuaciones);
  });
});

frontendRouter.get("/top3hoteles", async function (req, res, next) {
  let respuesta = await getData.getTop3();

  function obtenerValor(entidad, concepto) {
    return entidad.find((e) => e.Concepto.value == concepto).Valor.value;
  }

  let nombre1 = respuesta[0].Nombre;
  let nombre2 = respuesta[1].Nombre;
  let nombre3 = respuesta[2].Nombre;

  let dato1hotel = await getData.get1Hotel(nombre1);
  let dato2hotel = await getData.get1Hotel(nombre2);
  let dato3hotel = await getData.get1Hotel(nombre3);

  let valorPers1 = obtenerValor(dato1hotel, "Personal");
  let valorPers2 = obtenerValor(dato2hotel, "Personal");
  let valorPers3 = obtenerValor(dato3hotel, "Personal");

  let valorLimpieza1 = obtenerValor(dato1hotel, "Limpieza");
  let valorLimpieza2 = obtenerValor(dato2hotel, "Limpieza");
  let valorLimpieza3 = obtenerValor(dato3hotel, "Limpieza");

  let valorPrecioCalidad1 = obtenerValor(dato1hotel, "Precio/Calidad");
  let valorPrecioCalidad2 = obtenerValor(dato2hotel, "Precio/Calidad");
  let valorPrecioCalidad3 = obtenerValor(dato3hotel, "Precio/Calidad");

  let valorUbicacion1 = obtenerValor(dato1hotel, "Ubicacion");
  let valorUbicacion2 = obtenerValor(dato2hotel, "Ubicacion");
  let valorUbicacion3 = obtenerValor(dato3hotel, "Ubicacion");

  let valorWifi1 = obtenerValor(dato1hotel, "WiFi");
  let valorWifi2 = obtenerValor(dato2hotel, "WiFi");
  let valorWifi3 = obtenerValor(dato3hotel, "WiFi");

  let valorTotal1 = obtenerValor(dato1hotel, "Total Pesos")
    .replace("p ", "$")
    .replace(",", ".");
  let valorTotal2 = obtenerValor(dato2hotel, "Total Pesos")
    .replace("p ", "$")
    .replace(",", ".");
  let valorTotal3 = obtenerValor(dato3hotel, "Total Pesos")
    .replace("p ", "$")
    .replace(",", ".");

  let data3Hoteles = {
    hotel1: {
      nombre: nombre1,
      personal: valorPers1,
      limpieza: valorLimpieza1,
      precioCalidad: valorPrecioCalidad1,
      ubicacion: valorUbicacion1,
      wifi: valorWifi1,
      total: (
        (valorPers1 +
          valorLimpieza1 +
          valorPrecioCalidad1 +
          valorUbicacion1 +
          valorWifi1) /
        5
      ).toFixed(1),
    },
    hotel2: {
      nombre: nombre2,
      personal: valorPers2,
      limpieza: valorLimpieza2,
      precioCalidad: valorPrecioCalidad2,
      ubicacion: valorUbicacion2,
      wifi: valorWifi2,
      total: (
        (valorPers2 +
          valorLimpieza2 +
          valorPrecioCalidad2 +
          valorUbicacion2 +
          valorWifi2) /
        5
      ).toFixed(1),
    },
    hotel3: {
      nombre: nombre3,
      personal: valorPers3,
      limpieza: valorLimpieza3,
      precioCalidad: valorPrecioCalidad3,
      ubicacion: valorUbicacion3,
      wifi: valorWifi3,
      total: (
        (valorPers3 +
          valorLimpieza3 +
          valorPrecioCalidad3 +
          valorUbicacion3 +
          valorWifi3) /
        5
      ).toFixed(1),
    },
  };

  Promise.all([data3Hoteles]).then((values) => {
    res.json(values);
  });
});

frontendRouter.get(
  "/distribucionAlojamientos",
  async function (req, res, next) {
    let hoteles = await getData.getDistribucionHoteles();

    Promise.all([hoteles]).then((values) => {
      res.json(values);
    });
  }
);

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

frontendRouter.get("/getServicioPorMes", async function (req, res, next) {
  // Devuelve el promedio de todos los resultados obtenidos de Valor segun el criterio ingresado
  const miAno = req.query.a;
  const miMes = req.query.m;
  const miConcepto = req.query.c;
  const miTipo = req.query.t;

  console.log("INICIO - Pregunto");
  console.log(miAno);
  console.log(miMes);
  console.log(miConcepto);
  console.log(miTipo);
  console.log("FIN - Pregunto");
  let Servicios = await getData.getServicioPorMes(
    miAno,
    miMes,
    miConcepto,
    miTipo
  );
  //let Servicios = await getData.getServicioPorMes();
  //var Cantidad = Servicios.length;
  var Cantidad = 0;
  var promedio = 0;
  var acumulador = 0;
  var respuesta = [];
//  if(Servicios.length<1){
  for (var i = 0; i < Servicios.length; i++) {
    if (Servicios[i].Valor == undefined) {
      //  block of code to be executed if the condition is true
      console.log("Se encontro el campo Valor sin Datos");
    } else {
      //  block of code to be executed if the condition is false
      acumulador = acumulador + Servicios[i].Valor;
      Cantidad++;
      console.log(Servicios[i].Valor);
    }
  }
  promedio = acumulador / Cantidad;
//  }
 
  
  console.log("INICIO - Respondo");
  console.log("Cantidad :" + Cantidad);
  console.log("promedio :" + promedio);
  console.log("acumulador :" + acumulador);
  console.log(Servicios);
  Promise.all([promedio]).then((values) => {
   //res.promedio;
  //  let promedioPuntuacion = res.data
  //  .filter((e) => {
  //    return e.Valor;
  //  })
  //  .map((a) => {
  //    return parseInt(a.Valor);
  //  });
   res.json(values);
  });
});

frontendRouter.get("/getServiciosHistorico2022/", async function (req, res, next) {
  const miConcepto = req.query.c;
  // var arr = Array.from(Array(4), () => new Array(12));
  // for (var i = 0; i < 4; i++) {
  //      for (var z = 0; z < 12; z++) {
  //        h=d_t.getFullYear()
  //        j=d_t.getMonth()
  //        arr[i][z] = {x:""+h+","+(z+1)+",1",y:z};
  //      }   
  //   }

  // console.log("llamada a ENDPOINT : getServiciosHistorico2022/")
  // console.log("INICIO - Pregunto");
  // console.log(miConcepto);
  // console.log("FIN - Pregunto");
  let Servicios = await getData.getServiciosHistorico2022(miConcepto);
  //console.log("respuesta recibida de get2022 ");
  //console.log(Servicios);
  //res.json.Servicios;
  Promise.all([Servicios]).then((values) => {
    console.log("Envio a Front :")
    console.log(Servicios)
    res.json(values);
  });
});
frontendRouter.get("/evolucionPrecios", async function (req, res, next) {
  let evolucion = await getData.getEvolucionMensualPrecio();

  Promise.all([evolucion]).then((values) => {
    res.json(values);
  });
});

frontendRouter.get("/evolucionMensualPuntajes", async function (req, res, next) {
  let evolucion = await getData.getEvolucionPuntajes();

  Promise.all([evolucion]).then((values) => {
    res.json(values);
  });
});

module.exports = frontendRouter;
