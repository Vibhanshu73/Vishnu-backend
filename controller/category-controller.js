const catModel = require('../model/category-model');

let addCategory = async (req,res)=> {
    //res.send('add category')
    let body = req.body;
    try
    {
        let catdata = await catModel.addCategory(body);
        res.send(catdata);
    }
    catch(err)
    {
        res.send(err)
    }
}

let getAllCatList = async (req,res)=>
{
    try
    {
        let catdetails = await catModel.getCatList();
        res.send(catdetails);
    }
    catch(err)
    {
        res.send(err)
    }
}
let getCatById =async (req,res)=>
{
    let paramData = req.params.cid;
    console.log(paramData);
    try
    {
        let catdata = await catModel.catbyid(paramData);
        res.send(catdata);
    }
    catch(err)
    {
        res.send(err)
    }
}

let updateCat = async (req,res)=>
{
    let paramData = req.params.cid;
    let bodyData = req.body;
    console.log(paramData);
    console.log(bodyData);
    try
    {
        let catdata = await catModel.updateCat(paramData,bodyData);
        res.send(catdata);
    }
    catch(err)
    {
        res.send(err)
    }
    //res.send('update category')
} 

let deleteCat = async(req,res)=>
{
    let paramData = req.params.cid;
    console.log(paramData);
    try
    {
        let catdata = await catModel.deleteCat(paramData);
        res.send(catdata);
    }
    catch(err)
    {
        res.send(err)
    }
    //res.send('delete category')
} 
module.exports = {
                    addCategory, 
                    getAllCatList, 
                    getCatById, 
                    updateCat,
                    deleteCat
                 }