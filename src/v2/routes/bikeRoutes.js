const express = require("express");
const bikeController = require("../controllers/bikeController");
const router = express.Router();

router.get("/", bikeController.getAllBikes);

router.get("/:bikeId", bikeController.getBike);

router.post("/", bikeController.createNewBike);

router.patch("/:bikeId", bikeController.updateBike);

router.delete("/:bikeId", bikeController.deleteBike);

module.exports = router;