const axios = require("axios");
var express = require("express");
const router = express.Router();

//GET HOTELES
let arrHotelesConInfo = [];

router.get("/hoteles", async function (req, res, next) {
  let arrayIdsMock = [];
  //"8051135", "5931564"

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
      "X-RapidAPI-Key": "9d38a8bc8cmsh161083924f024ffp19b2bajsn5cb83b18933b",
    },
  };

  await axios
    .request(options)
    .then(function (response) {
      listaDeHoteles = response.data;
      console.log(listaDeHoteles);
    })
    .catch(function (error) {
      console.error(error);
    });
  ////////////////////////////////////
  ////// GET IDS HOTELES /////////////
  ////////////////////////////////////

  let listaDeHotelesResult = listaDeHoteles.result;

  listaDeHotelesResult.forEach((element) => {
    arrayIdsMock.push(element.hotel_id);
  });

  // QUERY2

  // arrayIdsMock.forEach((id) => {
  //   const options = {
  //     method: "GET",
  //     url: "https://booking-com.p.rapidapi.com/v1/hotels/review-scores",
  //     params: { locale: "en-gb", hotel_id: id },
  //     headers: {
  //       "X-RapidAPI-Host": "booking-com.p.rapidapi.com",
  //       "X-RapidAPI-Key": "9d38a8bc8cmsh161083924f024ffp19b2bajsn5cb83b18933b",
  //     },
  //   };

  //   axios
  //     .request(options)
  //     .then(function (response) {
  //       // console.log(response.data);
  //       arrHotelesConInfo.push(response.data);
  //     })
  //     .catch(function (error) {
  //       console.error(error);
  //     });
  // });
  res.json(arrHotelesConInfo);
});

module.exports = router;
