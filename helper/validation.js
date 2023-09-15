const joi = require('joi');

let updateCatSchema = (req,res,next)=>
{
    const schema = joi.object
    ({
       cat_name: joi.string().required(),
       cat_desc: joi.string().required(),
       status: joi.number().optional()
       //cat_name,cat_desc,status
    })
    validateRequest(req,res,next,schema);
}

let postSchema =(req,res,next)=>
{
    const schema = joi.object
    ({
       title: joi.string().required(),
       description: joi.string().required(),
       status: joi.string(),
       cat_id: joi.number().required(),
       auth_id: joi.number().required()
       //title, description, status, cat_id, auth_id
    })
    validateRequest(req,res,next,schema);
}

let userSchema = (req,res,next)=>
{
    const schema = joi.object
    ({
        fname: joi.string().required(),
        lname: joi.string().required(),
        email: joi.string().email(),
        password: joi.string().required(),
        phone: joi.number().required(),
        address: joi.string().required(),
        status: joi.optional()
       //fname,lname,email,password,phone,address,status
    })
    validateRequest(req,res,next,schema);
}

let validateRequest = (req,res,next,schema)=>
{
    const options = {
        abortEarly:false,//include all errors
        allowUnknown: true, //ignore unknown props
        stripUnknown: true // remove unknown props    
    };
    const {error, value} = schema.validate(req.body,options);
 
    if(error)
    {
        res.send(error)
    }
    else 
    {
        req.body = value;
        next();
    }
}
module.exports = { updateCatSchema ,postSchema, userSchema}