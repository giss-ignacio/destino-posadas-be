var axios = require("axios");

async function getData() {
  try {
    let res = await axios({
      url: "http://localhost:1026/v2/entities/",
      method: "get",
      headers: {
        Accept: "application/json",
      },
    });
    if (res.status == 200) {
      // test for status you want, etc
      console.log(res.status);
    }
    // Don't forget to return something
    return res.data;
  } catch (err) {
    console.error(err);
  }
}

module.exports = getData;
