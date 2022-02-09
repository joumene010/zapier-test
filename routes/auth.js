const express =require('express')
const router = express.Router()

const AuthController = require('../controllers/AuthController')
router.post('/add', AuthController.add)
router.post('/login',AuthController.login)
router.delete('/delete/:id',AuthController.delete)
router.get('/:id',AuthController.getOne);


module.exports = router
