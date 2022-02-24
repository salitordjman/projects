function getControlled(req, res) {
  res.send("Hello get");
}

function putControlled(req, res) {
  res.send("Hello put");
}

function postControlled(req, res) {
  res.send("Hello post");
}

function deleteControlled(req, res) {
  res.send("Hello delele");
}

module.exports = {
  getControlled,
  postControlled,
  putControlled,
  deleteControlled,
};
