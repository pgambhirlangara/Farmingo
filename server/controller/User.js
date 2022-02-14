const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const getUsers = (req, res) => {
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

const deleteUser = (req, res) => {
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

const updateUser = (req, res) => {
    const id = req.params.id;

    User.findOneAndUpdate({ _id : id }, req.body)
    .then((result) => {
        res.status(200).json({
            message: 'Succesfully updated user',
            data: result
        });
    })
}

const getUserById = (req, res) => {
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

const createUser = (req, res) => {
    let newUser = req.body;
    const user = new User(newUser);
    user.save()
    .then((result) => {
        return res.status(200).json({
            message: 'Succesfully added user',
            data: result
        })
    })
    .catch((error) => {
        console.error(error, "error");
    })
}

const registerUser = async (req, res) => {
    try {
        let newPassword = await bcrypt.hash(req.body.password, 10);
        console.log(newPassword);
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

const loginUser = async (req, res) => {
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
    getUsers,
    deleteUser,
    updateUser,
    getUserById,
    createUser,
    registerUser,
    loginUser
}