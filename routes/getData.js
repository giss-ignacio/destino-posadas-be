var axios = require('axios');


async function getData() {
    var config = {
        method: 'get',
        url: 'http://localhost:1026/v2/entities/8051135?type=Hotel',
        headers: { 
          'Accept': 'application/json'
        }
      };
      
      let res = await axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });

      return res;
}



module.exports = getData ;