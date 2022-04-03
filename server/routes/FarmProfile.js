const express = require('express');
const { createFarmProfile, getAllFarms, getFarmerByName, deleteFarmProfile, getFarmById, updateFarmProfile } = require('../controller/FarmProfile');
const router = express.Router();


router.use(logger);

router.post('/create', createFarmProfile);

router.get('/', getAllFarms);

router.put('/:id', updateFarmProfile);

router.delete('/:id', deleteFarmProfile);

router.get('/:id', getFarmById);

router.get('/query/:name', getFarmerByName);

function logger(req, res, next) {
    console.log('Runnning your requests.....');
    next();
}

module.exports = router;