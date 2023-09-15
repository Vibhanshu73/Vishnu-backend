const postModel = require('../model/post-model')

let addPost = async (req,res)=>{
    let bodyData = req.body;
    try
    {
        let postResult = await postModel.addPost(bodyData);
        res.send(postResult)
    }
    catch(err)
    {
        res.send(err)
    }
}
let getallPost = async (req,res)=>{
    try
    {
        let postdetails = await postModel.getallPost();
        res.send(postdetails);
    }
    catch(err)
    {
        res.send(err)
    }
}
// let getPost = (req,res)=>{
   
// }
let updatePost = async (req,res)=>{
    let paramData = req.params.pid;
    let bodyData = req.body;
    try
    {
        let postResult = await postModel.updatePost(paramData,bodyData);
        res.send(postResult)
    }
    catch(err)
    {
        res.send(err)
    }
}
let deletePost = async (req,res)=>{
    let paramsData = req.params.pid;
    try
    {
        let postResult = await postModel.deletePost(paramsData)
        res.send(postResult);
    }
    catch(err)
    {
        res.send(err)
    }
}
module.exports ={
                    addPost,
                    getallPost,
                    //getPost,
                    updatePost,
                    deletePost
                }