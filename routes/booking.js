const axios = require("axios");
var express = require("express");
const router = express.Router();

//GET ID HOTELES
router.get("/hoteles", async function (req, res, next) {
  let respuesta;
  let respuesta2 = [];
  //endpoint de lista de hoteles
  const options = {
    method: "GET",
    url: "https://travel-advisor.p.rapidapi.com/hotels/list",
    params: {
      location_id: "312805",
      adults: "1",
      rooms: "1",
      nights: "2",
      offset: "0",
      limit: "30",
      sort: "recommended",
      lang: "en_US",
    },
    headers: {
      "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
      "X-RapidAPI-Key": "9d38a8bc8cmsh161083924f024ffp19b2bajsn5cb83b18933b",
    },
  };

  await axios
    .request(options)
    .then(function (response) {
      respuesta = response.data;
    })
    .catch(function (error) {
      console.error(error);
    });

  //Mi test
  //respuesta.data es el array de hoteles q tiene el objeto respuesta

  let arrayDeObjetos = respuesta.data;
  let arrayIds = [];

  await arrayDeObjetos.map((hotel) => {
    arrayIds.push(hotel.location_id);
  });

  await console.log(arrayIds);

  // map de mi array de ids
  let destVARIABLE;

  await arrayIds.map((idHotel) => {
    //  dame tal cosa por idHotel
    destVARIABLE = idHotel;

    const options2 = {
      method: "GET",
      url: "https://booking-com.p.rapidapi.com/v1/hotels/search",
      params: {
        checkout_date: "2022-10-01",
        units: "metric",
        dest_id: destVARIABLE,
        dest_type: "city",
        locale: "en-gb",
        adults_number: "1",
        order_by: "popularity",
        filter_by_currency: "AED",
        checkin_date: "2022-09-30",
        room_number: "1",
      },
      headers: {
        "X-RapidAPI-Host": "booking-com.p.rapidapi.com",
        "X-RapidAPI-Key": "9d38a8bc8cmsh161083924f024ffp19b2bajsn5cb83b18933b",
      },
    };

    axios
      .request(options2)
      .then(function (response2) {
        console.log(response2.data);
        respuesta2.push(response2.data);
      })
      .catch(function (error2) {
        console.error(error2);
      });
  });

  await console.log("la respuesta es: " + respuesta2);
  //////////////////////////////////////
  res.json(respuesta2);
});

module.exports = router;
