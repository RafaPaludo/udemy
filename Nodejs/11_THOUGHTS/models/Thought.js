const { DataTypes } = require("sequelize");
const db = require('../db/conn');

// USER
const User = require('./User');

const Thought = db.define("Thought", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    required: false
  }
});

Thought.belongsTo(User);
User.hasMany(Thought);

module.exports = Thought;