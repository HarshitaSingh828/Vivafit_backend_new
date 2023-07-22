// require('dotenv').config();
const express = require('express');
const cors = require('cors');
// const path = require("path");
const routes = require("./routes");
const dotenv = require('dotenv');
dotenv.config({ path: "./.env" });
const db = require("./config/connection");
db();
const PORT =  8000;
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);
  app.listen(PORT, () => {
    console.log(`server running on port ${PORT}!`);
  });
