const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const SECRET = 'the-super-strong-secret'

const indexUsers = async (req, res) => {
  const users = await User.findAll()
  res.status(200).json(users)
}

const showUser = async (req, res) => {
  const users = await User.findAll({
    where: { id: req.params.id }
  })
  res.status(200).json(users)
}
const createUser = async (req, res) => {
  const users = await User.findAll({
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
        return res.status(500).json({ msg: err })
      }
      //Has hashed password => add to DB

      await User.create({
        name: req.body.name,
        email: req.body.email,
        password: hash
      })
      return res.status(201).send({
        message: 'User registered successfully'
      })
    })
  }
}

const login = async (req, res) => {
  const users = await User.findAll({
    where: { email: req.body.email }
  })
  if (!users.length) {
    return res.status(409).send({
      message: 'Email is incorrect!'
    })
  }
  bcrypt.compare(req.body.password, users[0]['password'], (bErr, bResult) => {
    if (bErr) {
      throw bErr
      return res.status(401).send({
        message: 'Password is incorrect!'
      })
    }
    if (bResult) {
      const token = jwt.sign({ id: users[0].id }, SECRET, {
        expiresIn: '1h'
      })
      return res.status(200).send({
        message: 'Logged in!',
        auth: true,
        token,
        user: users[0]
      })
    }
    return res.status(401).send({
      message: 'Password is incorrect!'
    })
  })
}

const updateUser = async (req, res) => {
  await User.update(
    { name: req.body.name, email: req.body.email },
    { where: { id: req.params.id } }
  )
  res.status(200).send('User updated sucessfully!')
}

const destroyUser = async (req, res) => {
  await User.destroy({ where: { id: req.params.id } })
  res.status(200).send('User deleted sucessfully!')
}

module.exports = {
  indexUsers,
  showUser,
  createUser,
  login,
  updateUser,
  destroyUser
}
