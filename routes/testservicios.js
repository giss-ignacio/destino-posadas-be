/// Prueba de consula para obtener info sobre los servicios 

var axios = require("axios");
var ano = 2022
var mes = "Febrero"
var concepto = "WiFi"



var config = {
  method: 'get',
  //url: 'http://localhost:1026/v2/entities?q=Concepto==WiFi;Ano==2022;Mes==Febrero&orderBy=!Nombre&limit=1000&options=keyValues&attrs=Mes,Nombre,Valor,Concepto,Ano',
  url: "http://localhost:1026/v2/entities?q=Concepto=="+ concepto+";Ano=="+ano+";Mes==" + mes+"&orderBy=!Nombre&limit=1000&options=keyValues&attrs=Mes,Nombre,Valor,Concepto,Ano",
  headers: { }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
