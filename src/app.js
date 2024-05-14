const express = require("express");
const path = require("path");
require("./db/conn");
const FormDetails = require("./models/data");
const app = express();
const port = 3000;

const htmlpath = path.join(__dirname, "../public");
app.use(express.static(htmlpath));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post("/submit", async (req, res) => {
  try {
    const data = new FormDetails({
      firstname: req.body.firstname,
      email: req.body.email,
      phoneno: req.body.phoneno,
      dob: req.body.dob,
      gender: req.body.gender,
      address1: req.body.address1,
      address2: req.body.address2,
      city: req.body.city,
    });
    const savedata = await data.save();
    console.log(savedata);
    res.redirect("/");
  } catch (err) {
    res.status(400).send();
  }
});

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(port, () => {
  console.log("server connected at port " + port + "localhost:3000");
});
