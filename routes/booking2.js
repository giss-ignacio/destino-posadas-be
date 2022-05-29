const axios = require("axios");
let arrayIdsMock = ["8051135", "5931564"];

arrayIdsMock.forEach((id) => {
  const options = {
    method: "GET",
    url: "https://booking-com.p.rapidapi.com/v1/hotels/review-scores",
    params: { locale: "en-gb", hotel_id: id },
    headers: {
      "X-RapidAPI-Host": "booking-com.p.rapidapi.com",
      "X-RapidAPI-Key": "poner rapid api key",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
});
