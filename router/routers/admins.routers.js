const express = require("express");
const adminsRouter = express.Router();
const { validationUserToCreate } = require("../middleware/user.middleware");
const {
  getAllAdmins,
  createAdmin,
} = require("../controllers/admins.controllers");

adminsRouter.get("/", getAllAdmins);
adminsRouter.post("/", validationUserToCreate, createAdmin);

module.exports = { adminsRouter };
