var axios = require("axios");
const connection = require("../data/connection");
const DATABASE = "destino_posadas";
const COLLECTION_FECHA = "fecha";
const enumMeses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];
const enumAlojamientos = ["Hotel", "Residencial", "Apart Hotel", "Hosteria"];

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
      console.log(res.status);
    }

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
      console.log(res.status);
    }

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
      console.log(res.status);
    }

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

    if (resHoteles.status == 200) {
      console.log(resHoteles.status);
    }

    return distriJson;
  } catch (err) {
    console.error(err);
  }
}

async function getPromedioNoche() {
  try {
    let res = await axios({
      url: "http://localhost:1026/v2/entities?q=Mes==Enero;Concepto==Tarifa Pesos&options=keyValues&attrs=Valor&limit=1000",
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

    if (res.status == 200) {
      console.log(res.status);
    }
    return total;
  } catch (err) {
    console.error(err);
  }
}

async function getServicioPorMes(ano, mes, concepto, tipo) {
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

      method: "get",

      headers: {
        Accept: "application/json",
      },
    });

    if (resHoteles.status == 200) {
      console.log(resHoteles.status);
    }

    return resHoteles.data;
  } catch (err) {
    console.error(err);
  }
}

async function getServiciosHistorico() {
  let evoHotelesXMes = [];
  let evoResidencialesXMes = [];
  let evoApartsXMes = [];
  let evoHosteriasXMes = [];
  try {
    for (const alojamiento of enumAlojamientos) {
      for (const mes of enumMeses) {
        let res = await axios({
          url:
            "http://localhost:1026/v2/entities?q=Mes==" +
            mes +
            ";Tipo==" +
            alojamiento +
            ";Concepto==WiFi&options=keyValues&attrs=Valor&limit=1000",
          method: "get",
          headers: {
            Accept: "application/json",
          },
        });
        let listaPuntuacionesMes = res.data
          .filter((e) => {
            return e.Valor;
          })
          .map((a) => {
            return parseFloat(a.Valor);
          });

        const promTotal =
          listaPuntuacionesMes.reduce((a, b) => a + b, 0) /
          listaPuntuacionesMes.length;

        if (alojamiento === enumAlojamientos[0]) {
          evoHotelesXMes.push(parseFloat(promTotal.toFixed(2)));
        } else if (alojamiento === enumAlojamientos[1]) {
          evoResidencialesXMes.push(parseFloat(promTotal.toFixed(2)));
        } else if (alojamiento === enumAlojamientos[2]) {
          evoApartsXMes.push(parseFloat(promTotal.toFixed(2)));
        } else {
          evoHosteriasXMes.push(parseFloat(promTotal.toFixed(2)));
        }
      }
    }

    return [
      evoHotelesXMes,
      evoResidencialesXMes,
      evoApartsXMes,
      evoHosteriasXMes,
    ];
  } catch (err) {
    console.error(err);
  }
}

async function getPromedioCxTipo(a, m, c, t) {
  try {
    let res = await axios({
      url:
        "http://localhost:3009/api/fedata/getServicioPorMes?a=" +
        a +
        "&m=" +
        m +
        "&c=" +
        c +
        "&t=" +
        t +
        "",
      method: "get",
      headers: {
        Accept: "application/json",
      },
    });

    let promedioPuntuacion = res.data;

    if (res.status == 200) {
      console.log(res.status);
    }

    return promedioPuntuacion;
  } catch (err) {
    console.error(err);
  }
}

async function ArmarTabla() {
  try {
    var ano = 2022;
    var mes = "Febrero";
    var concepto = "WiFi";
    var tipo = "Hotel";

    const d_t = new Date();

    let year = d_t.getFullYear();
    let month = d_t.getMonth();
    let day = d_t.getDate();
    // let hour = d_t.getHours();
    // let minute = d_t.getMinutes();

    let miPromedio = await getData.getPromedioCxTipo(ano, mes, concepto, tipo);

    var arr = Array.from(Array(4), () => new Array(12));
    for (var i = 0; i < 4; i++) {
      for (var z = 0; z < 12; z++) {
        h = d_t.getFullYear();
        j = d_t.getMonth();
        arr[i][z] = { x: "" + h + "," + (z + 1) + ",1", y: z };
      }
    }

    if (res.status == 200) {
      console.log(res.status);
    }

    return res.data;
  } catch (err) {
    console.error(err);
  }
}

