const express =require('express')
const router = express.Router()

const FileController = require('../controllers/FileController')
const upload = require('../middleware/upload')
router.post('/add',upload.single('file'), FileController.add);
router.delete('/delete/:id',FileController.delete);
router.get('/all/:iduser',FileController.getAll);
router.get('/:id',FileController.getOne);
router.get('/allfile/:idfolder',FileController.getByIdFolder);
router.put('/updatefile',FileController.update)


module.exports = router
