const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: { type: String },
    age: { type: Number },
    email: { type: String, unique: true },
    password: { type: String },
    role: { type: ["user", "admin"], default: "user" },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.export = mongoose.model("user", UserSchema);
