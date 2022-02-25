const express = require("express");

const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/sali-toam");

const app = express();
const cors = require("cors");
const adminsRouter = require("./routers/admins.routers");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/admins", adminsRouter);
// app.use("/users",usersRouter)
// app.use("/posts",postsRouter)
const PORT = 8080;
app.listen(PORT, () => console.log(`Server is up and running on PORT ${PORT}`));
