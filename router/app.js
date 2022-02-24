const express = require("express");
const app = express();
const cors = require("cors");
const { indexRouter } = require("./routes/index.routes");
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", indexRouter);

const PORT = 8080;

app.listen(PORT, () => console.log(`Server up and running on port ${PORT}`));
