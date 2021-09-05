const mongoose = require("mongoose");
const express = require("express");
const morgan = require("morgan");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/FitnessTracker", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

// routes
app.use(require("./routes/htmlroutes"));
app.use(require("./routes/jsroutes"));
app.use(require("./models/fitnessSchema"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});