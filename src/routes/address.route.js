const express = require('express');
const router = express.Router();

const companysController = require('../controller/address.controller');


// create new Address
router.post('/addAddress', companysController.createAddress);

//Show Address 
router.get('/showAddress/:id', companysController.showAddress);

//Show Address 
router.get('/showDeptById/:id', companysController.showDeptById);

module.exports = router;