var axios = require("axios");
var data = JSON.stringify({
  subject: {
    entities: [
      {
        idPattern: ".*",
      },
    ],
  },
  notification: {
    http: {
      url: "http://cygnus:5055/notify",
    },
    attrsFormat: "legacy",
  },
});

var config = {
  method: "post",
  url: "http://localhost:1026/v2/subscriptions",
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
