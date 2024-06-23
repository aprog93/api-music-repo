// /config/db.js

const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECTION);

    console.log("Conectado a la base de datos");
  } catch (error) {
    console.error("Error al conectar a la base de datos", error);
    process.exit(1);
  }
};

module.exports = connectDB;

// /config/db.js

// const mongoose = require("mongoose");
//
// const connectDB = async () => {
// try {
// await mongoose.connect(process.env.DB_CONNECTION);
//
// console.log("Conectado a la base de datos");
// } catch (error) {
// console.error("Error al conectar a la base de datos", error);
// process.exit(1);
// }
// };
//
// module.exports = connectDB;
//
