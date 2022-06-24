const getData = require("./getData.js");
// import {
//     ChartComponent,
//     SeriesCollectionDirective,
//     SeriesDirective,
//     Inject,
//     DateTime,
//     SplineAreaSeries,
//     Legend,
//   } from '@syncfusion/ej2-react-charts';
  
//   import { React,useEffect, useState } from "react";

// const RRSS = () => {
//   const [valor, setValor] = useState([]);

// useEffect(() => {
//   obtenerDatos();
// }, []);

// const obtenerDatos = async () => {
//   const data = await fetch("http://localhost:3009/api/fedata/getServicioPorMes?a=2022&m=Enero&c=WiFi&t=Hotel'");
//   const data2 = await data.json();
//   setValor(data2[0])
// };
//console.log(await getData.getServicioPorMes(2022,"Enero","WiFi"));

///*******************  Busqueda de Data INICIO***********************************
// let Servicios = async () => {
// await getData.getServicioPorMes(2022,"Enero","WiFi");
// console.log(Servicios);
// };

///*******************  Busqueda de Data FIN ***********************************
console.log(Servicios);
var respuesta =
[
    [
    //Verde  Hoteles
    { x: new Date(2022, 1, 1), y: 2.2 },
    { x: new Date(2022, 2, 1), y: 3.4 },
    { x: new Date(2022, 3, 1), y: 2.8 },
    { x: new Date(2022, 4, 1), y: 1.6 },
    { x: new Date(2022, 5, 1), y: 2.3 },
    { x: new Date(2022, 6, 1), y: 2.5 },
    { x: new Date(2022, 7, 1), y: 2.9 },
    { x: new Date(2022, 8, 1), y: 3.8 },
    { x: new Date(2022, 9, 1), y: 1.4 },
    { x: new Date(2022, 10, 1), y: 3.1 },
  ],
  [
    //Gris
    { x: new Date(2022, 1, 1), y: 2 },
    { x: new Date(2022, 2, 1), y: 1.7 },
    { x: new Date(2022, 3, 1), y: 1.8 },
    { x: new Date(2022, 4, 1), y: 2.1 },
    { x: new Date(2022, 5, 1), y: 2.3 },
    { x: new Date(2022, 6, 1), y: 1.7 },
    { x: new Date(2022, 7, 1), y: 1.5 },
    { x: new Date(2022, 8, 1), y: 2.8 },
    { x: new Date(2022, 9, 1), y: 1.5 },
    { x: new Date(2022, 10, 1), y: 2.3 },
  ],
  [
    //azul
    { x: new Date(2022, 1, 1), y: 0.8 },
    { x: new Date(2022, 2, 1), y: 1.3 },
    { x: new Date(2022, 3, 1), y: 1.1 },
    { x: new Date(2022, 4, 1), y: 1.6 },
    { x: new Date(2022, 5, 1), y: 2 },
    { x: new Date(2022, 6, 1), y: 1.7 },
    { x: new Date(2022, 7, 1), y: 2.3 },
    { x: new Date(2022, 8, 1), y: 2.7 },
    { x: new Date(2022, 9, 1), y: 1.1 },
    { x: new Date(2022, 10, 1), y: 2.3 },
  ],
];




console.log(respuesta);