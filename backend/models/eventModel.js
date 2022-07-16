const mongoose = require("mongoose");

const eventSchema = mongoose.Schema(
  {
    text: {
      type: String,
      requires: [true, "Please add text value"],
    },
    location:{
      type: String,
      required: [true, "Please add location value"],
    },
    imageurl: {
      type: String,
      required: [true, "Please add image url value"],
    },
    website:{
      type: String,
      required: [true, "Please add website value"],
    },
    date: {
      type: Date,
      required: [true, "Please add date value"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Event',eventSchema)