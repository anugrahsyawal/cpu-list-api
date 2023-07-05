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
  let seri = req.params.seri;
  connection.query(
    `SELECT * FROM am4 WHERE name LIKE '%Ryzen ${seri}%';`,
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok(rows, res);
      }
    }
  );
};

// menambahkan data tabel am4
exports.tambahdataam4 = function (req, res) {
  var name = req.body.name;
  var performance = req.body.performance;
  var price = req.body.price;
  var cores = req.body.cores;
  var frequency = req.body.frequency;
  var cache_memory = req.body.cache_memory;
  var tdp = req.body.tdp;
  var video = req.body.video;
  var graphic_speed = req.body.graphic_speed;
  var technology = req.body.technology;
  var ddr_support = req.body.ddr_support;
  var code_name = req.body.code_name;

  connection.query(
    `INSERT INTO am4 (name, performance, price, cores, frequency, cache_memory, tdp, video, graphic_speed, technology, ddr_support, code_name)
    VALUES (?,?,?,?,?,?,?,?,?,?,?,?)`,
    [
      name,
      performance,
      price,
      cores,
      frequency,
      cache_memory,
      tdp,
      video,
      graphic_speed,
      technology,
      ddr_support,
      code_name,
    ],
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok("Berhasil menambahkan Data", res);
      }
    }
  );
};

// mengubah data berdasarkan id
exports.ubahdataam4 = function (req, res) {
  var id_am4 = req.body.id_am4;
  var name = req.body.name;
  var performance = req.body.performance;
  var price = req.body.price;
  var cores = req.body.cores;
  var frequency = req.body.frequency;
  var cache_memory = req.body.cache_memory;
  var tdp = req.body.tdp;
  var video = req.body.video;
  var graphic_speed = req.body.graphic_speed;
  var technology = req.body.technology;
  var ddr_support = req.body.ddr_support;
  var code_name = req.body.code_name;

  connection.query(
    `UPDATE am4 SET name=?, performance=?, price=?, cores=?, frequency=?, cache_memory=?, tdp=?, video=?, graphic_speed=?, technology=?, ddr_support=?, code_name=? WHERE id_am4=?`,
    [
      name,
      performance,
      price,
      cores,
      frequency,
      cache_memory,
      tdp,
      video,
      graphic_speed,
      technology,
      ddr_support,
      code_name,
      id_am4,
    ],
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok("Berhasil Mengubah Data", res);
      }
    }
  );
};

// menghapus data am4
exports.hapusdataam4 = function (req, res) {
  var id_am4 = req.body.id_am4;
  connection.query(
    `DELETE FROM am4 WHERE id_am4 = ${id_am4}`,
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok("Berhasil Menghapus Data", res);
      }
    }
  );
};
