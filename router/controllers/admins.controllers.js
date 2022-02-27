const {
  handleMongooseErrors,
} = require("../handleErrors/mongoose.handleErros");
const { Admin } = require("../models/admin.model");

function getAllAdmins(req, res) {
  res.send("getAllAdmins");
}

async function createAdmin(req, res) {
  try {
    const { name } = req.body;

    const newAdmin = new Admin({ name });
    const reciveNewAdmin = await newAdmin.save();
    res.status(200).send(reciveNewAdmin);
  } catch (error) {
    const mongooseErrorMessage = handleMongooseErrors(error);
    error.mongooseError = mongooseErrorMessage;
    console.log(error);

    res
      .status(error.statusCode || 500)
      .send(error.mongooseError || error.message);
  }
}

module.exports = { getAllAdmins, createAdmin };
