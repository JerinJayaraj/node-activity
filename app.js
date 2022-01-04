const express = require("express");
const mongoose = require("mongoose");
// const cors = require("cors");
const app = express();
const BACK_END_PORT = 9000

require("dotenv/config");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(cors());

app.use("/api/album", require("./routes/albumRoutes"));
app.use("/api/song", require("./routes/songRoutes"));

//mongoDb connection
mongoose
  .connect('mongodb://localhost:27017/music')
  .then(() => console.log("Connected to database..."))
  .catch((err) => console.error("Could not connect to database ..."));

app.listen(BACK_END_PORT,()=>{
  console.log("Port listen to :"+ BACK_END_PORT)
});

module.exports = app