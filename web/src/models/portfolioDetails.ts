// models/portfolioDetails.js
import { DataTypes } from "sequelize";
import sequelize from "@/lib-db/db";
import { Users } from "./users";

export const PortfolioDetails = sequelize.define(
  "PortfolioDetails",
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

// Relation: A user can have many portfolios
Users.hasMany(PortfolioDetails);
PortfolioDetails.belongsTo(Users);
