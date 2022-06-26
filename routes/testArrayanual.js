const getData = require("./getData.js");
const getPromedioCxTipo = require("./getPromedioCxTipo.js");
var axios = require("axios");
const { response } = require("express");


var ano = 2022
var mes = "Febrero"
var concepto = "WiFi"
var tipo ="Hotel"
const d_t = new Date();
 
let year = d_t.getFullYear();
let month = d_t.getMonth();
let day = d_t.getDate();

var tabla =[
    ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],
    ["Hotel","Apart Hotel","Hostería","Residencial"]
]
var tablaMes =[
    {mes:"Enero"},{mes:"Febrero"},{mes:"Marzo"},{mes:"Abril"},{mes:"Mayo"},{mes:"Junio"},{mes:"Julio"},{mes:"Agosto"},{mes:"Septiembre"},{mes:"Octubre"},{mes:"Noviembre"},{mes:"Diciembre"}
  ]

var arr = Array.from(Array(4), () => new Array(12));
 for (var i = 0; i < 4; i++) {
      for (var z = 0; z < 12; z++) {
        h=d_t.getFullYear()
        j=d_t.getMonth()
        arr[i][z] = {x:""+h+","+(z+1)+",1",y:z};
      }   
   }
