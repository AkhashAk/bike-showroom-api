const Bike = require("../database/bikeModel");

const customID = async() => {
  const ids = [];
  const btemp = (await Bike.find({})).filter(bike => ids.push(bike.bikeId));
  return Math.max(...ids)+1;
};

module.exports = {
  customID
};
