const tourController = require("../controllers/tourController");
const express = require("express");

const router = express.Router();

router.param("id", tourController.checkId);

router.route("/").get(tourController.getAllTours);
router.route("/:id").get(tourController.getSpecificTour);

module.exports = router;
