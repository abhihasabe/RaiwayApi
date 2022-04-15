const express = require('express');
const router = express.Router();

const companysController = require('../controller/authentication.controller');


// Login
router.post('/login',companysController.auth);

// create new Employee
router.post('/addEmployee', companysController.createAdmin);


router.get('/getDept', companysController.showDepartments);


// get Employee By ID
router.get('/getEmployeeID/:id/:userId', companysController.getEmployeeID);

module.exports = router;