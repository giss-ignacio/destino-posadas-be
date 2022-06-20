// var axios = require("axios");
// var mockData = JSON.stringify({
//   id: "urn:ngsild:Hotel:003",
//   type: "Hotel",
//   name: {
//     type: "Text",
//     value: "Hilton 2",
//   },
//   size: {
//     type: "Text",
//     value: "S",
//   },
//   price: {
//     type: "Integer",
//     value: 99,
//   },
// });

// var config = {
//   method: "post",
//   url: "http://localhost:1026/v2/entities",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   data: data,
// };

// axios(config)
//   .then(function (response) {
//     console.log(JSON.stringify(response.data));
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

var axios = require('axios');

async function subirData(datos) {

  var data1 = JSON.stringify({
    "actionType": "append",
    "entities": datos
  });
  
  var config = {
    method: 'post',
    url: 'http://localhost:1026/v2/op/update',
    headers: { 
      'Content-Type': 'application/json'
    },
    data: data1
  };
  
  axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
}

module.exports = subirData ;


