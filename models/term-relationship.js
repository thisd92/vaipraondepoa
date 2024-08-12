const { DataTypes } = require("sequelize");
const { sequelize } = require("../db");

const WpTermRelationship = sequelize.define("TermRelationship", {
  object_id: {
    type: DataTypes.BIGINT.UNSIGNED,
    primaryKey: true,
    allowNull: false,
    defaultValue: 0,
  },
  term_taxonomy_id: {
    type: DataTypes.BIGINT.UNSIGNED,
    primaryKey: true,
    allowNull: false,
    defaultValue: 0,
  },
  term_order: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
}, {
  tableName: "wp_term_relationships",
  timestamps: false,
});

module.exports = WpTermRelationship;
