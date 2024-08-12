const { DataTypes } = require("sequelize");
const { sequelize } = require("../db");

const FormField = sequelize.define(
  "FormField",
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    label: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    field_type: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    association: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    validators: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    weight: {
      type: DataTypes.INTEGER(5),
      allowNull: false,
      defaultValue: 0,
    },
    display_flags: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    field_data: {
      type: DataTypes.BLOB,
      allowNull: true,
    },
    shortname: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    tag: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  {
    tableName: "wp_wpbdp_form_fields",
    timestamps: false,
  }
);

module.exports = FormField;
