const bikeService = require("../services/bikeService");

const getAllBikes = async (req, res) => {
  try {
    const getAllBikes = await bikeService.getAllBikes();
    res.send({ status: "OK", data: getAllBikes });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};
const getBike = async (req, res) => {
  const {
    params: { bikeId },
  } = req;
  try {
    if (!bikeId) {
      res.status(400).send({
        status: "FAILED",
        data: { error: "Bike ID can not be empty!" },
      });
    }
    const getBike = await bikeService.getBike(bikeId);
    res.send({ status: "OK", data: getBike });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};
const createNewBike = async (req, res) => {
  const { body } = req;
  if (
    !body.bikeName ||
    !body.bikeBrand ||
    !body.bikePrice ||
    !body.bikeColour
  ) {
    res.status(400).send({
      status: "FAILED",
      data: {
        error: "Request body missing some of the properties",
      },
    });
    return;
  }
  try {
    const bike = {
      bikeName: body.bikeName,
      bikeBrand: body.bikeBrand,
      bikePrice: body.bikePrice,
      bikeColour: body.bikeColour,
    };
    const createNewBike = await bikeService.createNewBike(bike);
    res.status(201).send({ status: "OK", data: createNewBike });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};
const updateBike = async (req, res) => {
  try {
    const {
      body,
      params: { bikeId },
    } = req;
    if (!bikeId) {
      res.status(400).send({
        status: "FAILED",
        data: { error: "Bike ID can not be empty!" },
      });
    }
    const updateBike = await bikeService.updateBike(body, bikeId);
    res.status(202).send({ status: "OK", data: updateBike });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};
const deleteBike = async (req, res) => {
  const {
    params: { bikeId },
  } = req;
  if (!bikeId) {
    res
      .status(400)
      .send({ status: "FAILED", data: { error: "Bike ID can not be empty!" } });
  }
  try {
    const deleteBike = await bikeService.deleteBike(bikeId);
    res
      .status(200)
      .send({ status: `Deleted the bike with ID: ${bikeId}`, data: deleteBike });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

module.exports = {
  getAllBikes,
  getBike,
  createNewBike,
  updateBike,
  deleteBike,
};
