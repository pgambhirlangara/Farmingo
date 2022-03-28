const mongoose = require("mongoose");

const Order = new mongoose.Schema(
  {
    farm: { type: String, required: true },
    state: { type: String, required: true },
    customer: { type: Number, required: true },
    products: [{ productName: String, amount: Number, price: Number }],
  },
  { collection: "order-data", timestamps: true }
);

const model = mongoose.model("orderData", Order);

module.exports = model;
