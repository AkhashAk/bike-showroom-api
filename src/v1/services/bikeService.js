const bike = require("../database/bike");
const { v4: uuid } = require("uuid");
const { customID } = require("../database/utils");

const getAllBikes = () => {
  try {
    const getAllBikes = bike.getAllBikes();
    return getAllBikes;
  } catch (error) {
    throw error;
  }
};

const getBike = (bikeId) => {
  try {
    const getBike = bike.getBike(bikeId);
    return getBike;
  } catch (error) {
    throw error;
  }
};

const createNewBike = (newBike) => {
  try {
    const createBike = {
      ObjectId: uuid(),
      bikeId: customID(),
      ...newBike,
    };
    const createdBike = bike.createNewBike(createBike);
    return createdBike;
  } catch (error) {
    throw error;
  }
};

const updateOneBike = (body, bikeId) => {
  try {
    const updateBike = bike.updateBike(body, bikeId);
    return updateBike;
  } catch (error) {
    throw error;
  }
};

const deleteBike = (bikeId) => {
  try {
    const deletedBike = bike.deleteBike(bikeId);
    return deletedBike;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllBikes,
  getBike,
  createNewBike,
  updateOneBike,
  deleteBike,
};
