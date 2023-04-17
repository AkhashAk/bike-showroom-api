const Bike = require("./bikeModel")

const getAllBikes = async () => {
  try {
    const result = await Bike.find({});
    return result;
  } catch (err) {
    throw err;
  }
};

const getBike = async (bId) => {
  try {
    const retrivedBike = await Bike.findOne({ bikeId: bId });
    if (!retrivedBike) {
      throw {
        status: 404,
        message: `Bike with ID: ${bId} doesn't exist`,
      };
    }
    return retrivedBike;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const createNewBike = async (newBike) => {
  try {
    // const isPresent = DB.bikes.findIndex((bike) => bike.bikeName == newBike.bikeName) > -1;
    const isPresent = await Bike.findOne({ bikeName: newBike.bikeName });
    if (isPresent) {
      throw {
        status: 400,
        message: `${newBike.bikeName} bike already exists`,
      };
    }
    // DB.bikes.push(newBike);
    const createdBike = await Bike.create(newBike);
    return createdBike;
  } catch (error) {
    throw { status: 500, message: error?.message || error };
  }
};

const updateBike = async (bike, bikeId) => {
  try {
    // const retrivedBike = DB.bikes.findIndex((bike) => bike.bikeId == bikeId);
    const retrivedBike = await Bike.findOne({ bikeId: bikeId });
    if (!retrivedBike) {
      throw {
        status: 404,
        message: `Bike with ID: ${bikeId} doesn't exist`,
      };
    }
    // DB.bikes[retrivedBike] = updatedBike;
    const updatedBike = await Bike.findOneAndUpdate({ bikeId: bikeId } , bike, {new: true} );
    return updatedBike;
  } catch (error) {
    throw { status: 500, message: error?.message || error };
  }
};

const deleteBike = async (bikeId) => {
  try {
    // const retrivedBike = DB.bikes.findIndex((bike) => bike.bikeId == bikeId);
    const retrivedBike = await Bike.findOne({ bikeId: bikeId });
    if (!retrivedBike) {
      throw {
        status: 404,
        message: `Bike with ID: ${bikeId} doesn't exist`,
      };
    }
    // DB.bikes.splice(retrivedBike, 1);
    const deletedBike = await Bike.findOneAndDelete({ bikeId: bikeId }, { new: true});
    return deletedBike;
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
