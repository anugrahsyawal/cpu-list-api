var express = require("express");
var auth = require("./auth");
const verifikasi = require("./verifikasi");
var router = express.Router();

// daftarkan menu registrasi
router.post("/cpu-list-api/v1/register", auth.registrasi);
router.post("/cpu-list-api/v1/login", auth.login);


module.exports = router;
