const express = require('express');
const router = express.Router();
const validateCustomer = require('../auth');

const { registerCustomer, loginCustomer, getCustomers, updateCustomer, deleteCustomer, getCustomerById } = require('../controller/Customer');

router.use(logger);

router.post('/register', registerCustomer);

router.post('/login', loginCustomer);

router.get('/', validateCustomer, getCustomers);

router.put('/:id', validateCustomer, updateCustomer);

router.delete('/:id', validateCustomer, deleteCustomer);

router.get('/:id', validateCustomer, getCustomerById);

function logger(req, res, next) {
    console.log('Runnning your requests.....');
    next();
}



module.exports = router;