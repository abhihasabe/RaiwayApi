var dbConn  = require('../../config/db.config');


var Employee = function(employee){
    this.name           =   employee.name;
    this.email          =   employee.email;
    this.phone          =   employee.phone;
    this.dept_id      =   employee.dept_id;
}

// create new company
Employee.createEmployee = (employeeReqData, result) =>{
    dbConn.query('SELECT * FROM user WHERE email=?', employeeReqData.email, (err, res)=>{
        if(err){
            console.log('Error while fetching employee by id', err);
            result(null, err);
        }else{
            console.log('by id',res.length);
            if(res.length==0){
                dbConn.query('INSERT INTO user SET ? ', employeeReqData, (err, res)=>{
                    if(err){
                        console.log('Error while inserting data');
                        result(err, null);
                }   else{
                        console.log('employee created successfully');
                        result(null, employeeReqData)
                    }
                });
            }else{
                result(null, "email is already been registered");
            }
        }
    })
}

// Login
Employee.authenticate = (employeeReqData,result) =>{
    dbConn.query('SELECT * FROM user WHERE email=?',employeeReqData.email, (err, res)=>{
        if(err){
            console.log('Error while fetching companys Type', err);
            result(null,err);
        }else{
            if(res.length>0){
                result(null,res[0]);
            }else{
                console.log('User Dose Not Exits');
                result(null,"User Dose Not Exits");
            }
        }
    })
}


// get employees
Employee.getDepartments = (result) =>{
    dbConn.query('SELECT * from department',
         (err, res)=>{
        if(err){
            console.log('Error while fetching companys Type', err);
            result(null,err);
        }else{
            console.log('companys Type fetched successfully');
            result(null,res);
        }
    })
}


module.exports = Employee;