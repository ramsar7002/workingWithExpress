const express = require("express");
const tourRouter = require("./routs/tourRouts");
//const userRouter = require("./routs/userRoutes");

const app = express();

app.use(express.json());
app.use("/", (req, res, next) => {
  console.log(new Date().toISOString());
  next();
});
app.use("/api/v1/tours", tourRouter);
//app.use("/api/v1/users", userRouter);
module.exports = app;
