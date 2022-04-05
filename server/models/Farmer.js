const mongoose = require("mongoose");

const FarmerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    contact: { type: "number" },
    city: { type: String },
    zipCode: { type: String },
    province: { type: String },
    password: { type: String, required: true },
    verified: { type: Boolean, required: true, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.models.Farmer || mongoose.model("Farmer", FarmerSchema);