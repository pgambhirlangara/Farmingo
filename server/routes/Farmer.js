const express = require('express');
const router = express.Router();

const { registerFarmer, loginFarmer, getFarmers, updateFarmer, deleteFarmer, getFarmerById, createRequest } = require('../controller/Farmer');

router.use(logger);

router.post('/register', registerFarmer);

router.post('/login', loginFarmer);

router.get('/', getFarmers);

router.put('/:id', updateFarmer);

router.delete('/:id', deleteFarmer);

router.get('/:id', getFarmerById);

router.post('/requestpayment', createRequest);

function logger(req, res, next) {
    console.log('Runnning your requests.....');
    next();
}



module.exports = router;