const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    category: {
      type: String,
      required: true,
    },
    stock: {
      type: Number,
      required: true,
    },
    harvestDate: {
      type: Date,
    },
    price: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    hide: {
      type: Boolean
    },
    farmer: { type: mongoose.Schema.Types.ObjectId, ref: "Farmer" },
  },
  {timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);;
