var mysql = require("mysql");
//var parsedDate = new Date(Date.parse(dbDate));
//var timepo = new Date(parsedDate.getTime() + (1000 * seconds));
param;

var json = "objeto";

var post = {
  time: "2022-06-18 18:06:17",
  hotel_ID: "2",
  clean: 5,
  calificacion: 5,
};

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "posadas",
  database: "posadas",
  port: "5004",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  var valores = [
    post.time,
    +",",
    post.hotel_ID + ",",
    // post.fuente + ",",
    post.clean + ",",
    post.calificacion + ",",
  ].toString;
  var sql =
    "INSERT INTO Valoraciones (time, Hotel_ID, clean, calificacion) VALUES ('2022-06-18 18:06:17',2,5,8)";

  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});

//var sql = "INSERT INTO Valoraciones (time, Hotel_ID, WIFI, Fuente, Valoracion, Clean) VALUES (%s,%s,%s,%s,%s,%s)"%(post.time, post.hotel_ID, post.WIFI, post.fuente, post.valoracion, post.clean);

//INSERT INTO Hoteles (hotel_id	Nombre,Direccion,Ciudad,id_zona,review_nr,Tipo) VALUES (291801,"Hotel Posadas","Bolivar 1949	Posadas",-1008461,1164,"Hotel")