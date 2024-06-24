const mongoose = require("mongoose");

// Se utiliza el asincronismo para mejorar su efectividad
const dbInit = async () => {

  /**
   * Declaracion de la variable (db_uri) 
   * haciendo referencia a la url de mongo 
   * mediante variables de entorno
   */
  const db_uri = process.env.DB_URI;

  /**
   * Validando la conexion con la DB
   * mediante tryCatch para implementar
   * validaciones mas robustas
   * 
   * ****** PENDIENTE A MODIFICACION ******
   */
  try {
    await mongoose.connect(db_uri);
    console.log("todo bien");
  } catch (err) {
    console.log("una mierda", err);
  }
};

// Se exporta el modulo para ser usado cuando se requiera
module.exports = dbInit;
