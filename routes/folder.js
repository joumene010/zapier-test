const express =require('express')
const router = express.Router()
const verifyToken = require('../controllers/verifyToken');
const Folders = require('../controllers/FolderController')
 router.post('/add',verifyToken.verifyToken, Folders.add);
 router.delete('/deletefolder/:id',Folders.delete);
 router.get('/all',verifyToken.verifyToken,Folders.getAll);
 router.get('/getone/:id',Folders.getOne);
 router.get('/allfolders/:iduser',Folders.getByIdUser);
 router.put('/updatefolder',Folders.update)
 router.post('/addfolderfile',Folders.addfolderfile)
 router.get('/getfolderparnet',Folders.getFolderParanet)
 router.get('/getfolderbyidfolder/:idFolder',Folders.getFolderByIdFolder)





module.exports = router
