const Sequelize = require('sequelize')
const dbConnection = require('../database/db')

const User = dbConnection.define('user', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING(40),
    allowNull: false
  },
  email: {
    type: Sequelize.STRING(50),
    allowNull: false,
    unique: true,
    validate: {
      isEmail: 'This field must be a email!'
    }
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

//User.sync({ force: true })

module.exports = User
