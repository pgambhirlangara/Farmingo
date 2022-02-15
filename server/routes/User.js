const express = require('express');
const router = express.Router();
const { getUsers, createUser, updateUser, deleteUser, getUserById, registerUser, loginUser, getQuotes, createQuote } = require('../controller/user');

router.use(logger);

router.post('/register', registerUser);

router.post('/login', loginUser);

router.get('/', getUsers);

router.put('/:id', updateUser);

router.delete('/:id', deleteUser);

router.get('/:id', getUserById);

function logger(req, res, next) {
    console.log('Runnning your requests.....');
    next();
}



module.exports = router;