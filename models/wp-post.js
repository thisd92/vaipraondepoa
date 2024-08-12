const { DataTypes } = require("sequelize");
const { sequelize } = require("../db");

const WpPost = sequelize.define(
  "WpPost",
  {
    ID: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    post_author: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    post_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    post_date_gmt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    post_content: {
      type: DataTypes.TEXT("long"),
      allowNull: false,
    },
    post_title: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    post_excerpt: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    post_status: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "publish",
    },
    comment_status: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "open",
    },
    ping_status: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "open",
    },
    post_password: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    post_name: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    to_ping: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    pinged: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    post_modified: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    post_modified_gmt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    post_content_filtered: {
      type: DataTypes.TEXT("long"),
      allowNull: false,
    },
    post_parent: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    guid: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    menu_order: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    post_type: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "post",
    },
    post_mime_type: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    comment_count: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0,
    },
  },
  {
    tableName: "wp_posts",
    timestamps: false,
  }
);

module.exports = WpPost;
