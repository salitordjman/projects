function callback(req, res) {
  const { phone, text, name, lastname } = req.query;
  const { id } = req.params;
  console.log({ phone, text, name, lastname, id });
  res.send("HHlllooo world");
}

module.exports = { callback };
