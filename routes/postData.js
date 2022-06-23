var axios = require("axios");
const fs = require("fs");

async function subirData() {
  let hoteles = fs.readFileSync("./data/data.json");
  var config = {
    method: "post",
    url: "http://localhost:1026/v2/op/update",
    headers: {
      "Content-Type": "application/json",
    },
    data: hoteles,
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
}



module.exports = subirData;
