'use strict';
const { Model, Validator } = require('sequelize');
const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    toSafeObject() {
      // method will return an object with only the User instance information that is safe to save to a JWT, like id, username, and email
      const { id, username, email } = this; // context will be the User instance
      return { id, username, email };
    };

    validatePassword(password) {
      return bcrypt.compareSync(password, this.hashedPassword.toString())
      // returns true if there is a match with the User instance's hashedPassword
    };

    static getCurrentUserById(id) {
      return User.scope("currentUser").findByPk(id);
      // uses the currentUser scope to return a User with that id
    };

    // static async login({ credential, password }) {
    static async login({ email, password }) {
      const { Op } = require('sequelize');
      const user = await User.scope('loginUser').findOne({
        // searches for one User with the specified credential (either a username or an email
        where: {
          [Op.or]: {
            // username: credential,
            // email: credential
            email: email
          }
        }
      });
      // if user is found, validate the password using .validatePassword method
      if (user && user.validatePassword(password)) {
        // if password is valid, method will return user by using currentUser scope
        return await User.scope('currentUser').findByPk(user.id);
      }
    };

    // creates a user with the username, email, and hashedPassword
    static async signup({ username, email, password, firstName, lastName }) {
      const hashedPassword = bcrypt.hashSync(password);
      const user = await User.create({
        username,
        firstName,
        lastName,
        email,
        hashedPassword,
      });
      return await User.scope('currentUser').findByPk(user.id, {
        attributes: ['id', 'firstName', 'lastName', 'email']
      });
    };

    static associate(models) {
      // define association here
      User.hasMany(models.Room, {
        foreignKey: 'ownerId'
      })
      User.hasMany(models.Review, {
        foreignKey: 'userId'
      })
      User.hasMany(models.Reservation, {
        foreignKey: 'userId'
      })
    }
  };

  User.init(
    {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [4, 30],
          isNotEmail(value) {
            if (Validator.isEmail(value)) {
              throw new Error("Cannot be an email.");
            }
          }
        }
      },
      firstName: {
        type: DataTypes.STRING,
        // allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        // allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [3, 256]
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
    modelName: "User",
    defaultScope: {
      attributes: {
        exclude: ['hashedPassword', 'username', 'createdAt', 'updatedAt']
      }
    },
    scopes: {
      currentUser: {
        attributes: {
          exclude: ['hashedPassword']
        }
      },
      loginUser: {
        attributes: {}
      }
    }
  });
  return User;
};
