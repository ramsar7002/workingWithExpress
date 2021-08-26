const fs = require("fs");
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/../data/tours-simple.json`)
);

exports.checkId = (req, res, next) => {
  const id = +req.params.id;
  const index = tours.find((tour) => tour.id === id);
  if (!index) {
    return res.status(404).json({
      status: "failed",
      message: "ID not found",
    });
  }
  next();
};

exports.getAllTours = (req, res) => {
  console.log(tours);
  res.status(200).json({
    status: "success",
    data: {
      tours,
    },
  });
};

exports.getSpecificTour = (req, res) => {
  res.send("");
};
