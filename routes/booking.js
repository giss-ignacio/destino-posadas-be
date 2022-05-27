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
      "X-RapidAPI-Key": "poner rapid api key",
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
  })
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function consultaUnHotel(id) {
  try {
     let res = await axios({
          url: 'https://booking-com.p.rapidapi.com/v1/hotels/review-scores',
          method: 'get',
          params: { locale: "en-gb", hotel_id: id },
          timeout: 8000,
          headers: {
              'X-RapidAPI-Host': 'booking-com.p.rapidapi.com',
              'X-RapidAPI-Key': 'poner rapid api key'
          }
      })
      if(res.status == 200){
          // test for status you want, etc
          console.log(res.status)
      }    
      // Don't forget to return something   
      return res.data
  }
  catch (err) {
      console.error(err);
  }
}


async function consultaDePuntajes(hotelesIds) {
  let puntajesDeHoteles = [];
    // QUERY2
    hotelesIds.forEach((id) => {      
      puntajesDeHoteles.push(consultaUnHotel(id).then(res => res));
      
  });

  return puntajesDeHoteles;
}

router.get("/hoteles", async function (req, res, next) {
 

  // let hotelesIds = await consultaDeHoteles();
  let mockIds = [
    8051135, 5931564,  291801
  ]
  let respuesta = await consultaDePuntajes(mockIds);

  Promise.all(respuesta).then((values) => {
    res.json(values);
  });

  // Mandarlo a la base da datos por Orion
  // hacer el set timeout para que no de API Limit exceeded

});

module.exports = router;
