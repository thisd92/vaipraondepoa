const { DataTypes } = require("sequelize");
const { sequelize } = require("../db");

const WpPostmeta = sequelize.define(
  "WpPostmeta",
  {
    meta_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    post_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    meta_key: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    meta_value: {
      type: DataTypes.TEXT("long"),
      allowNull: true,
    },
  },
  {
    tableName: "wp_postmeta",
    timestamps: false,
  }
);

module.exports = WpPostmeta;
