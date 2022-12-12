
import mysql from "mysql2";

export const db = mysql.createConnection({
    host: "localhost",
    user: "cea4",
    password: "",
    database: "reacthookscrud"
})


//ANCIEN CODE..
//::dgbDi12345
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