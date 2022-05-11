const Sequelize = require("sequelize")
const dotenv = require("dotenv")

dotenv.config()

module.exports = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    dialect: "mysql",
    dialectOptions: {
      // Your mysql2 options here
    }
  }
)
