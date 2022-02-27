const { Admin } = require("../models/admin.model");

const validationUserToCreate = async (req, res, next) => {
  try {
    const { name } = req.body;
    // const isUser = await Admin.exists({ name }); // return bool
    // if (isUser) throw new Error("This user already exists");
  } catch (e) {
    e.statusCode = 405;
    next(e);
  } finally {
    next();
  }
};
module.exports = { validationUserToCreate };
