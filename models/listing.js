const { DataTypes } = require("sequelize");
const { sequelize } = require("../db");

const Listing = sequelize.define(
  "Listing",
  {
    listing_id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    fee_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    fee_price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
      defaultValue: 0.0,
    },
    fee_days: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: true,
      defaultValue: 0,
    },
    fee_images: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: true,
      defaultValue: 0,
    },
    expiration_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    is_recurring: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    is_sticky: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    subscription_id: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    subscription_data: {
      type: DataTypes.BLOB("long"),
      allowNull: true,
    },
    listing_status: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "unknown",
    },
    flags: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  {
    tableName: "wp_wpbdp_listings",
    timestamps: false,
  }
);

module.exports = Listing;
