"use strict";

var response = require("./res");
var connection = require("./koneksi");

exports.index = function (req, res) {
  response.ok("Aplikasi REST API ku berjalan!", res);
};

// menampilkan data processor socket am4
exports.tampilsemuaam4 = function (req, res) {
  connection.query("SELECT * FROM am4", function (error, rows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok(rows, res);
    }
  });
};

// menampilkan data processor socket am4 tertentu
exports.tampilam4tertentu = function (req, res) {
  const Ryzen = "Ryzen ";
  let seri = req.params.seri;
  connection.query(
    `SELECT * FROM am4 WHERE name LIKE '%${Ryzen + seri}%';`,
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok(rows, res);
      }
    }
  );
};
