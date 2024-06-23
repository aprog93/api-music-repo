const mongoose = require("mongoose");

const dbInit = async () => {
  const db_uri = process.env.db_uri;
  try {
    await mongoose.connect(db_uri);
    console.log("todo bien");
  } catch (err) {
    console.log("una mierda");
  }
};

module.exports = dbInit;
