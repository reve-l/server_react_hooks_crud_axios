
import mysql from "mysql"

export const db = mysql.createConnection({
    HOST: "localhost",
    USER: "root",
    PASSWORD: "root",
    DATABASE: "reacthookscrud"
})


//ANCIEN CODE..
//::
/*module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "root",
    DB: "reacthookscrud",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };*/