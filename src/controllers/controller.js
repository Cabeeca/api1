const { user, product } = require('../models')
const { body, check, validationResult } = require('express-validator')
const {
  singnupValidation,
  loginValidation
} = require('../validators/validator')
const bcrypt = require('bcryptjs')

const indexUsers = async (req, res) => {
  const users = await user.findAll({
    attributes: { exclude: ['createdAt', 'updatedAt'] }
  })
  res.status(200).json(users)
}

const showUser = async (req, res) => {
  const users = await user.findAll({
    attributes: { exclude: ['createdAt', 'updatedAt'] },
    where: { id: req.params.id }
  })
  res.status(200).json(users)
}

const createUser = async (req, res) => {
  const users = await user.findAll({
    where: { email: req.body.email }
  })
  if (users.length) {
    return res.status(409).send({
      message: 'This user is already in use!'
    })
  } else {
    //Username is available
    bcrypt.hash(req.body.password, 10, async (err, hash) => {
      if (err) {
        return res.status(500).send({ msg: err })
      }
      //Has hashed password => add to DB
      try {
      await user.create({
        name: req.body.name,
        email: req.body.email,
        password: hash
      })} catch { err }
      return res.status(201).send({
        message: 'User registered successfully'
      })
    })
  }
}

const loginUser = async (req, res) => {}

const updateUser = async (req, res) => {
  await user.update(
    { name: req.body.name, email: req.body.email },
    { where: { id: req.params.id } }
  )
  res.status(200).send('User updated sucessfully!')
}

const destroyUser = async (req, res) => {
  await user.destroy({ where: { id: req.params.id } })
  res.status(200).send('User deleted sucessfully!')
}

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
  indexUsers,
  showUser,
  createUser,
  updateUser,
  destroyUser,
  indexProducts,
  showProduct,
  createProduct,
  updateProduct,
  destroyProduct
}
