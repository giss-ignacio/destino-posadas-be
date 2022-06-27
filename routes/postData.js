var axios = require("axios");
const fs = require("fs");
const connection = require("../data/connection");
const DATABASE = "destino_posadas";
const COLLECTION_FECHA = "fecha";
const parseObjectId = require("../helpers/parseObjectId");


async function subirData() {
  let hoteles = fs.readFileSync("./data/data.json");
  var config = {
    method: "post",
    url: "http://localhost:1026/v2/op/update",
    headers: {
      "Content-Type": "application/json",
    },
    data: hoteles,
  };

  await updateFecha(Date.now())

  axios(config)
    .then(function (response) {

    })
    .catch(function (error) {
      console.log(error);
    });
}

async function updateFecha() {
  const fechaNueva = new Date()
  const fechaFecha = fechaNueva.getDate() + "/"
    + (fechaNueva.getMonth() + 1) + "/" + fechaNueva.getFullYear();

  const clientmongo = await connection.getConnection();
  const o_id = parseObjectId("62b87b3eee8eb8c1891e075e")
  const query = { _id: o_id }
  const newFecha = {
    $set: {fecha: fechaFecha}
  };
  const fecha = await clientmongo
    .db(DATABASE)
    .collection(COLLECTION_FECHA)
    .updateOne(query, newFecha)
  return fecha;
}


module.exports = {subirData, updateFecha};
