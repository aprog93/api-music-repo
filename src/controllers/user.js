/**
 * Obtener detalles de un registro
 * @param {*} req
 * @param {*} res
 */
const getItem = (req, res) => {};

/**
 * Obtener una lista de registros
 * @param {*} req
 * @param {*} res
 */
const getItems = (req, res) => {
  const data = ["hola", "mundo"];
  res.send({ data });
};

/**
 * Crear un registro
 * @param {*} req
 * @param {*} res
 */
const createItem = (req, res) => {};

/**
 * Actualizar un registro
 * @param {*} req
 * @param {*} res
 */
const updateItem = (req, res) => {};

/**
 * Eliminar un registro
 * @param {*} req
 * @param {*} res
 */
const deleteItem = (req, res) => {};

module.exports = { getItem, getItems, createItem, updateItem, deleteItem };
