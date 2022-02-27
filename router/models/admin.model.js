const { Schema, model } = require("mongoose");

const adminSchema = new Schema({
  name: { type: String, unique: true },
});

const Admin = model("admins", adminSchema);

module.exports = { Admin };
// class Toam {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// const toamInstance = Toam("toamCohen", 22);
// console.log(toam);
