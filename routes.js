"use strict";

module.exports = function (app) {
  var jsonku = require("./controller");

  app.route("/").get(jsonku.index);

  app.route("/tampil").get(jsonku.tampilsemuaam4);

  app.route("/tampil/:seri").get(jsonku.tampilam4tertentu);
};
