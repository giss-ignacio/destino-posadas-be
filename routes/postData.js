// var axios = require("axios");
var mockData = JSON.stringify({
  id: "8051135",
  type: "Hotel",
  name: {
    type: "Text",
    value: "Hilton 2",
  },
  total: {
    type: "Float",
    value: 8.4,
  }
});

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


// const mockData = {
//   "id": 8051135,
//   "type": "Hotel",
//   "score_breakdown": 
//       {
//           "type": "ScoreBreakdown",
//           "value": {

//             "from_year": {
//               "type": "Integer",
//               "value": 2022
//                 },
//               "average_score": {
//                   "type": "Float",
//                   "value": 9.1
//               },
//               "count": {
//                 "type": "Integer",
//                 "value": 64
//               },
//               "question": [
//                 {
//                     "question": "hotel_clean",
//                     "localized_question": "Cleanliness",
//                     "count": 64,
//                     "score": 9.6,
//                     "score_comparison_to_ufi_average": 0
//                 },
//                 {
//                     "score_comparison_to_ufi_average": 0,
//                     "localized_question": "Comfort",
//                     "question": "hotel_comfort",
//                     "score": 9.4,
//                     "count": 64
//                 },
//                 {
//                     "localized_question": "Facilities",
//                     "question": "hotel_services",
//                     "score": 9.5,
//                     "count": 64,
//                     "score_comparison_to_ufi_average": 1
//                 },
//                 {
//                     "question": "hotel_location",
//                     "localized_question": "Location",
//                     "count": 64,
//                     "score": 7.6,
//                     "score_comparison_to_ufi_average": 0
//                 },
//                 {
//                     "score_comparison_to_ufi_average": 0,
//                     "count": 64,
//                     "score": 9.4,
//                     "question": "hotel_staff",
//                     "localized_question": "Staff"
//                 },
//                 {
//                     "score_comparison_to_ufi_average": 0,
//                     "score": 9.2,
//                     "count": 64,
//                     "localized_question": "Total",
//                     "question": "total"
//                 },
//                 {
//                     "score": 8.9,
//                     "count": 64,
//                     "localized_question": "Value for money",
//                     "question": "hotel_value",
//                     "score_comparison_to_ufi_average": 0
//                 },
//                 {
//                     "score_comparison_to_ufi_average": 1,
//                     "localized_question": "WiFi",
//                     "question": "hotel_wifi",
//                     "score": 9.4,
//                     "count": 4
//                 }
//             ],
//             "customer_type": "total"
//           }
//           }
          
          

//       }
    
// }




async function subirData(datos) {

  var data1 = JSON.stringify({
    "actionType": "append",
    "entities": mockData
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


