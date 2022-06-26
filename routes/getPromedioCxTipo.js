var axios = require("axios");

async function promedio(a,m,c,t) {
  try {
      let res = await axios({
        url: "http://localhost:3009/api/fedata/getServicioPorMes?a="+a+"&m="+m+"&c="+c+"&t="+t+"",
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

module.exports = promedio;
