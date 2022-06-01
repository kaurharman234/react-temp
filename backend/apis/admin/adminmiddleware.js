const jwt = require('jsonwebtoken')
module.exports = (req,res,next) => {
  const token = req.headers['authorization']
  if (token) {
    // verifies secret and checks exp
    jwt.verify(token, 'parking', function(err, decoded) {
        if (err) {          
            return res.json({"status": false, "message": 'Unauthorized access.' });
        }
        req.decoded = decoded;
        next()
    });
  } 
  else {
    return res.json({
        status:403,
        success:false,
        message:"UnAutorized Token Invalid"
    });
  }
}