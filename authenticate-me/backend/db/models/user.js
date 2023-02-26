'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {

    // This method will return an object with only the User instance information that is safe to save to a a JWT
    toSafeObject(){
      const { id, username, email, firstName, lastName } = this
      return { id, username, email, firstName, lastName }
    }

    // This method will validate a password
    validatePassword(password){
      return bcrypt.compareSync(password, this.hashedPassword.toString())
    }

    // This static method returns a User with a particular id
    static getCurrentUserById(id){
      return User.scope('currentUser').findByPk(id)
    }

    // This static method will search for one User with the specified credential
    static async login({ credential, password }){
      const { Op } = require('sequelize')

      const user = await User.scope('authentication').findOne({
        where: {
          [Op.or]: {
            username: credential,
            email: credential
          }
        }
      })

      if(user && user.validatePassword(password)){
        return await User.scope('currentUser').findByPk(user.id)
      }
    }

    // This static method will sign up a user
    static async signup({ firstName, lastName, username, email, password }){
      const hashedPassword = bcrypt.hashSync(password)
      const user = await User.create({
        firstName,
        lastName,
        username,
        email,
        hashedPassword
      })
      return await User.scope('currentUser').findByPk(user.id)
    }








    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      // One To Many relationship between User and Groups
      User.hasMany(
        models.Group,
        { foreignKey: 'organizerId', onDelete: 'CASCADE', hooks: true }
      )

      // One To Many relationship between User and Attendances
      User.hasMany(
        models.Attendance,
        { foreignKey: 'userId', onDelete: 'CASCADE', hooks: true }
      )

      // One To Many relationship between User and Memberships
      User.hasMany(
        models.Membership,
        { foreignKey: 'userId', onDelete: 'CASCADE', hooks: true }
      )

      // Many To Many relationship between Users and Events
      User.belongsToMany(
        models.Event,
        { through: models.Attendance, foreignKey: 'userId', otherKey: 'eventId' }
      )


    }
  }
  User.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: [4, 30],
        isNotEmail(value){
          if(value.includes('@')){
            throw new Error('Cannot be an email.')
          }
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: [3, 256],
        isEmail: true
      }
    },
    hashedPassword: {
      type: DataTypes.STRING.BINARY,
      allowNull: false,
      validate: {
        len: [60, 60]
      }
    }
  }, {
    sequelize,
    modelName: 'User',
    defaultScope: {
      attributes: {
        exclude: ['hashedPassword', 'email', 'createdAt', 'updatedAt']
      }
    },
    scopes: {
      currentUser: {
        attributes: {
          exclude: ['hashedPassword']
        }
      },
      authentication: {
        attributes: {}
      },
      includeEmail: {
        attributes: ['firstName', 'lastName', 'email', 'username']
      }
    }
  });
  return User;
};