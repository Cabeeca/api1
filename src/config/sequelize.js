const Sequelize = require('sequelize')
const configDb = require('./database')

const sequelize = new Sequelize(configDb)

module.exports = sequelize