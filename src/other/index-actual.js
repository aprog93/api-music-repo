require('dotenv').config()
const express = require("express");
const cors = require("cors");
const app = express();
const dbInit = require("./config/mongo");

// Importa tus rutas y middlewares
const routes = require("./routes/");

// Eliminando el problema de cruzamiento de origen del navegador
app.use(cors());
app.use(express.json())

// Usa tus rutas de autenticación
app.use("/api", routes);

const port = 3000;

app.listen(port, () => {
  console.log(`Express corriendo por el puerto ${port}`);
});

dbInit()
