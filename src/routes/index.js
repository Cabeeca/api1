const express = require('express')
const router = express.Router()
const verifyJWT = require('../middlewares/authentication')
const singnupValidation = require('../validators/index')
const {
  indexProducts,
  showProduct,
  createProduct,
  updateProduct,
  destroyProduct
} = require('../controllers/ProductsController')

const { indexUsers, showUser, createUser, login, updateUser, destroyUser } =
  require('../controllers/UsersController')

router.get('/api/users', verifyJWT, indexUsers)
router.get('/api/users/:id', showUser)
router.post('/api/users', createUser)
router.post('/api/login', login)
router.patch('/api/users/:id', updateUser)
router.delete('/api/users/:id', destroyUser)

/*router.get('/api/products', indexProducts)
router.get('/api/products/:id', showProduct)
router.post('/api/products', createProduct)
router.patch('/api/products/:id', updateProduct)
router.delete('/api/products/:id', destroyProduct)
*/
module.exports = router
