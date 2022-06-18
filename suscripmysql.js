var mysql = require('mysql');
//var parsedDate = new Date(Date.parse(dbDate));
//var timepo = new Date(parsedDate.getTime() + (1000 * seconds));
var post ={
  time : '2022-06-18 18:06:17',
  hotel_ID : "2",
  fuente : 'Booking',
  valoracion : 5,
  clean : 5,
}


time.getDate()

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "posadas",
    database: "posadas",
    port: "5004"
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO Valoraciones (time, Hotel_ID, WIFI, Fuente, Valoracion, Clean) VALUES (%,%,%,%,%,%)"%(post.time, post.hotel_ID, post.WIFI, post.fuente, post.valoracion, post.clean);
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });
  });