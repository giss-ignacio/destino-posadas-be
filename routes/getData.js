var axios = require("axios");

async function getData() {
  try {
    let res = await axios({
      url: "http://localhost:1026/v2/entities?limit=1000",
      method: "get",
      headers: {
        Accept: "application/json",
      },
    });
    if (res.status == 200) {
      // test for status you want, etc
      console.log(res.status);
    }
    // Don't forget to return something
    return res.data;
  } catch (err) {
    console.error(err);
  }
}

async function getTop3() {
  try {
    let res = await axios({
      url: "http://localhost:1026/v2/entities?q=Mes==Febrero;Concepto==Puntuacion&orderBy=!Valor&limit=3&options=keyValues&attrs=Nombre",
      method: "get",
      headers: {
        Accept: "application/json",
      },
    });

    console.log(res.data)

    if (res.status == 200) {
      // test for status you want, etc
      console.log(res.status);
    }
    // Don't forget to return something
    return res.data;
  } catch (err) {
    console.error(err);
  }
}

async function get1Hotel(nombre) {
  try {
    let res = await axios({
      url: 'http://localhost:1026/v2/entities?q=Mes==Febrero;Nombre=='+nombre,
      method: "get",
      headers: {
        Accept: "application/json",
      },
    });


    if (res.status == 200) {
      // test for status you want, etc
      console.log(res.status);
    }
    // Don't forget to return something
    return res.data;
  } catch (err) {
    console.error(err);
  }
}


module.exports = {getData, getTop3, get1Hotel};
