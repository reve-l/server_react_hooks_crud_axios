const express = require("express");
const cors = require("cors");


const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));


//call sync method
const db = require("./models");
db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

  /*
  In development, you may need to drop existing tables and re-sync database. Just use force: true as following code:
  db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
});
  */




// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to server application." });
});


routes=require('./routes/tutorial.routes');
app.use('/api/tutorials', routes);
// set port, listen for requests
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
