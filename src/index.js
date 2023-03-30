const express = require("express");
const mongoose = require("mongoose");
const DB = require("./v2/database/DB");

const app = express();
const v1BikeRouter = require("./v1/routes/bikeRoutes");
const v2BikeRouter = require("./v2/routes/bikeRoutes");

app.use(express.json());
app.use("/api/v1/bikes", v1BikeRouter);
app.use("/api/v2/bikes", v2BikeRouter);

//DB Config
mongoose.set("strictQuery", false);
mongoose
  .connect(DB.MongoUri)
  .then(() => {
    console.log("connected to MongoDB");
    app.listen(3000, console.log(`Server started ar port 3000`));
  })
  .catch((error) => {
    console.error(error);
  });