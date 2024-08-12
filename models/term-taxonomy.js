const { DataTypes } = require("sequelize");
const { sequelize } = require("../db");

const WpTermTaxonomy = sequelize.define("TermTaxonomy", {
  term_taxonomy_id: {
    type: DataTypes.BIGINT.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
  },
  term_id: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: false,
    defaultValue: 0,
  },
  taxonomy: {
    type: DataTypes.STRING(32),
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,  // longtext
    allowNull: false,
  },
  parent: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: false,
    defaultValue: 0,
  },
  count: {
    type: DataTypes.BIGINT,
    allowNull: false,
    defaultValue: 0,
  },
}, {
  tableName: "wp_term_taxonomy",
  timestamps: false,
});

module.exports = WpTermTaxonomy;
