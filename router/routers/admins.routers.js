const express = require("express");
const router = express.Router();
const checkUserExist = require("../middleware/user.middleware");
const {
  getAllAdmins,
  postAdmins,
} = require("../controllers/admins.controllers");

router.get("/", getAllAdmins);
router.post("/", checkUserExist, postAdmins);

module.exports = router;
