const Farmer = require('../models/farmer');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Register farmer
const registerFarmer = async (req, res) => {
    try {
        let newPassword = await bcrypt.hash(req.body.password, 10);
        const output = await Farmer.create({
            name: req.body.name,
            password: newPassword,
            email: req.body.email,
            city: req.body.city,
            zipCode: req.body.zipCode,
            province: req.body.province,
            contact: req.body.contact
        })

        return res.status(200).json({
            message: "Succesfully logged in",
            data: output
        })

    } catch(error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

// Login of farmer
const loginFarmer = async (req, res) => {
    const email = req.body.email;
    let farmer = await Farmer.findOne({ email: email});
    if (farmer) {
        const isValidPassword = await bcrypt.compare(req.body.password, farmer.password);
        if (isValidPassword) {
            const token = jwt.sign({
                name: req.body.name,
                email: req.body.email
            }, 'hello123')
            return res.status(200).json({
                token,
                message:"Succesfully Logged In"
            })
        }
    }

}

// Get all farmers
const getFarmers = (req, res) => {
    Farmer.find()
    .then((result) => {
        return res.status(200).json({
            message: 'Succesfully fetched farmers',
            data: result
        })
    })
    .catch((error) => {
        return res.status(500).json({
            message: error.message
        })
    })
}

// Update data of farmer by id
const updateFarmer = (req, res) => {
    const id = req.params.id;

    Farmer.findOneAndUpdate({ _id : id }, req.body)
    .then((result) => {
        res.status(200).json({
            message: 'Succesfully updated farmer',
            data: result
        });
    })
}

// Delete a farmer by id
const deleteFarmer = (req, res) => {
    const id = req.params.id;
    Farmer.findByIdAndDelete(id)
    .then((result) => {
        return res.status(200).json({
            message: "Farmer succesfully delete",
            data: result
        })
    })
    .catch((error) => {
        return res.status(500).json({
            message: error.message
        })
    })
}

// Get farmer data by id
const getFarmerById = (req, res) => {
    const id = req.params.id;

    Farmer.findById(id)
    .then((result) => {
        return res.status(200).json({
            message: `Farmer found succesfully with id ${id}`,
            data: result
        })
    })
    .catch((error) => {
        return res.status(404).json({
            message: error.message,
        })
    })

}

module.exports = {
    registerFarmer,
    loginFarmer,
    getFarmers,
    updateFarmer,
    deleteFarmer,
    getFarmerById
}