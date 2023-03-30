const DB = require("./db.json");
const { saveToDB } = require("./utils");

const getAllBikes = () => {
  try {
    return DB.bikes;
  } catch (error) {
    throw { status: 500, message: error };
  }
};

const getBike = (bikeId) => {
  try {
    const retrivedBike = DB.bikes.find((bike) => bike.bikeId == bikeId);
    if (!retrivedBike) {
      throw {
        status: 404,
        message: `Bike with ID: ${bikeId} doesn't exist`,
      };
    }
    return retrivedBike;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const createNewBike = (newBike) => {
  try {
    const isPresent =
      DB.bikes.findIndex((bike) => bike.bikeName == newBike.bikeName) > -1;
    if (isPresent) {
      throw {
        status: 400,
        message: `${newBike.bikeName} bike already exists`,
      };
    }
    DB.bikes.push(newBike);
    saveToDB(DB);
    return newBike;
  } catch (error) {
    throw { status: 500, message: error?.message || error };
  }
};

const updateBike = (bike, bikeId) => {
  try {
    const retrivedBike = DB.bikes.findIndex((bike) => bike.bikeId == bikeId);
    if (retrivedBike === -1) {
      throw {
        status: 404,
        message: `Bike with ID: ${bikeId} doesn't exist`,
      };
    }
    const updatedBike = {
      ...DB.bikes[retrivedBike],
      ...bike,
    };
    DB.bikes[retrivedBike] = updatedBike;
    saveToDB(DB);
    return updatedBike;
  } catch (error) {
    throw { status: 500, message: error?.message || error };
  }
};

const deleteBike = (bikeId) => {
  try {
    const retrivedBike = DB.bikes.findIndex((bike) => bike.bikeId == bikeId);
    if (retrivedBike === -1) {
      throw {
        status: 404,
        message: `Bike with ID: ${bikeId} doesn't exist`,
      };
    }
    DB.bikes.splice(retrivedBike, 1);
    saveToDB(DB);
    return DB.bikes[retrivedBike];
  } catch (error) {
    throw { status: 500, message: error?.message || error };
  }
};

module.exports = {
  getAllBikes,
  getBike,
  createNewBike,
  updateBike,
  deleteBike,
};
