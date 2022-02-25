const mongoose = require("mongoose");

const newUser = mongoose.Schema({
  name: {
    type: String,
  },
});

module.exports = mongoose.model("user", newUser);
