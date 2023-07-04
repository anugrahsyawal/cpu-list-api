const jwt = require("jsonwebtoken");
const config = require("../config/secret");
const connection = require("../koneksi");
const mysql = require("mysql");

function verifikasi(roles) {
  return function (req, res, next) {
    // cek authorization header
    var tokenWithBearer = req.headers.authorization;
    if (tokenWithBearer) {
      var token = tokenWithBearer.split(" ")[1];
      // verifikasi
      jwt.verify(token, config.secret, function (err, decoded) {
        if (err) {
          return res
            .status(401)
            .send({ auth: false, message: "Token Tidak Terdaftar" });
        } else {
          var id_user = decoded.rows[0].id_user;
          var query = "SELECT role FROM user WHERE id_user = ?";
          connection.query(query, id_user, function (error, rows) {
            if (error) {
              console.log(error);
              return res.status(500).send("Terjadi kesalahan pada server");
            }
            if (rows.length == 1) {
              var userRole = rows[0].role;
              if (userRole == roles) {
                req.auth = decoded;
                next();
              } else {
                return res.status(401).send({
                  auth: false,
                  message: "Gagal mengotorisasi role anda",
                });
              }
            } else {
              return res
                .status(401)
                .send({ auth: false, message: "User tidak ditemukan" });
            }
          });
        }
      });
    } else {
      return res
        .status(401)
        .send({ auth: false, message: "Token Tidak Tersedia" });
    }
  };
}

module.exports = verifikasi;
