const Sequelize = require('sequelize')
const sequelize = require('./index.js')
const uuid = require('uuid')

const Cow = sequelize.define('cow', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING
  },
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE
})

module.exports = {
  Cow,
  getCowsFromDatabase: (callback) => {
    return Cow.findAll({})
    .then(data => {
      callback(null, data)
    })
    .catch(err => {
      callback(err)
    })
  },
  saveCowToDatabase: (params, callback) => {
    return Cow.create({
      id: uuid(),
      name: params.name,
      description: params.description
    })
    .then(data => {
      callback(null, data)
    })
    .catch(err => {
      callback(err)
    })
  },
  editCowInDatabase: (params, callback) => {
    return Cow.update({
      name: params.name,
      description: params.description
    }, {
      where: {
        id: params.id
      }
    })
    .then(data => {
      callback(null, data)
    })
    .catch(err => {
      callback(err)
    })
  },
  deleteCowFromDatabase: (params, callback) => {
    return Cow.destroy({
      where: {
        id: params.id
      }
    })
    .then(data => {
      callback(null, data)
    })
    .catch(err => {
      callback(err)
    })
  },
  deleteAllCowsFromDatabase: (callback) => {
    return Cow.destroy({
      where: {}
    })
    .then(data => {
      callback(null, data)
    })
    .catch(err => {
      callback(err)
    })
  }
}