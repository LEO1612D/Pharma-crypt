const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    max: 100
  },
  email: {
    type: String,
    required: true,
    max: 255,
    min: 6
  },
  role: {
    type: String,
    required: true,
    max: 255
  },
  password: {
    type: String,
    required: true,
    max: 1024,
    min: 6
  },
  uid: {
    type: String,
    default: uuidv4()
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("User", userSchema);
