const req = require('express/lib/request');
const CompanyModel = require('../models/address.model');

// get all employees
module.exports.showAddress = (req, res)=>{
    //console.log('get emp by id');
    CompanyModel.getAddress(req.params.id,(err, company)=>{
        if(err)
        res.json({success:0, message:err, data:company});
        console.log('single employee data',company);
        res.json({success:1, message:"Data Fetch Successfully", data:company});
    })
}

// create new Address
module.exports.createAddress = (req, res) =>{
    const employeeReqData = new CompanyModel(req.body);
    console.log('employeeReqData', employeeReqData);
    CompanyModel.createAddress(employeeReqData, (err, result)=>{
        if(err){
            res.json({success:0, message:err});
        }else{
            res.json({success:1,  message: result});
        }
    });
}
