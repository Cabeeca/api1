const sequelize = require('../config/sequelize')
const Sequelize = require('sequelize')

const User = require('./User')
const Product = require('./Product')

const user = User(sequelize, Sequelize.DataTypes)
const product = Product(sequelize, Sequelize.DataTypes) 

const db = {
    user,
    product,
    sequelize
}

module.exports = db