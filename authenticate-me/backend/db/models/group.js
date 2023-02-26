'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Group extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here


      // One To Many relationship between User and Groups
      Group.belongsTo(
        models.User,
        { foreignKey: 'organizerId' }
      )

      // One To Many relationship between Group and GroupImages
      Group.hasMany(
        models.GroupImage,
        { foreignKey: 'groupId', onDelete: 'CASCADE', hooks: true }
      )

      // One To Many relationship between Group and Venues
      Group.hasMany(
        models.Venue,
        { foreignKey: 'groupId', onDelete: 'CASCADE', hooks: true }
      )

      // One To Many relationship between Group and Events
      Group.hasMany(
        models.Event,
        { foreignKey: 'groupId', onDelete: 'CASCADE', hooks: true }
      )

      // One To Many relationship between Group and Memberships
      Group.hasMany(
        models.Membership,
        { foreignKey: 'groupId', onDelete: 'CASCADE', hooks: true }
      )

      // One To Many relationship between Group and GroupImages
      Group.hasMany(
        models.GroupImage,
        { foreignKey: 'groupId', onDelete: 'CASCADE', hooks: true }
      )

      // Many To Many relationship between Users and Groups
      Group.belongsToMany(
        models.User,
        { through: models.Membership, foreignKey: 'groupId', otherKey: 'userId' }
      )



    }
  }
  Group.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    organizerId: {
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING(60),
      allowNull: false
    },
    about: {
      type: DataTypes.STRING(254),
      allowNull: false,
      validate: {
        len: [50, 254]
      }
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    private: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Group',
  });
  return Group;
};