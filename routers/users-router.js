const express = require('express') // importing express
const router = express.Router()     // making express object router
const userController = require('../controller/user-controller')
const validation = require('../helper/validation')

router.get('/userlist',userController.getUserList)

router.post('/adduser',validation.userSchema,userController.addUser)

router.post('/login',userController.userLogin)

router.put('/updateuser/:cid',validation.userSchema,userController.updateUser)

router.delete('/deleteuser/:cid',userController.deleteUser)

module.exports = router;




