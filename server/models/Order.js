const mongoose = require("mongoose");

const Order = new mongoose.Schema(
  {
    price: { type : String, required : true},
    customer: { type: mongoose.Schema.Types.ObjectId, ref: "Customer" },
    products: [{ productName: String, amount: Number, price: Number }],
    farm: { type: mongoose.Schema.Types.ObjectId, ref: "FarmerProfile" },
  },
  { collection: "order-data", timestamps: true }
);

const model = mongoose.model("orderData", Order);

module.exports = model;
