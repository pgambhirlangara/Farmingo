const express = require('express');
const router = express.Router();

const { registerCustomer, loginCustomer, getCustomers, updateCustomer, deleteCustomer, getCustomerById } = require('../controller/Customer');

router.use(logger);

router.post('/register', registerCustomer);

router.post('/login', loginCustomer);

router.get('/', getCustomers);

router.put('/:id', updateCustomer);

router.delete('/:id', deleteCustomer);

router.get('/:id', getCustomerById);

function logger(req, res, next) {
    console.log('Runnning your requests.....');
    next();
}



module.exports = router;