let mysql1 = require('../helper/mysql_connection')
function getCatList()
{
  //promise = new Promise
  return new Promise 
  (
    (resolve,reject)=>
    {
      let query = 'SELECT * FROM `category`';
      mysql1.con.query(query,function(err, rows, fields){
        if(err)
        {
          return reject(err)
        }  
        console.log(rows)
        return resolve(rows,fields)
      }); 
    });
    // return promise;
}
let addCategory=(body)=>
{
  return new Promise
  (
    (resolve,reject)=>
    {
      let {cat_name,cat_desc,status} = body
      console.log('--cat_name--',cat_name)
      console.log('--cat_desc--',cat_desc)
      console.log('--status--',status)

      let query = `INSERT INTO category (cat_name, cat_desc, status, created) VALUES ('${cat_name}', '${cat_desc}', '${status}', now())`;
      console.log(query)
      mysql1.con.query(query,function (err, rows, fields){
        if(err)
        {
          return reject(err)
        }  
        console.log(rows)
        return resolve(fields)
      }); 
    });
}
function updateCat(param,body)
{
  //promise = new Promise
  return new Promise 
  (
    (resolve,reject)=>
    {
      let {cat_name,cat_desc,status} = body;
      let query= `UPDATE category SET cat_name = '${cat_name}', cat_desc = '${cat_desc}', status = ${status}, created = now() WHERE category.id = ${param};`;

      mysql1.con.query(query,function (err, rows, fields){
        if(err)
        {
          return reject(err)
        }  
        console.log(rows)
        return resolve(rows,fields)
      }); 
    });
    //return promise;
  }

let deleteCat=(param)=>{
  return new Promise 
  (
    (resolve,reject)=>
    {
      //let {cat_name,cat_desc,status} = body;
      let query= `DELETE FROM category WHERE category.id = ${param}`
      mysql1.con.query(query,function (err, rows, fields){
        if(err)
        {
          return reject(err)
        }  
        console.log(rows) 
        return resolve(rows,fields)
      }); 
    });
}
let catbyid=(param)=>{
  //promise = new Promise
  return new Promise 
  (
    (resolve,reject)=>
    {
      //let {cat_name,cat_desc,status} = body;
      let query= `SELECT * FROM category WHERE category.id = ${param}`
      mysql1.con.query(query,function (err, rows, fields){
        if(err)
        {
          return reject(err)
        }  
        console.log(rows) 
        return resolve(rows,fields)
      }); 
    });
    //return promise;
}
module.exports = {getCatList, addCategory, updateCat, deleteCat, catbyid}

  // // get the client
  // const mysql = require('mysql2');
  // // create the connection
  // const con = mysql.createConnection(
  //   {
  //     host:'localhost',
  //     user: 'new_blog', 
  //     password:'P)yD/LvU89Dzcy-',
  //     database: 'blogger'
  //   }
  // );
  
  // con.connect(function(err) {
  //   if (err) 
  //   {
  //     console.error('error connecting: ' + err.stack);
  //     return;
  //   }
   
  //   console.log('connected as id ' + con.threadId);
  // });