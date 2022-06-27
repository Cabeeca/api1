const dbConnection = require('../config/sequelize')
const Sequelize = require('sequelize')
const SequelizeDataTypes = Sequelize.DataTypes

const User = require('./User')
const Product = require('./Product')

const user = User(dbConnection, SequelizeDataTypes)
const product = Product(dbConnection, SequelizeDataTypes)

const db = {
  user,
  product,
  dbConnection
}

module.exports = db
