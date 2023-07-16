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

// menampilkan cpu amd family Ryzen
exports.getDataRyzen = function (req, res) {
  connection.query(
    "SELECT name, performance, price, cores, frequency, cache_memory, tdp, video, graphic_speed, technology, ddr_support, code_name FROM amd WHERE name LIKE '%Ryzen%' ORDER BY name DESC;",
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok(rows, res);
      }
    }
  );
};

// menampilkan cpu amd family Phenom
exports.getDataPhenom = function (req, res) {
  connection.query(
    "SELECT name, performance, price, cores, frequency, cache_memory, tdp, video, graphic_speed, technology, ddr_support, code_name FROM amd WHERE name LIKE '%Phenom%' ORDER BY name DESC;",
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok(rows, res);
      }
    }
  );
};

// menampilkan cpu amd family Athlon
exports.getDataAthlon = function (req, res) {
  connection.query(
    `SELECT name, performance, price, cores, frequency, cache_memory, tdp, video, graphic_speed, technology, ddr_support, code_name
    FROM amd 
    WHERE name LIKE '%Athlon%' AND name NOT LIKE '%II%' 
    ORDER BY name DESC;`,
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok(rows, res);
      }
    }
  );
};

// menampilkan cpu amd family Athlon II
exports.getDataAthlon_II = function (req, res) {
  connection.query(
    "SELECT name, performance, price, cores, frequency, cache_memory, tdp, video, graphic_speed, technology, ddr_support, code_name FROM amd WHERE name LIKE '%Athlon II%' ORDER BY name DESC;",
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok(rows, res);
      }
    }
  );
};

// menampilkan cpu amd family Sempron
exports.getDataSempron = function (req, res) {
  connection.query(
    "SELECT name, performance, price, cores, frequency, cache_memory, tdp, video, graphic_speed, technology, ddr_support, code_name FROM amd WHERE name LIKE '%Sempron%' ORDER BY name DESC;",
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok(rows, res);
      }
    }
  );
};

// menampilkan cpu amd family Opteron
exports.getDataOpteron = function (req, res) {
  connection.query(
    `SELECT name, performance, price, cores, frequency, cache_memory, tdp, video, graphic_speed, technology, ddr_support, code_name
    FROM amd WHERE name LIKE '%Opteron%' ORDER BY name DESC;`,
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok(rows, res);
      }
    }
  );
};

// menampilkan cpu amd family A series
exports.getDataA = function (req, res) {
  connection.query(
    `SELECT name, performance, price, cores, frequency, cache_memory, tdp, video, graphic_speed, technology, ddr_support, code_name
    FROM amd
    WHERE name LIKE '%A%' AND name NOT LIKE '%l%'
    ORDER BY name DESC;
    `,
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

// menampilkan cpu amd family Xeon series
exports.getDataXeon = function (req, res) {
  connection.query(
    `SELECT name, performance, price, cores, frequency, cache_memory, tdp, video, graphic_speed, technology, ddr_support, code_name
    FROM intel
    WHERE name LIKE '%Xeon%'
    ORDER BY name DESC;
    `,
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok(rows, res);
      }
    }
  );
};

// menampilkan cpu amd family Pentium series
exports.getDataPentium = function (req, res) {
  connection.query(
    `SELECT name, performance, price, cores, frequency, cache_memory, tdp, video, graphic_speed, technology, ddr_support, code_name
    FROM intel
    WHERE name LIKE '%Pentium%'
    ORDER BY name DESC;
    `,
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok(rows, res);
      }
    }
  );
};

// menampilkan cpu amd family Celeron series
exports.getDataCeleron = function (req, res) {
  connection.query(
    `SELECT name, performance, price, cores, frequency, cache_memory, tdp, video, graphic_speed, technology, ddr_support, code_name
    FROM intel
    WHERE name LIKE '%Celeron%'
    ORDER BY name DESC;
    `,
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok(rows, res);
      }
    }
  );
};

// menampilkan cpu amd family Core 2 series
exports.getDataCore_2 = function (req, res) {
  connection.query(
    `SELECT name, performance, price, cores, frequency, cache_memory, tdp, video, graphic_speed, technology, ddr_support, code_name
    FROM intel
    WHERE name LIKE '%Core 2%'
    ORDER BY name DESC;
    `,
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok(rows, res);
      }
    }
  );
};

// menampilkan cpu amd family Core i
exports.getDataCore_i = function (req, res) {
  connection.query(
    `SELECT name, performance, price, cores, frequency, cache_memory, tdp, video, graphic_speed, technology, ddr_support, code_name
    FROM intel
    WHERE name LIKE '%Core i%'
    ORDER BY name DESC;
    `,
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok(rows, res);
      }
    }
  );
};

// menambahkan data tabel amd
exports.insertDataAMD = function (req, res) {
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
  var socket = req.body.socket;

  connection.query(
    `INSERT INTO amd (name, performance, price, cores, frequency, cache_memory, tdp, video, graphic_speed, technology, ddr_support, code_name, socket)
    VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)`,
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
      socket,
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
exports.updateDataAMD = function (req, res) {
  var id_amd = req.body.id_amd;
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
  var socket = req.body.socket;

  connection.query(
    `UPDATE amd SET name=?, performance=?, price=?, cores=?, frequency=?, cache_memory=?, tdp=?, video=?, graphic_speed=?, technology=?, ddr_support=?, code_name=?, socket=? WHERE id_amd=?`,
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
      socket,
      id_amd,
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

// menghapus data amd
exports.deleteDataAMD = function (req, res) {
  var id_amd = req.body.id_amd;
  connection.query(
    `DELETE FROM amd WHERE id_amd = ${id_amd}`,
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok("Berhasil Menghapus Data", res);
      }
    }
  );
};

// menambahkan data tabel intel
exports.insertDataIntel = function (req, res) {
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
  var socket = req.body.socket;

  connection.query(
    `INSERT INTO intel (name, performance, price, cores, frequency, cache_memory, tdp, video, graphic_speed, technology, ddr_support, code_name, socket)
    VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)`,
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
      socket,
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
exports.updateDataIntel = function (req, res) {
  var id_intel = req.body.id_intel;
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
  var socket = req.body.socket;

  connection.query(
    `UPDATE intel SET name=?, performance=?, price=?, cores=?, frequency=?, cache_memory=?, tdp=?, video=?, graphic_speed=?, technology=?, ddr_support=?, code_name=?, socket=? WHERE id_intel=?`,
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
      socket,
      id_intel,
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

// menghapus data intel
exports.deleteDataIntel = function (req, res) {
  var id_intel = req.body.id_intel;
  connection.query(
    `DELETE FROM intel WHERE id_intel = ${id_intel}`,
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok("Berhasil Menghapus Data", res);
      }
    }
  );
};
