var axios = require("axios");
const fs = require('fs');

var data = JSON.stringify({
  id: "urn:ngsild:Hotel:003",
  type: "Hotel",
  name: {
    type: "Text",
    value: "Hilton 2",
  },
  size: {
    type: "Text",
    value: "S",
  },
  price: {
    type: "Integer",
    value: 99,
  },
});

let hoteles = fs.readFileSync('./data/data.json');
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
