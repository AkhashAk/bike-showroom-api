const bikeService = require("../services/bikeService");

const getAllBikes = (req, res) => {
  try {
    const getAllBikes = bikeService.getAllBikes();
    res.send({ status: "OK", data: getAllBikes });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};
const getBike = (req, res) => {
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
    const getBike = bikeService.getBike(bikeId);
    res.send({ status: "OK", data: getBike });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};
const createNewBike = (req, res) => {
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
    const createNewBike = bikeService.createNewBike(bike);
    res.status(201).send({ status: "OK", data: createNewBike });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};
const updateBike = (req, res) => {
  try {
    const {
      body,
      params: { bikeId },
    } = req;
    if (!bikeId) {
      res
        .status(400)
        .send({
          status: "FAILED",
          data: { error: "Bike ID can not be empty!" },
        });
    }
    const updateBike = bikeService.updateOneBike(body, bikeId);
    res.status(202).send({ status: "OK", data: updateBike });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};
const deleteBike = (req, res) => {
  const {
    params: { bikeId },
  } = req;
  if (!bikeId) {
    res
      .status(400)
      .send({ status: "FAILED", data: { error: "Bike ID can not be empty!" } });
  }
  try {
    const deleteBike = bikeService.deleteBike(bikeId);
    res.status(204).send({ status: "OK", data: deleteBike });
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
