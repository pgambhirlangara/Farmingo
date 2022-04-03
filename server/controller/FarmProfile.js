const FarmProfile = require("../models/FarmProfile");
const Farmer = require("../models/Farmer");
const fs = require("fs");
const upload = require("../utils/upload");

const createFarmProfile = async (req, res) => {
  try {
    let farmer = await Farmer.findOne({ email: req.body.email });
    if (farmer) {
      const uploadImage = await upload(
        `${Date.now() + "" + req.body.farmName}`,
        req.body.image,
        "jpg"
      );
      const farmProfile = await FarmProfile.create({
        farmName: req.body.farmName,
        description: req.body.description,
        daysOfOperation: JSON.stringify(req.body.daysOfOperation),
        hoursOfOperation: req.body.hoursOfOperation,
        contact: req.body.contact,
        address: req.body.address,
        province: req.body.province,
        zipCode: req.body.zipCode,
        image: uploadImage,
        farmer,
        category: req.body.category
      });

      return res.status(201).json({
        message: "FarmProfile Created Succesfully",
        data: farmProfile,
      });
    } else {
      return res.status(401).json({
        message:
          "Farmer Not found, you should be a farmer to create a Farm Profile!",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

// Delete a post by id
const deleteFarmProfile = (req, res) => {
  const id = req.params.id;
  FarmProfile.findByIdAndDelete(id)
    .then((result) => {
      return res.status(200).json({
        message: "FarmProfile succesfully deleted",
        data: result,
      });
    })
    .catch((error) => {
      return res.status(500).json({
        message: error.message,
      });
    });
};

// Update data of post by id
const updateFarmProfile = (req, res) => {
  const id = req.params.id;

  FarmProfile.findOneAndUpdate({ _id: id }, req.body).then((result) => {
    res.status(200).json({
      message: "Succesfully updated FarmProfile",
      data: result,
    });
  });
};

// Get all farmers
const getAllFarms = (req, res) => {
  FarmProfile.find()
    .then((result) => {
      return res.status(200).json({
        message: "Succesfully fetched Farms",
        data: result,
      });
    })
    .catch((error) => {
      return res.status(500).json({
        message: error.message,
      });
    });
};

// Get post data by id
const getFarmById = (req, res) => {
  const id = req.params.id;

  FarmProfile.findById(id)
    .then((result) => {
      console.log(result);
      return res.status(200).json({
        message: `Farm found succesfully with id ${id}`,
        data: result,
      });
    })
    .catch((error) => {
      return res.status(404).json({
        message: error.message,
      });
    });
};

// Get farm data by name
const getFarmerByName = (req, res) => {
  const query = req.params.name;

  FarmProfile.find({
    $text: {
      $search: query,
    },
  })
    .then((result) => {
      return res.status(200).json({
        message: `Farm found succesfully`,
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
  getAllFarms,
  createFarmProfile,
  deleteFarmProfile,
  updateFarmProfile,
  getFarmById,
  getFarmerByName,
};
