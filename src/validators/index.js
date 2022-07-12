const { body, validationResult } = require('express-validator');

function singnupValidation(req, res, next){
  
}

/*exports.loginValidation = [
  check('email', 'Please include a vaid email!')
    .isEmail()
    .normalizeEmail({ gmail_remove_dots: true }),
  check('password', 'Password must be 8 or more characters').isLength({
    min: 8
  })
]*/

module.exports = singnupValidation