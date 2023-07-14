"use strict";

var response = require("./res");
var connection = require("./koneksi");

// exports.index = function (req, res) {
//   response.ok("Aplikasi REST API ku berjalan!", res);
// };

// menampilkan semua data amd
exports.getAllDataAMD = function (req, res) {
  connection.query(
    "SELECT name, performance, price, cores, frequency, cache_memory, tdp, video, graphic_speed, technology, ddr_support, code_name, socket FROM amd;",
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok(rows, res);
      }
    }
  );
};

// menampilkan cpu amd socket AM4
exports.getDataAM4 = function (req, res) {
  connection.query(
    "SELECT name, performance, price, cores, frequency, cache_memory, tdp, video, graphic_speed, technology, ddr_support, code_name FROM amd WHERE socket = 'AM4' ORDER BY name DESC;",
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok(rows, res);
      }
    }
  );
};

// menampilkan cpu amd socket AM3
exports.getDataAM3 = function (req, res) {
  connection.query(
    "SELECT name, performance, price, cores, frequency, cache_memory, tdp, video, graphic_speed, technology, ddr_support, code_name FROM amd WHERE socket = 'AM3' ORDER BY name DESC;",
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok(rows, res);
      }
    }
  );
};

// menampilkan cpu amd socket AM2
exports.getDataAM2 = function (req, res) {
  connection.query(
    "SELECT name, performance, price, cores, frequency, cache_memory, tdp, video, graphic_speed, technology, ddr_support, code_name FROM amd WHERE socket = 'AM2' ORDER BY name DESC;",
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok(rows, res);
      }
    }
  );
};

// menampilkan cpu amd socket FM2+
exports.getDataFM2 = function (req, res) {
  connection.query(
    "SELECT name, performance, price, cores, frequency, cache_memory, tdp, video, graphic_speed, technology, ddr_support, code_name FROM amd WHERE socket = 'FM2+' ORDER BY name DESC;",
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok(rows, res);
      }
    }
  );
};

// menampilkan semua data cpu intel
exports.getAllDataIntel = function (req, res) {
  connection.query(
    "SELECT name, performance, price, cores, frequency, cache_memory, tdp, video, graphic_speed, technology, ddr_support, code_name, socket FROM intel;",
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok(rows, res);
      }
    }
  );
};

// menampilkan cpu intel socket LGA 1150
exports.getDataLGA1150 = function (req, res) {
  connection.query(
    "SELECT name, performance, price, cores, frequency, cache_memory, tdp, video, graphic_speed, technology, ddr_support, code_name FROM intel WHERE socket = 'LGA 1150' ORDER BY name ASC;",
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok(rows, res);
      }
    }
  );
};

// menampilkan cpu intel socket LGA 1151
exports.getDataLGA1151 = function (req, res) {
  connection.query(
    "SELECT name, performance, price, cores, frequency, cache_memory, tdp, video, graphic_speed, technology, ddr_support, code_name FROM intel WHERE socket LIKE '%LGA 1151%' ORDER BY name ASC;",
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok(rows, res);
      }
    }
  );
};

// menampilkan cpu intel socket LGA 1155
exports.getDataLGA1155 = function (req, res) {
  connection.query(
    "SELECT name, performance, price, cores, frequency, cache_memory, tdp, video, graphic_speed, technology, ddr_support, code_name FROM intel WHERE socket = 'LGA 1155' ORDER BY name ASC;",
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok(rows, res);
      }
    }
  );
};

// menampilkan cpu intel socket LGA 1156
exports.getDataLGA1156 = function (req, res) {
  connection.query(
    "SELECT name, performance, price, cores, frequency, cache_memory, tdp, video, graphic_speed, technology, ddr_support, code_name FROM intel WHERE socket = 'LGA 1156' ORDER BY name ASC;",
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok(rows, res);
      }
    }
  );
};

// menampilkan cpu intel socket LGA 1356
exports.getDataLGA1356 = function (req, res) {
  connection.query(
    "SELECT name, performance, price, cores, frequency, cache_memory, tdp, video, graphic_speed, technology, ddr_support, code_name FROM intel WHERE socket = 'LGA 1356' ORDER BY name ASC;",
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok(rows, res);
      }
    }
  );
};

// menampilkan cpu intel socket LGA 1366
exports.getDataLGA1366 = function (req, res) {
  connection.query(
    "SELECT name, performance, price, cores, frequency, cache_memory, tdp, video, graphic_speed, technology, ddr_support, code_name FROM intel WHERE socket = 'LGA 1366' ORDER BY name ASC;",
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok(rows, res);
      }
    }
  );
};

// menampilkan cpu intel socket LGA 2011
exports.getDataLGA2011 = function (req, res) {
  connection.query(
    "SELECT name, performance, price, cores, frequency, cache_memory, tdp, video, graphic_speed, technology, ddr_support, code_name FROM intel WHERE socket = 'LGA 2011' ORDER BY name ASC;",
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok(rows, res);
      }
    }
  );
};

// menampilkan cpu intel socket LGA 2011-3
exports.getDataLGA2011_3 = function (req, res) {
  connection.query(
    "SELECT name, performance, price, cores, frequency, cache_memory, tdp, video, graphic_speed, technology, ddr_support, code_name FROM intel WHERE socket = 'LGA 2011-3' ORDER BY name ASC;",
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok(rows, res);
      }
    }
  );
};

// menampilkan cpu intel socket LGA 775
exports.getDataLGA775 = function (req, res) {
  connection.query(
    "SELECT name, performance, price, cores, frequency, cache_memory, tdp, video, graphic_speed, technology, ddr_support, code_name FROM intel WHERE socket = 'LGA 775' ORDER BY name ASC;",
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok(rows, res);
      }
    }
  );
};

// menampilkan data processor socket am4 tertentu
exports.getSeriam4 = function (req, res) {
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
