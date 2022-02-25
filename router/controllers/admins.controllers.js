const newUser = require("../modules/users.model");

function getAllAdmins(req, res) {
  res.send("getgetgetget");
}

async function postAdmins(req, res) {
  const user = new newUser(req.body);
  try {
    await user.save();
    res.status(200).send(user);
  } catch (e) {
    res.status(500).send(e);
  }
}

module.exports = { getAllAdmins, postAdmins };
