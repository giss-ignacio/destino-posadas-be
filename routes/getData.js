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

async function getPromedioPosadas(conceptoBuscado) {
  try {
    let res = await axios({
      url:
        "http://localhost:1026/v2/entities?q=Concepto==" +
        conceptoBuscado +
        "&options=count&limit=1000&options=keyValues&attrs=Valor",
      method: "get",
      headers: {
        Accept: "application/json",
      },
    });

    let promedioPuntuacion = res.data
      .filter((e) => {
        return e.Valor;
      })
      .map((a) => {
        return parseInt(a.Valor);
      });

    const total =
      promedioPuntuacion.reduce((a, b) => a + b, 0) / promedioPuntuacion.length;

    if (res.status == 200) {
      // test for status you want, etc
      console.log(res.status);
    }
    // Don't forget to return something
    return total;
  } catch (err) {
    console.error(err);
  }
}

async function getTop3() {
  try {
    let res = await axios({
      url: "http://localhost:1026/v2/entities?q=Mes==Febrero;Concepto==Puntuacion&orderBy=!Valor&limit=3&options=keyValues&attrs=Nombre&limit=1000",
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
      url:
        "http://localhost:1026/v2/entities?q=Mes==Febrero;Nombre==" +
        nombre +
        "&limit=1000",
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
      url: "http://localhost:1026/v2/entities?q=Mes==Febrero;Concepto==Puntuacion;Tipo==Hotel&options=count&options=keyValues&attrs=Nombre&limit=1000",
      method: "get",
      headers: {
        Accept: "application/json",
      },
    });

    let resApart = await axios({
      url: "http://localhost:1026/v2/entities?q=Mes==Febrero;Concepto==Puntuacion;Tipo==Apart Hotel&options=count&options=keyValues&attrs=Nombre&limit=1000",
      method: "get",
      headers: {
        Accept: "application/json",
      },
    });

    let resResidencial = await axios({
      url: "http://localhost:1026/v2/entities?q=Mes==Febrero;Concepto==Puntuacion;Tipo==Residencial&options=count&options=keyValues&attrs=Nombre&limit=1000",
      method: "get",
      headers: {
        Accept: "application/json",
      },
    });

    let resHosteria = await axios({
      url: "http://localhost:1026/v2/entities?q=Mes==Febrero;Concepto==Puntuacion;Tipo==Hosteria&options=count&options=keyValues&attrs=Nombre&limit=1000",
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
      HotelesCant: Hoteles,
      ApartHoteles: ((ApartHoteles / total) * 100).toFixed(2),
      ApartHotelesCant: ApartHoteles,
      Residenciales: ((Residenciales / total) * 100).toFixed(2),
      ResidencialesCant: Residenciales,
      Hosterias: ((Hosterias / total) * 100).toFixed(2),
      HosteriasCant: Hosterias,
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

async function getPromedioNoche() {
  try {
    let res = await axios({
      url: "http://localhost:1026/v2/entities?q=Mes==Febrero;Concepto==Tarifa Pesos&options=keyValues&attrs=Valor&limit=1000",
      method: "get",
      headers: {
        Accept: "application/json",
      },
    });

    let listaPrecios = res.data
      .filter((e) => {
        return e.Valor;
      })
      .map((a) => {
        let valor = a.Valor.replace("p ", "").replace(",", "");
        return parseFloat(valor);
      });

    const promTotal =
      listaPrecios.reduce((a, b) => a + b, 0) / listaPrecios.length;

    console.log(promTotal.toFixed(2));

    if (res.status == 200) {
      console.log(res.status);
    }
    return parseFloat(promTotal.toFixed(2));
  } catch (err) {
    console.error(err);
  }
}

async function getTotalOpiniones() {
  try {
    let res = await axios({
      url: "http://localhost:1026/v2/entities?q=Concepto==Numero de Comentarios&options=keyValues&attrs=Valor&limit=1000",
      method: "get",
      headers: {
        Accept: "application/json",
      },
    });

    let totalComentarios = res.data
      .filter((e) => {
        return e.Valor;
      })
      .map((a) => {
        return parseInt(a.Valor);
      });

    const total = totalComentarios.reduce((a, b) => a + b, 0);

    console.log(total);

    if (res.status == 200) {
      console.log(res.status);
    }
    return total;
  } catch (err) {
    console.error(err);
  }
}

async function getServicioPorMes(ano, mes, concepto, tipo) {
  //Busca el Valor de un conepto filtrando por concepro año mes y tipo
  try {
    let resHoteles = await axios({
      url:
        "http://localhost:1026/v2/entities?q=Concepto==" +
        concepto +
        ";Ano==" +
        ano +
        ";Mes==" +
        mes +
        ";Tipo==" +
        tipo +
        "&orderBy=!Nombre&limit=1000&options=keyValues&attrs=Valor",
      //url: "http://localhost:1026/v2/entities?q=Concepto=="+ concepto+";Ano=="+ano+";Mes==" + mes+";Tipo==" + tipo+"&orderBy=!Nombre&limit=1000&options=keyValues&attrs=Mes,Nombre,Valor,Concepto,Ano",
      //url: "http://localhost:1026/v2/entities?q=Concepto=="+ concepto+";Ano==2022;Mes==" + mes+"&orderBy=!Nombre&limit=1000&options=keyValues&attrs=Mes,Nombre,Valor,Concepto,Ano",
      //url: 'http://localhost:1026/v2/entities?q=Concepto==WiFi;Ano==2022;Mes==Febrero&orderBy=!Nombre&limit=1000&options=keyValues&attrs=Mes,Nombre,Valor,Concepto,Ano',
      method: "get",
      //params: { locale: "en-gb", hotel_id: id },
      headers: {
        Accept: "application/json",
      },
    });

    // let Hoteles = parseInt(resHoteles.headers["fiware-total-count"]);
    //console.log(res.data)

    if (resHoteles.status == 200) {
      // test for status you want, etc
      console.log(resHoteles.status);
    }
    // Don't forget to return something
    return resHoteles.data;
  } catch (err) {
    console.error(err);
  }
}

async function getEvolucionMensualPrecio() {
  // let meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
  //   'Julio', 'Agosto', 'Octubre', 'Noviembre', 'Diciembre'];
  try {
   
    let resNoviembre = await axios({
      url:
        "http://localhost:1026/v2/entities?q=Mes==Noviembre;Concepto==Tarifa Pesos&options=count&options=keyValues&attrs=Valor",
      method: "get",
      headers: {
        Accept: "application/json",
      },
    });

    let resDiciembre = await axios({
      url:
        "http://localhost:1026/v2/entities?q=Mes==Diciembre;Concepto==Tarifa Pesos&options=count&options=keyValues&attrs=Valor",
      method: "get",
      headers: {
        Accept: "application/json",
      },
    });

    let resEnero = await axios({
      url:
        "http://localhost:1026/v2/entities?q=Mes==Enero;Concepto==Tarifa Pesos&options=count&options=keyValues&attrs=Valor",
      method: "get",
      headers: {
        Accept: "application/json",
      },
    });

    let resFebrero = await axios({
      url:
        "http://localhost:1026/v2/entities?q=Mes==Febrero;Concepto==Tarifa Pesos&options=count&options=keyValues&attrs=Valor",
      method: "get",
      headers: {
        Accept: "application/json",
      },
    });

    let listaPreciosNov = resNoviembre.data
    .filter((e) => {
      return e.Valor;
    })
    .map((a) => {
      let valor = a.Valor.replace("p ", "").replace(",", "");
      return parseFloat(valor);
    });

    let listaPreciosDic = resDiciembre.data
    .filter((e) => {
      return e.Valor;
    })
    .map((a) => {
      let valor = a.Valor.replace("p ", "").replace(",", "");
      return parseFloat(valor);
    });

    let listaPreciosEne = resEnero.data
    .filter((e) => {
      return e.Valor;
    })
    .map((a) => {
      let valor = a.Valor.replace("p ", "").replace(",", "");
      return parseFloat(valor);
    });

    let listaPreciosFeb = resFebrero.data
    .filter((e) => {
      return e.Valor;
    })
    .map((a) => {
      let valor = a.Valor.replace("p ", "").replace(",", "");
      return parseFloat(valor);
    });


    const maxNov = Math.max(...listaPreciosNov);
    const maxDic = Math.max(...listaPreciosDic);
    const maxEne = Math.max(...listaPreciosEne);
    const maxFeb = Math.max(...listaPreciosFeb);

    const minNov = Math.min(...listaPreciosNov);
    const minDic = Math.min(...listaPreciosDic);
    const minEne = Math.min(...listaPreciosEne);
    const minFeb = Math.min(...listaPreciosFeb);


    jsonMaxMin = {
      maxNov : maxNov,
      minNov : minNov,
      maxDic : maxDic,
      minDic : minDic,
      maxEne : maxEne,
      minEne : minEne,
      maxFeb : maxFeb,
      minFeb : minFeb,
    }

    console.log(jsonMaxMin)

    return jsonMaxMin;
  } catch (err) {
    console.error(err);
  }
}


module.exports = {
  getData,
  getTop3,
  get1Hotel,
  getDistribucionHoteles,
  getPromedioNoche,
  getServicioPorMes,
  getTotalOpiniones,
  getPromedioPosadas,
  getEvolucionMensualPrecio
};
