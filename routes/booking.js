const axios = require("axios");
var express = require("express");
const router = express.Router();

//GET ID HOTELES
router.get("/hoteles", async function (req, res, next) {
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
  let respuesta;

  await axios
    .request(options)
    .then(function (response) {
      respuesta = response.data;
    })
    .catch(function (error) {
      console.error(error);
    });

  res.json(respuesta);
});

module.exports = router;
