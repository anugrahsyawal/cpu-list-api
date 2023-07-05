"use strict";
const verifikasi = require("./middleware/verifikasi");

module.exports = function (app) {
  var jsonku = require("./controller");

  app.route("/").get(jsonku.index);

  app.route("/tampil").get(jsonku.tampilsemuaam4);

  app.route("/tampil/:seri").get(jsonku.tampilam4tertentu);

  app.route("/tambah").post(verifikasi(1), jsonku.tambahdataam4);

  app.route("/ubah").put(verifikasi(1), jsonku.ubahdataam4);

  app.route("/hapus").delete(verifikasi(1), jsonku.hapusdataam4);
};
