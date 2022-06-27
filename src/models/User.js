const user = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true, 
          validate: {
            isEmail: {
              message: 'Invalid Email!'
            }
          }
        },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    }
  }, {
    tableName: 'users'
  })

  return User
}

module.exports = user
