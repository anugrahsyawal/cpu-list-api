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
  app.route("/get-amd-ryzen").get(jsonku.getDataRyzen);
  app.route("/get-amd-phenom").get(jsonku.getDataPhenom);
  app.route("/get-amd-athlon").get(jsonku.getDataAthlon);
  app.route("/get-amd-athlon2").get(jsonku.getDataAthlon_II);
  app.route("/get-amd-sempron").get(jsonku.getDataSempron);
  app.route("/get-amd-a").get(jsonku.getDataA);
  app.route("/get-amd-opteron").get(jsonku.getDataOpteron);

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
  app.route("/get-intel-xeon").get(jsonku.getDataXeon);
  app.route("/get-intel-pentium").get(jsonku.getDataPentium);
  app.route("/get-intel-celeron").get(jsonku.getDataCeleron);
  app.route("/get-intel-core-2").get(jsonku.getDataCore_2);
  app.route("/get-intel-core-i").get(jsonku.getDataCore_i);

  app.route("/insert-amd").post(verifikasi(1), jsonku.insertDataAMD);
  app.route("/update-amd").put(verifikasi(1), jsonku.updateDataAMD);
  app.route("/delete-amd").delete(verifikasi(1), jsonku.deleteDataAMD);

  app.route("/insert-intel").post(verifikasi(1), jsonku.insertDataIntel);
  app.route("/update-intel").put(verifikasi(1), jsonku.updateDataIntel);
  app.route("/delete-intel").delete(verifikasi(1), jsonku.deleteDataIntel);
};
