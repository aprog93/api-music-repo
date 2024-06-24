const { tracksModel } = require("../models/");

/**
 * Obtener detalles de un registro
 * @param {*} req
 * @param {*} res
 */
const getItem = async (req, res) => {};

/**
 * Obtener una lista de registros
 * @param {*} req
 * @param {*} res
 */
const getItems = async (req, res) => {
  const data = await tracksModel.find({});
  res.send({ data });
};

/**
 * Crear un registro
 * @param {*} req
 * @param {*} res
 */
const createItem = async (req, res) => {
  const { body } = req;
  console.log(body);
  const data = await tracksModel.create(body)
  res.send({data})
};

/**
 * Actualizar un registro
 * @param {*} req
 * @param {*} res
 */
const updateItem = async (req, res) => {};

/**
 * Eliminar un registro
 * @param {*} req
 * @param {*} res
 */
const deleteItem = async (req, res) => {};

module.exports = { getItem, getItems, createItem, updateItem, deleteItem };
