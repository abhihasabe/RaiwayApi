const req = require('express/lib/request');
const CompanyModel = require('../models/authentication.model');


// get countrys
module.exports.auth = (req, res)=> {
    const employeeReqData = new CompanyModel(req.body);
    //console.log('here all Company list');
    CompanyModel.authenticate(employeeReqData, (err, result, token) =>{
        if(err){
            res.status(500).json({success:0, message:err, data:result});
        }else if(result =="User Dose Not Exits"){
            res.json({success:0, message:"User Dose Not Exist"});
        }else if(result =="Please enter valid password"){
            res.json({success:0, message:"Please enter valid password"});
        }
        else{
            res.json({success:1, message:"Data Fetch Successfully",token:token, data :result});
        }
    })
}


// create new Admin
module.exports.createAdmin = (req, res) =>{
    const employeeReqData = new CompanyModel(req.body);
    console.log('employeeReqData', employeeReqData);
    CompanyModel.createEmployee(employeeReqData, (err, result)=>{
        if(err){
            res.json({success:0, message:err});
        }else if(result == "email is already been registered") {
            res.json({success:0,  message:result});
        }else{
            res.json({success:1,  message:"Data Added Successfully", data:result});
        }
    });
}

// get all employees
module.exports.showDepartments = (req, res)=>{
    //console.log('get emp by id');
    CompanyModel.getDepartments((err, company)=>{
        if(err)
        res.json({success:0, message:err, data:company});
        console.log('single employee data',company);
        res.json({success:1, message:"Data Fetch Successfully", data:company});
    })
}



// get city by Country ID
module.exports.getEmployeeID = (req, res)=>{
    //console.log('get emp by id');
    CompanyModel.getEployee(req.params.id, req.params.userId, (err, company)=>{
        if(err)
        res.json({success:0, message:err, data:company});
        console.log('single employee data',company);
        res.json({success:1, message:"Data Fetch Successfully", data:company});
    })
}