const express = require("express");
const cors = require("cors");
const app = express();
const dbInit = require("./config/mongo");

app.use(cors());

const port = 3000;

app.listen(port, () => {
  console.log(`Express corriendo por el puerto ${port}`);
});

dbInit()
