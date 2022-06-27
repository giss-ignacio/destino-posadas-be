var express = require("express");
const router = express.Router();
require("dotenv").config();
const fs = require('fs');

router.get("/hoteles", async function (req, res, next) {
    let rawdata = fs.readFileSync('./data/data.json');
    
    let hoteles = JSON.parse(rawdata);


    res.json(hoteles);
});

module.exports = router;
