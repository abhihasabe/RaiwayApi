var dbConn  = require('../../config/db.config');

var Employee = function(employee){
    this.latitude       =   employee.latitude;
    this.longitude      =   employee.longitude;
    this.time           =   employee.time;
    this.eId            =   employee.eId;
}

Employee.getAddress = (did, result) =>{

    dbConn.query('SELECT * FROM address WHERE eId=?',did, (err, res)=>{
        if(err){
            console.log('Error while fetching companys Type', err);
            result(null,err);
        }else{
            console.log('companys Type fetched successfully');
            result(null,res);
        }
    })
}

// create new company
Employee.createAddress = (employeeReqData, result) =>{
    dbConn.query('INSERT INTO address SET ?', employeeReqData, (err, res)=>{
        if(err){
            console.log('Error while fetching employee by id', err);
            result(null, err);
        }else{
            console.log('by id');
            result(null, "Addres Created Successfully");
        }
    })
}

module.exports = Employee;