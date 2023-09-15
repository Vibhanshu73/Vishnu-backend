const userModel = require('../model/user-model')

let addUser = async (req,res)=>
{
    let bodyData = req.body;
    try
    {
       let userResult = await userModel.addUser(bodyData);
       res.send(userResult) 
    }
    catch(err)
    {
        res.send(err)
    }
}

let getUserList = async (req,res)=>
{
    try
    {
       let userResult = await userModel.getUserList();
       res.send(userResult) 
    }
    catch(err)
    {
        res.send(err)
    }
}

let updateUser = async (req,res)=>
{
    let paramsData = req.params.cid;
    let bodyData = req.body;
    try
    {
        let userResult = await userModel.updateUser(paramsData,bodyData);
        res.send(userResult)
    }
    catch(err)
    {
        res.send(err)
    }
}

let deleteUser = async (req,res)=>
{
   let paramsData = req.params.cid;
   try
   {
        let userResult = await userModel.deleteUser(paramsData)
        //console.log(userResult)
        res.send(userResult)
   }
   catch(err)
   {
        res.send(err)
   }
}

let userLogin = async (req,res)=>
{
    try
    {
        let bodyData = req.body;
        let userResult = await userModel.loginUser(bodyData);
        res.send(userResult)
    }
    catch(err)
    {
        res.send(err)
    }
}
module.exports ={
                    addUser,
                    getUserList,
                    updateUser,
                    deleteUser,
                    userLogin
                }