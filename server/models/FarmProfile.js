const mongoose = require("mongoose");

const FarmerProfile = new mongoose.Schema(
  {
    farmName: { type: String, required: true },
    hoursOfOperation: { type: Number, required: true },
    contact: { type: Number, required: true},
    daysOfOperation: { type: String, required: true},
    hoursOfOperation: { type: String, required: true},
    zipCode: { type: String },
    province: { type: String },
    description: { type: String},
    address: { type: String }, 
    image: { type: String},
    farmer: { type: mongoose.Schema.Types.ObjectId, ref: "Farmer" },
    category: { type: String, required: true}
  },
  { timestamps: true }
);

module.exports = mongoose.models.FarmerProfile || mongoose.model("FarmerProfile", FarmerProfile);