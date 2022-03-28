const Order = require("../models/order");

// Create new Order
const createOrder = async (req, res) => {
  try {
    const output = await Order.create({
      farm: req.body.farm,
      state: req.body.state,
      customer: req.body.customer,
    });

    return res.status(200).json({
      data: output,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const getOrders = (req, res) => {
  Order.find()
    .then((result) => {
      return res.status(200).json({
        data: result,
      });
    })
    .catch((error) => {
      return res.status(500).json({
        message: error.message,
      });
    });
};

const updateOrder = (req, res) => {
  const id = req.params.id;

  Order.findOneAndUpdate({ _id: id }, req.body).then((result) => {
    res.status(200).json({
      data: result,
    });
  });
};

const deleteOrder = (req, res) => {
  const id = req.params.id;
  Order.findByIdAndDelete(id)
    .then((result) => {
      return res.status(200).json({
        message: "Order succesfully delete",
        data: result,
      });
    })
    .catch((error) => {
      return res.status(500).json({
        message: error.message,
      });
    });
};

const getOrderById = (req, res) => {
  const id = req.params.id;
  Order.findById(id)
    .then((result) => {
      return res.status(200).json({
        message: `Order found succesfully with id ${id}`,
        data: result,
      });
    })
    .catch((error) => {
      return res.status(404).json({
        message: error.message,
      });
    });
};

module.exports = {
  createOrder,
  getOrders,
  updateOrder,
  deleteOrder,
  getOrderById,
};
