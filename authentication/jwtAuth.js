require("dotenv").config();
const jwt = require("jsonwebtoken");
const secretKey = process.env.SECRETKEY;

const authenticateJWT = (req, res, next) => {
  let token = req.headers["x-access-token"];
  if (!token) {
    return res.status(403).send({ message: "No token provided!" });
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: "Unauthorized!", success: false });
    }
    req.user = decoded;
    next();
  });
};

module.exports = authenticateJWT;
