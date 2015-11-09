/**
 * Auth
 *
 * @module      :: Model
 * @description :: Holds all authentication methods for a User
 * @docs        :: http://waterlock.ninja/documentation
 */

module.exports = {

  attributes: require('waterlock').models.auth.attributes({

    firstName: {
      type: 'string'
    },
    lastName: {
      type: 'string'
    },
    gender: {
      type: 'string'
    },
    timezone: {
      type: 'string'
    },
    // email: {
    //   type: 'email',
    //   unique: true
    // },
    // password: {
    //   type: 'STRING',
    //   minLength: 8
    // },
    // resetToken: {
    //   model: 'resetToken'
    // }

  }),

  beforeCreate: require('waterlock').models.auth.beforeCreate,
  beforeUpdate: require('waterlock').models.auth.beforeUpdate
};
