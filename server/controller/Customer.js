const Customer = require('../models/customer');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const getCustomers = (req, res) => {
    Customer.find()
    .then((result) => {
        return res.status(200).json({
            message: 'Succesfully fetched customers',
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
    Customer.findByIdAndDelete(id)
    .then((result) => {
        return res.status(200).json({
            message: "Customer succesfully delete",
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

    Customer.findOneAndUpdate({ _id : id }, req.body)
    .then((result) => {
        res.status(200).json({
            message: 'Succesfully updated Customer',
            data: result
        });
    })
}

const getCustomerById = (req, res) => {
    const id = req.params.id;

    Customer.findById(id)
    .then((result) => {
        return res.status(200).json({
            message: `Customer found succesfully with id ${id}`,
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
        const output = await Customer.create({
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

const loginCustomer = async (req, res) => {
    const email = req.body.email;
    let customer = await Customer.findOne({ email: email});
    if (customer) {
        const isValidPassword = await bcrypt.compare(req.body.password, customer.password);
        if (isValidPassword) {
            const token = jwt.sign({
                name: req.body.name,
                email: req.body.email
            }, process.env.JWT_SECRET)
            return res.status(200).json({
                token,
                message:"Succesfully Logged In"
            })
        } else {
            return res.status(401).json({
                message: "Incorrect Password"
            })
        }
    } else {
        return res.status(400).json({
            message: "User not found!"
        })
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