const express = require('express') // importing express
const router = express.Router()    // making express object router
const catController = require('../controller/category-controller')
const validation = require('../helper/validation')
const auth = require("../helper/authorization");

// const { validation } = require('joi')
router.get('/catlist',auth.verifyToken,catController.getAllCatList)

router.get('/catbyid/:cid',auth.verifyToken,catController.getCatById)

router.post('/addcat',validation.updateCatSchema,auth.verifyToken,catController.addCategory)

router.put('/updatecat/:cid',validation.updateCatSchema ,auth.verifyToken, catController.updateCat)

router.delete('/deletecat/:cid',auth.verifyToken, catController.deleteCat)

module.exports = router;