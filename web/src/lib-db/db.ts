import { Sequelize } from "sequelize";
import { config } from "dotenv";
import mysql2 from "mysql2";

config();

// Ensure that environment variables are available
const {
  MYSQL_DATABASE = "",
  MYSQL_USER = "",
  MYSQL_PASSWORD,
  MYSQL_HOST,
} = process.env;

// Set up a Sequelize connection to MySQL
const sequelize = new Sequelize(MYSQL_DATABASE, MYSQL_USER, MYSQL_PASSWORD, {
  host: MYSQL_HOST,
  dialect: "mysql",
  dialectModule: mysql2,
});

export default sequelize;
