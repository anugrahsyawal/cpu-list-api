"use strict";
const verifikasi = require("./middleware/verifikasi");

module.exports = function (app) {
  var jsonku = require("./controller");

  // app.route("/").get(jsonku.index);

  app.route("/get-amd").get(verifikasi([1, 2]), jsonku.getAllDataAMD);
  app.route("/get-amd-am4").get(verifikasi([1, 2]), jsonku.getDataAM4);
  app.route("/get-amd-am3").get(verifikasi([1, 2]), jsonku.getDataAM3);
  app.route("/get-amd-am2").get(verifikasi([1, 2]), jsonku.getDataAM2);
  app.route("/get-amd-fm2").get(verifikasi([1, 2]), jsonku.getDataFM2);
  app.route("/get-amd-ryzen").get(verifikasi([1, 2]), jsonku.getDataRyzen);
  app.route("/get-amd-phenom").get(verifikasi([1, 2]), jsonku.getDataPhenom);
  app.route("/get-amd-athlon").get(verifikasi([1, 2]), jsonku.getDataAthlon);
  app.route("/get-amd-athlon2").get(verifikasi([1, 2]), jsonku.getDataAthlon_II);
  app.route("/get-amd-sempron").get(verifikasi([1, 2]), jsonku.getDataSempron);
  app.route("/get-amd-a").get(verifikasi([1, 2]), jsonku.getDataA);
  app.route("/get-amd-opteron").get(verifikasi([1, 2]), jsonku.getDataOpteron);

  app.route("/get-intel").get(verifikasi([1, 2]), jsonku.getAllDataIntel);
  app.route("/get-intel-lga1150").get(verifikasi([1, 2]), jsonku.getDataLGA1150);
  app.route("/get-intel-lga1151").get(verifikasi([1, 2]), jsonku.getDataLGA1151);
  app.route("/get-intel-lga1155").get(verifikasi([1, 2]), jsonku.getDataLGA1155);
  app.route("/get-intel-lga1156").get(verifikasi([1, 2]), jsonku.getDataLGA1156);
  app.route("/get-intel-lga1356").get(verifikasi([1, 2]), jsonku.getDataLGA1356);
  app.route("/get-intel-lga1366").get(verifikasi([1, 2]), jsonku.getDataLGA1366);
  app.route("/get-intel-lga2011").get(verifikasi([1, 2]), jsonku.getDataLGA2011);
  app.route("/get-intel-lga2011").get(verifikasi([1, 2]), jsonku.getDataLGA2011);
  app.route("/get-intel-lga2011_3").get(verifikasi([1, 2]), jsonku.getDataLGA2011_3);
  app.route("/get-intel-xeon").get(verifikasi([1, 2]), jsonku.getDataXeon);
  app.route("/get-intel-pentium").get(verifikasi([1, 2]), jsonku.getDataPentium);
  app.route("/get-intel-celeron").get(verifikasi([1, 2]), jsonku.getDataCeleron);
  app.route("/get-intel-core-2").get(verifikasi([1, 2]), jsonku.getDataCore_2);
  app.route("/get-intel-core-i").get(verifikasi([1, 2]), jsonku.getDataCore_i);

  app.route("/insert-amd").post(verifikasi(1), jsonku.insertDataAMD);
  app.route("/update-amd").put(verifikasi(1), jsonku.updateDataAMD);
  app.route("/delete-amd").delete(verifikasi(1), jsonku.deleteDataAMD);

  app.route("/insert-intel").post(verifikasi(1), jsonku.insertDataIntel);
  app.route("/update-intel").put(verifikasi(1), jsonku.updateDataIntel);
  app.route("/delete-intel").delete(verifikasi(1), jsonku.deleteDataIntel);
};
