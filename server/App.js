const express = require("express");
const app = express();
const morgan = require("morgan"); // morgan is used for printing logs on the console
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routerSignUp = require("./routes/signUp");
const routerSignIn = require("./routes/signIn");

mongoose.connect("mongodb://127.0.0.1/video-server", {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.Promise = global.Promise;

app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/signUp", routerSignUp);
app.use("/api/signIn", routerSignIn);

module.exports = app;
