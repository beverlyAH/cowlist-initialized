const Sequelize = require('sequelize');

// Option 1: Passing parameters separately
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'db/cows.db'
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize

