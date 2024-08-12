const { DataTypes } = require("sequelize");
const { sequelize } = require("../db");

const WpTerm = sequelize.define("Term", {
  term_id: {
    type: DataTypes.BIGINT.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING(200),
    allowNull: false,
  },
  slug: {
    type: DataTypes.STRING(200),
    allowNull: false,
  },
  term_group: {
    type: DataTypes.BIGINT,
    allowNull: false,
    defaultValue: 0,
  },
}, {
  tableName: "wp_terms",
  timestamps: false,
});

module.exports = WpTerm;
