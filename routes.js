"use strict";
const verifikasi = require("./middleware/verifikasi");

module.exports = function (app) {
  var jsonku = require("./controller");

  // app.route("/").get(jsonku.index);

  app.route("/get-am4").get(jsonku.getAllam4);

  app.route("/get-am4/:seri").get(jsonku.getSeriam4);

  app.route("/tambah").post(verifikasi(1), jsonku.tambahdataam4);

  app.route("/ubah").put(verifikasi(1), jsonku.ubahdataam4);

  app.route("/hapus").delete(verifikasi(1), jsonku.hapusdataam4);
};
