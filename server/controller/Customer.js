const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const getCustomers = (req, res) => {
    User.find()
    .then((result) => {
        return res.status(200).json({
            message: 'Succesfully fetched users',
            data: result
        })
    })
    .catch((error) => {
        return res.status(500).json({
            message: error.message
        })
    })
}

const deleteCustomer = (req, res) => {
    const id = req.params.id;
    User.findByIdAndDelete(id)
    .then((result) => {
        return res.status(200).json({
            message: "User succesfully delete",
            data: result
        })
    })
    .catch((error) => {
        return res.status(500).json({
            message: error.message
        })
    })
}

const updateCustomer = (req, res) => {
    const id = req.params.id;

    User.findOneAndUpdate({ _id : id }, req.body)
    .then((result) => {
        res.status(200).json({
            message: 'Succesfully updated user',
            data: result
        });
    })
}

const getCustomerById = (req, res) => {
    const id = req.params.id;

    User.findById(id)
    .then((result) => {
        return res.status(200).json({
            message: `User found succesfully with id ${id}`,
            data: result
        })
    })
    .catch((error) => {
        return res.status(404).json({
            message: error.message,
        })
    })

}

const registerCustomer = async (req, res) => {
    try {
        let newPassword = await bcrypt.hash(req.body.password, 10);
        const output = await User.create({
            name: req.body.name,
            password: newPassword,
            email: req.body.email
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

const loginCustomer = async (req, res) => {
    const email = req.body.email;
    let user = await User.findOne({ email: email});
    console.log(user, "user");
    if (user) {
        const isValidPassword = await bcrypt.compare(req.body.password, user.password);
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

module.exports = {
    getCustomers,
    deleteCustomer,
    updateCustomer,
    getCustomerById,
    registerCustomer,
    loginCustomer
}