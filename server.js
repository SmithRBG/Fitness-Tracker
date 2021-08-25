const mongoose = require("mongoose");
const express = require("express");
const morgan = require("morgan");

const tracker = require("./models/fitnessSchema");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fitnessdb", { useNewUrlParser: true });

/* const data = {
  array: ["item1", "item2", "item3"],
  boolean: false,
  string:
    "Something goes here...?",
  number: 42
}; */

/* Example.create(data)
  .then(dbExample => {
    console.log(dbExample);
  })
  .catch(({ message }) => {
    console.log(message);
  });
 */