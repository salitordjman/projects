const express = require("express");
const { callback } = require("../controllers/index.controllers");
const router = express.Router();

router.get("/:id", callback);

module.exports = { indexRouter: router };
