var axios = require("axios");

var mockData = {
  id: "8051135",
  type: "Hotel",
  name: {
    type: "Text",
    value: "Hilton 2",
  },
  total: {
    type: "Float",
    value: 8.5,
  },
};

var data = JSON.stringify({
  actionType: "append",
  entities: [mockData],
});

var config = {
  method: "post",
  url: "http://localhost:1026/v2/op/update",
  headers: {
    "Content-Type": "application/json",
  },
  data: data,
};

axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
