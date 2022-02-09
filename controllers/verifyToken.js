const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

let secretCode = "yx9TUnTIA^luh&M6z82epT8*NaPg^xBWD!KpDtR&jp2CNeexK&";

function verifyToken(req, res, next) {
    const bearerHeader = req.headers['authorization'];
    if(typeof bearerHeader !== 'undefined') {
      const bearer = bearerHeader.split(' ');
      const bearerToken = bearer[1];
      req.token = bearerToken;
      jwt.verify(req.token, secretCode , (err, authData) => {
          if(err) {
            return res.status(403);
          }
          else { 
            next();
          }
        });
    }
    
    else{
        return res.status(403).json({
            erreur: "token not found",
          });
    }
  }
exports.verifyToken= verifyToken ;
