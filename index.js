const express = require('express')
const app = express()
const bodyParser = require('body-parser')
//const port = 3000
const dotenv = require('dotenv').config()

//importing the  catogory file and users file in index file
const catrouter = require('./routers/catogory-router')
const userrouter = require('./routers/users-router')
const postrouter = require('./routers/post-router')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))    
//parse application/json
app.use(bodyParser.json())

//initializing the catrouter and userrouter endpoint
app.use('/catgory',catrouter);
app.use('/user',userrouter);
app.use('/post',postrouter)

app.listen(process.env.PORT, ()=>
{
    console.log(`Example app listening on port ${process.env.PORT}`)
})

//http://localhost:3000/catgory/catlist
//http://localhost:3000/user/updateuser