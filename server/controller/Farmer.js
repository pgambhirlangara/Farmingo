const Farmer = require('../models/Farmer');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Register farmer
const registerFarmer = async (req, res) => {
    try {
        let newPassword = await bcrypt.hash(req.body.password, 10);
        const token = jwt.sign({
            name: req.body.name,
            email: req.body.email
        }, process.env.JWT_SECRET)
        const output = await Farmer.create({
            name: req.body.name,
            password: newPassword,
            email: req.body.email,
            city: req.body.city,
            province: req.body.province,
            contact: req.body.contact
        })

        return res.status(200).json({
            message: "Farmer Registered Succesfully",
            data: {
                token,
                email : req.body.email,
                name: req.body.name
            }
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
            }, process.env.JWT_SECRET)
            return res.status(200).json({
                token,
                id: farmer._id,
                name: farmer.name,
                email: farmer.email,
                message:"Succesfully Logged In"
            })
        } else {
            return res.status(401).json({
                message:"Incorrect Password!"
            })
        }
    } else {
        return res.status(500).json({
            message:"User doesn't exist, please register"
        })
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