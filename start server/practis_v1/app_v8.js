const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const PORT = 8080;

app.listen(PORT, () => console.log(`server is up and running on port ${PORT}`));
