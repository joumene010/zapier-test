const Employee = require('../models/Employee')

//Show the list of employees

const index = (req, res, next) => {
  
          Employee.find()
          .then(response => {
            let res1 = response.map(function(emp) {
                let newObj = emp.toObject()
                newObj["id"]=newObj["_id"];
                delete newObj._id;
                return newObj ;
              });
            
           res.send(res1);
                })
          .catch(error => {
                    res.json({
                        message: 'An error Occured'
                    })
                });
        }





//Show single employee
const show = (req, res, next) => {
    let employeeId = req.body.employeeId
    Employee.findById(employeeId)
        .then(response => {
            res.json({
                response
            })
        })
        .catch(error => {
            res.json({
                message: 'An error Occured'
            })
        })
}

//add new employee
const store = (req, res, next) => {
    let employee = new Employee({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        age: req.body.age
    })
    employee.save()
        .then(response => {
            res.json({
                message: 'Employee added Successfully'
            })
        })

        .catch(error => {
            res.json({
                message: 'An error occured'
            })
        })
}


//update an employee
const update = (req, res, next) => {
    let employeeId = req.body.employeeId

    let updateData = {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        age: req.body.age
    }
    Employee.findByIdAndUpdate(employeeId, { $set: updateData })
        .then(response => {
            res.json({
                message: 'Employee updated Successfully'
            })
        })

        .catch(error => {
            res.json({
                message: 'An error occured'
            })
        })
}


//delete an employee
const destroy = (req,res,next)=>{
    let employeeId = req.body.employeeId
    Employee.findByIdAndDelete(employeeId)

    .then(response => {
        res.json({
            message: 'Employee deleted Successfully'
        })
    })

    .catch(error => {
        res.json({
            message: 'An error occured'
        })
    })
}
module.exports = {
    index,show,destroy,update,store
}