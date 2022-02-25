const mongoose = require("mongoose");

const newUser = require("../modules/users.model");

const checkUserExist = async (req, res, next) => {
  try {
    const user = await newUser.exists(req.body);
    if (user) {
      console.log("This user already exists");
      throw new Error("This user already exists");
    }
    next();
  } catch (e) {
    res.status(405).send(e);
  }
};
module.exports = checkUserExist;
