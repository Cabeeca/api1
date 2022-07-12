const jwt = require('jsonwebtoken')
const SECRET = 'the-super-strong-secret'

function verifyJWT(req, res, next) {
  const token = req.headers['x-access-token']
  jwt.verify(token, SECRET, (err, decoded) => {
    if (err) return res.status(401).end()

    req.id = decoded.id
    next()
  })
}

module.exports = verifyJWT
