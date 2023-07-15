"use strict";
const verifikasi = require("./middleware/verifikasi");

module.exports = function (app) {
  var jsonku = require("./controller");

  // app.route("/").get(jsonku.index);

  app.route("/get-amd").get(jsonku.getAllDataAMD);
  app.route("/get-amd-am4").get(jsonku.getDataAM4);
  app.route("/get-amd-am3").get(jsonku.getDataAM3);
  app.route("/get-amd-am2").get(jsonku.getDataAM2);
  app.route("/get-amd-fm2").get(jsonku.getDataFM2);

  app.route("/get-intel").get(jsonku.getAllDataIntel);
  app.route("/get-intel-lga1150").get(jsonku.getDataLGA1150);
  app.route("/get-intel-lga1151").get(jsonku.getDataLGA1151);
  app.route("/get-intel-lga1155").get(jsonku.getDataLGA1155);
  app.route("/get-intel-lga1156").get(jsonku.getDataLGA1156);
  app.route("/get-intel-lga1356").get(jsonku.getDataLGA1356);
  app.route("/get-intel-lga1366").get(jsonku.getDataLGA1366);
  app.route("/get-intel-lga2011").get(jsonku.getDataLGA2011);
  app.route("/get-intel-lga2011").get(jsonku.getDataLGA2011);
  app.route("/get-intel-lga2011_3").get(jsonku.getDataLGA2011_3);

  app.route("/get-am4/:seri").get(jsonku.getSeriam4);

  app.route("/tambah").post(verifikasi(1), jsonku.tambahdataam4);

  app.route("/ubah").put(verifikasi(1), jsonku.ubahdataam4);

  app.route("/hapus").delete(verifikasi(1), jsonku.hapusdataam4);
};
