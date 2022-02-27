const express = require("express");
const cors = require("cors");
const { connect } = require("mongoose");
const { adminsRouter } = require("./routers/admins.routers");

const app = express();

connect("mongodb://127.0.0.1:27017/sali-toam", handleMongooseConnection);
function handleMongooseConnection(error, mongooseConnectionObject) {
  if (error) return console.log(error.message);
  const { name, host, port } = mongooseConnectionObject;
  console.log({ name, host, port });
}

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/admins", adminsRouter);
// app.use("/users",usersRouter)
// app.use("/posts",postsRouter)

// constants always in capitalLetters

const PORT = 8080;
app.listen(PORT, () => console.log(`Server is up and running on PORT ${PORT}`));
