const { product } = require('../models')

const indexProducts = async (req, res) => {
  const products = await product.findAll({
    attributes: { exclude: ['createdAt', 'updatedAt'] }
  })
  res.json(products)
}

const showProduct = async (req, res) => {
  const products = await product.findAll({
    attributes: { exclude: ['createdAt', 'updatedAt'] },
    where: { id: req.params.id }
  })
  res.json(products)
}

const createProduct = async (req, res) => {
  await product.create({ name: req.body.name, price: req.body.price })
  res.status(201).send('Product registered successfully!')
}

const updateProduct = async (req, res) => {
  await product.update(
    { name: req.body.name, price: req.body.price },
    { where: { id: req.params.id } }
  )
  res.status(200).send('Product updated sucessfully!')
}

const destroyProduct = async (req, res) => {
  await product.destroy({ where: { id: req.params.id } })
  res.status(200).send('Product deleted sucessfully!')
}

module.exports = {
  indexProducts,
  showProduct,
  createProduct,
  updateProduct,
  destroyProduct
}
