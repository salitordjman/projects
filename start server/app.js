const express = require("express");
const { indexRouter } = require("./routes/index.routes");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.get / app.post / app.put / app.delete / app.patch
// all this funcitons are a functions with a meaning you can use only app.post to do evetything but
// you want to use all this methods because they have meaning when you want to update create fetch or delete something from the DB or the server

const rootPath = "/";

app.use(rootPath, indexRouter);

const PORT = 8080;
app.listen(PORT, () => console.log(`server is up and running on port ${PORT}`));

// http://localhost:8080
