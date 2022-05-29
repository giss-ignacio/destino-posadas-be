const axios = require("axios");
var express = require("express");
const router = express.Router();

//GET HOTELES

async function consultaDeHoteles() {
  // endpoint de lista de hoteles
  const options = {
    method: "GET",
    url: "https://booking-com.p.rapidapi.com/v1/hotels/search",
    params: {
      checkout_date: "2022-10-01",
      units: "metric",
      dest_id: "-1008461",
      dest_type: "city",
      locale: "en-gb",
      adults_number: "1",
      order_by: "popularity",
      filter_by_currency: "ARS",
      checkin_date: "2022-09-30",
      room_number: "1",
      page_number: "0",
    },
    headers: {
      "X-RapidAPI-Host": "booking-com.p.rapidapi.com",
      "X-RapidAPI-Key": "d1c9714594msh22b6c163e2c4be6p129e59jsnc056ede1f158",
    },
  };

  let listaDeHoteles = [];

  await axios
    .request(options)
    .then(function (response) {
      listaDeHoteles.push(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });

  ////////////////////////////////////
  ////// GET IDS HOTELES /////////////
  ////////////////////////////////////

  return listaDeHoteles[0].result.map((e) => {
    return e.hotel_id;
  });
}

function sleep(ms, work) {
  return new Promise((resolve) => setTimeout(resolve(work), ms));
}

async function consultaUnHotel(id) {
  try {
    let res = await axios({
      url: "https://booking-com.p.rapidapi.com/v1/hotels/review-scores",
      method: "get",
      params: { locale: "en-gb", hotel_id: id },
      timeout: 8000,
      headers: {
        "X-RapidAPI-Host": "booking-com.p.rapidapi.com",
        "X-RapidAPI-Key": "d1c9714594msh22b6c163e2c4be6p129e59jsnc056ede1f158",
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

async function consultaDePuntajes(hotelesIds) {
  let puntajesDeHoteles = [];
  let resultado;

  for (let i = 0; i < hotelesIds.length; i++) {
    resultado = await new Promise((resolve, reject) => {
      setTimeout(function () {
        resolve(consultaUnHotel(hotelesIds[i]));
      }, 1000);
    });
    puntajesDeHoteles.push(resultado);
  }
  return puntajesDeHoteles;
}

router.get("/hoteles", async function (req, res, next) {
  let hotelesIds = await consultaDeHoteles();
  // let mockIds = [8051135, 5931564, 291801, 302053, 1522452, 1093286];
  let respuesta = await consultaDePuntajes(hotelesIds);

  Promise.all(respuesta).then((values) => {
    res.json(values);
  });
});

module.exports = router;
