const express = require('express')
const verifyToken = require('../controllers/verifyToken');
const router =express.Router()
;

const EmployeeController = require('../controllers/EmployeeController')

router.get('/',verifyToken.verifyToken,EmployeeController.index)
router.post('/show',EmployeeController.show)
router.post('/store',EmployeeController.store)
router.delete('/delete', EmployeeController.destroy)
router.put('/update',EmployeeController.update)


module.exports = router