const express = require("express");
const router = express.Router();

/**
 * Importando los controladores
 */
const {
  getItem,
  getItems,
  createItem,
  updateItem,
  deleteItem,
} = require("../controllers/tracks");

// Obteniendo detalles de un registro
router.get("/:id", getItem);

// Obteniendo todos los registros
router.get("/", getItems);

// Creando un registro
router.post("/", createItem);

// Actualizando un registro
router.put("/", updateItem);

// Eliminando un registro
router.delete("/", deleteItem);

module.exports = router;
