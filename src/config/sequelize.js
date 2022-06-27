const Sequelize = require('sequelize')
const configDb = require('./database')

const dbConnection = new Sequelize(configDb)

module.exports = dbConnection
