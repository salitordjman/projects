const express = require("express");
const router = express.Router();
const {
  getControlled,
  postControlled,
  putControlled,
  deleteControlled,
} = require("../controlled/index.controlled");
router.get("/", getControlled);
router.put("/", putControlled);
router.post("/", postControlled);
router.delete("/", deleteControlled);

module.exports = { indexRouter: router };
