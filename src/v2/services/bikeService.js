const { customID } = require("../database/utils");
const bike = require("../database/bike")

const getAllBikes = async () => {
  try {
    const getAllBikes = await bike.getAllBikes();
    return getAllBikes;
  } catch (error) {
    throw error;
  }
};

const getBike = async(bikeId) => {
  try {
    const getBike = await bike.getBike(bikeId);
    return getBike;
  } catch (error) {
    throw error;
  }
};

const createNewBike = async(newBike) => {
  try {
    const createBike = {
      bikeId: await customID(),
      ...newBike,
    };
    const createdBike = await bike.createNewBike(createBike);
    return createdBike;
  } catch (error) {
    throw error;
  }
};

const updateBike = async(body, bikeId) => {
  try {
    const updateBike = await bike.updateBike(body, bikeId);
    return updateBike;
  } catch (error) {
    throw error;
  }
};

const deleteBike = async(bikeId) => {
  try {
    const deletedBike = await bike.deleteBike(bikeId);
    return deletedBike;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllBikes,
  getBike,
  createNewBike,
  updateBike,
  deleteBike,
};
