const express = require('express')
const router = express.Router()
const {
  indexProducts,
  showProduct,
  createProduct,
  updateProduct,
  destroyProduct
} = require('../controllers/ProductsControllers')

const { indexUsers, showUser, createUser, login, updateUser, destroyUser } =
  require('../controllers/UsersControllers')

router.get('/api/users', indexUsers)
router.get('/api/users/:id', showUser)
router.post('/api/users', createUser)
router.patch('/api/users/:id', updateUser)
router.delete('/api/users/:id', destroyUser)

router.get('/api/products', indexProducts)
router.get('/api/products/:id', showProduct)
router.post('/api/products', createProduct)
router.patch('/api/products/:id', updateProduct)
router.delete('/api/products/:id', destroyProduct)

module.exports = router
