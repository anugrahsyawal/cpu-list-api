"use strict";

module.exports = function (app) {
  var jsonku = require("./controller");

  app.route("/").get(jsonku.index);

  app.route("/tampil").get(jsonku.tampilsemuaam4);

  app.route("/tampil/:seri").get(jsonku.tampilam4tertentu);

  app.route("/tambah").post(jsonku.tambahdataam4);

  app.route("/ubah").put(jsonku.ubahdataam4);

  app.route("/hapus").delete(jsonku.hapusdataam4);

};
