const mongoose = require("mongoose");

const bikeSchema = mongoose.Schema(
  {
    bikeId: {
      type: Number,
    },
    bikeName: {
      type: String,
      required: [true, "Please enter a bike name"],
    },
    bikeBrand: {
      type: String,
    },
    bikePrice: {
      type: Number,
    },
    bikeColour: {
      type: String,
    },
  },
  { versionKey: false }
);

const Bike = mongoose.model("Bike", bikeSchema);
module.exports = Bike;