async function getEvolucionMensualPrecio() {
  try {
    const listaPrecios = [];
    for (const mes of enumMeses) {
      const index = enumMeses.indexOf(mes);

      let res = await axios({
        url:
          "http://localhost:1026/v2/entities?q=Mes==" +
          mes +
          ";Concepto==Tarifa Pesos&options=count&options=keyValues&attrs=Valor",
        method: "get",
        headers: {
          Accept: "application/json",
        },
      });

      let listaP = res.data
        .filter((e) => {
          return e.Valor;
        })
        .map((a) => {
          let valor = a.Valor.replace("p ", "").replace(",", "");
          return parseFloat(valor);
        });

      listaPrecios[index] = listaP;
    }

    const maximos = [];
    const minimos = [];

    for (const mes of enumMeses) {
      const index = enumMeses.indexOf(mes);
      maximos.push(Math.max(...listaPrecios[index]));
      minimos.push(Math.min(...listaPrecios[index]));
    }

    jsonMaxMin = {
      maxEne: maximos[0],
      minEne: minimos[0],
      maxFeb: maximos[1],
      minFeb: minimos[1],
      maxMar: maximos[2],
      minMar: minimos[2],
      maxAbr: maximos[3],
      minAbr: minimos[3],
      maxMay: maximos[4],
      minMay: minimos[4],
      maxJun: maximos[5],
      minJun: minimos[5],
      maxJul: maximos[6],
      minJul: minimos[6],
      maxAgo: maximos[7],
      minAgo: minimos[7],
      maxSep: maximos[8],
      minSep: minimos[8],
      maxOct: maximos[9],
      minOct: minimos[9],
      maxNov: maximos[10],
      minNov: minimos[10],
      maxDic: maximos[11],
      minDic: minimos[11],
    };
    return jsonMaxMin;
  } catch (err) {
    console.error(err);
  }
}

async function getEvolucionPuntajes() {
  let evoHotelesXMes = [];
  let evoResidencialesXMes = [];
  let evoApartsXMes = [];
  let evoHosteriasXMes = [];
  try {
    for (const alojamiento of enumAlojamientos) {
      for (const mes of enumMeses) {
        let res = await axios({
          url:
            "http://localhost:1026/v2/entities?q=Mes==" +
            mes +
            ";Tipo==" +
            alojamiento +
            ";Concepto==Puntuacion&options=keyValues&attrs=Valor&limit=1000",
          method: "get",
          headers: {
            Accept: "application/json",
          },
        });
        let listaPuntuacionesMes = res.data
          .filter((e) => {
            return e.Valor;
          })
          .map((a) => {
            return parseFloat(a.Valor);
          });

        const promTotal =
          listaPuntuacionesMes.reduce((a, b) => a + b, 0) /
          listaPuntuacionesMes.length;

        if (alojamiento === enumAlojamientos[0]) {
          evoHotelesXMes.push(parseFloat(promTotal.toFixed(2)));
        } else if (alojamiento === enumAlojamientos[1]) {
          evoResidencialesXMes.push(parseFloat(promTotal.toFixed(2)));
        } else if (alojamiento === enumAlojamientos[2]) {
          evoApartsXMes.push(parseFloat(promTotal.toFixed(2)));
        } else {
          evoHosteriasXMes.push(parseFloat(promTotal.toFixed(2)));
        }
      }
    }

    return [
      evoHotelesXMes,
      evoResidencialesXMes,
      evoApartsXMes,
      evoHosteriasXMes,
    ];
  } catch (err) {
    console.error(err);
  }
}

async function getEvolucionMensualXConcepto(concepto) {
  let evoHotelesXMes = [];
  let evoResidencialesXMes = [];
  let evoApartsXMes = [];
  let evoHosteriasXMes = [];
  try {
    for (const alojamiento of enumAlojamientos) {
      for (const mes of enumMeses) {
        let res = await axios({
          url:
            "http://localhost:1026/v2/entities?q=Mes==" +
            mes +
            ";Tipo==" +
            alojamiento +
            ";Concepto==" +
            concepto +
            "&options=keyValues&attrs=Valor&limit=1000",
          method: "get",
          headers: {
            Accept: "application/json",
          },
        });
        let listaPuntuacionesMes = res.data
          .filter((e) => {
            return e.Valor;
          })
          .map((a) => {
            return parseFloat(a.Valor);
          });

        const promTotal =
          listaPuntuacionesMes.reduce((a, b) => a + b, 0) /
          listaPuntuacionesMes.length;

        if (alojamiento === enumAlojamientos[0]) {
          evoHotelesXMes.push(parseFloat(promTotal.toFixed(2)));
        } else if (alojamiento === enumAlojamientos[1]) {
          evoResidencialesXMes.push(parseFloat(promTotal.toFixed(2)));
        } else if (alojamiento === enumAlojamientos[2]) {
          evoApartsXMes.push(parseFloat(promTotal.toFixed(2)));
        } else {
          evoHosteriasXMes.push(parseFloat(promTotal.toFixed(2)));
        }
      }
    }

    return [
      evoHotelesXMes,
      evoResidencialesXMes,
      evoApartsXMes,
      evoHosteriasXMes,
    ];
  } catch (err) {
    console.error(err);
  }
}


async function getFecha() {
  const clientmongo = await connection.getConnection();
  const fecha = await clientmongo
    .db(DATABASE)
    .collection(COLLECTION_FECHA)
    .find()
    .toArray();
    
  return fecha;
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
  getServiciosHistorico,
  getPromedioCxTipo,
  ArmarTabla,
  getEvolucionPuntajes,
  getEvolucionMensualPrecio,
  getEvolucionMensualXConcepto,
  getFecha
};
