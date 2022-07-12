const Sequelize = require('sequelize')

const dbConnection = new Sequelize('df1hr', 'vettori', 'minhasenha@db', {
  host: 'localhost',
  dialect: 'postgres'
})

try {
  dbConnection.authenticate()
  console.log('Connection OK')
} catch (error) {
  console.error('Connection ERROR')
}

module.exports = dbConnection
