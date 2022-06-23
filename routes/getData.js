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

    console.log(res.data);

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
      url: "http://localhost:1026/v2/entities?q=Mes==Febrero;Nombre==" + nombre,
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

async function getDistribucionHoteles() {
  try {
    let resHoteles = await axios({
      url: "http://localhost:1026/v2/entities?q=Mes==Febrero;Concepto==Puntuacion;Tipo==Hotel&options=count&options=keyValues&attrs=Nombre",
      method: "get",
      headers: {
        Accept: "application/json",
      },
    });

    let resApart = await axios({
      url: "http://localhost:1026/v2/entities?q=Mes==Febrero;Concepto==Puntuacion;Tipo==Apart Hotel&options=count&options=keyValues&attrs=Nombre",
      method: "get",
      headers: {
        Accept: "application/json",
      },
    });

    let resResidencial = await axios({
      url: "http://localhost:1026/v2/entities?q=Mes==Febrero;Concepto==Puntuacion;Tipo==Residencial&options=count&options=keyValues&attrs=Nombre",
      method: "get",
      headers: {
        Accept: "application/json",
      },
    });

    let resHosteria = await axios({
      url: "http://localhost:1026/v2/entities?q=Mes==Febrero;Concepto==Puntuacion;Tipo==Hosteria&options=count&options=keyValues&attrs=Nombre",
      method: "get",
      headers: {
        Accept: "application/json",
      },
    });

    let Hoteles = parseInt(resHoteles.headers["fiware-total-count"]);
    let ApartHoteles = parseInt(resApart.headers["fiware-total-count"]);
    let Residenciales = parseInt(resHosteria.headers["fiware-total-count"]);
    let Hosterias = parseInt(resResidencial.headers["fiware-total-count"]),
      total = Hoteles + ApartHoteles + Residenciales + Hosterias;

    let distriJson = {
      Hoteles: ((Hoteles / total) * 100).toFixed(2),
      ApartHoteles: ((ApartHoteles / total) * 100).toFixed(2),
      Residenciales: ((Residenciales / total) * 100).toFixed(2),
      Hosterias: ((Hosterias / total) * 100).toFixed(2),
    };

    //console.log(res.data)

    if (resHoteles.status == 200) {
      // test for status you want, etc
      console.log(resHoteles.status);
    }
    // Don't forget to return something
    return distriJson;
  } catch (err) {
    console.error(err);
  }
}

async function getPromedioNoche(nombre) {
  try {
    let res = await axios({
      url: 'http://localhost:1026/v2/entities?q=Mes==Enero;Concepto==Tarifa Pesos&options=keyValues&attrs=Valor',
      method: "get",
      headers: {
        Accept: "application/json",
      },
    });

    let listaPrecios = res.data.filter(e => {return e.Valor}).map(a => {
      let valor = a.Valor.replace("p ", "").replace(",","")
      return parseFloat(valor)
    })
    
    const promTotal = listaPrecios.reduce((a, b) => a + b, 0) / listaPrecios.length;

    console.log(promTotal.toFixed(2))

    if (res.status == 200) {

      console.log(res.status);
    }
    return parseFloat(promTotal.toFixed(2));
  } catch (err) {
    console.error(err);
  }
}


module.exports = {getData, getTop3, get1Hotel, getDistribucionHoteles, getPromedioNoche };

