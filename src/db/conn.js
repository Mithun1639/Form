const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/Form")
  .then(() => {
    console.log("connection succuss");
  })
  .catch((err) => {
    console.log(err);
  });
