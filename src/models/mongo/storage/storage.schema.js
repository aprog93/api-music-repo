const mongoose = require("mongoose");

const StorageScheme = new mongoose.Schema(
  {
    url: { type: String },
    filname: { type: String },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.export = mongoose.model("storage", StorageScheme);
