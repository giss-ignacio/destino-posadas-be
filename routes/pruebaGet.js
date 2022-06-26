var axios = require("axios");

var config = {
  method: "get",
  url: "http://localhost:1026/v2/entities/8051135?type=Hotel",
  headers: {
    Accept: "application/json",
  },
};

axios(config)
  .then(function (response) {

  })
  .catch(function (error) {
    console.log(error);
  });
