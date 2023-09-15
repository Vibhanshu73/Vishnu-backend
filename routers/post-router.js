const express =require('express')
const router = express.Router()
const postController = require('../controller/post-controller')
const validation = require('../helper/validation')
// router.get('/getposts',(req,res)=>{
//     res.send('Get post details');
// })
router.get('/getallposts',postController.getallPost);

router.post('/addpost',validation.postSchema,postController.addPost);

router.put('/updatepost/:pid',validation.postSchema,postController.updatePost);

router.delete('/deletepost/:pid',postController.deletePost);

module.exports = router;
// CRUD
// C - create
// R - Read
// U - Update
// D - Delete
