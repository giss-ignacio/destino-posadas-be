var express = require("express");
const router = express.Router();
require("dotenv").config();
const fs = require('fs');
//const dataPath = require('data/data.json');

////////////////////////////////////
////// GET HOTELES MOCK DATA /////////////
////////////////////////////////////

router.get("/hoteles", async function (req, res, next) {
    let rawdata = fs.readFileSync('./data/data.json');
    
    let hoteles = JSON.parse(rawdata);
    console.log(hoteles);

    res.json(hoteles);
});

module.exports = router;
