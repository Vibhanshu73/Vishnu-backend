let mysql = require('../helper/mysql_connection')
let md5 = require('md5')
const jwt = require("jsonwebtoken");
const dotenv = require('dotenv').config()
let getUserList=()=>{
                        return new Promise((resolve,reject)=>{
                                                                    let query = `SELECT * FROM users`
                                                                    mysql.con.query(query,(err,rows,fields)=>{
                                                                                                                if(err)
                                                                                                                {
                                                                                                                    return reject(err)
                                                                                                                }
                                                                                                                else
                                                                                                                {
                                                                                                                    return resolve(rows,fields)
                                                                                                                }
                                                                                                            })
                                                                })
                    }
let addUser = (body) => {        
                            return new Promise((resolve,reject)=>   {
                                                                        let {fname,lname,email,password,phone,address,status}=body;
                                                                        let query = `INSERT INTO users (fname, lname, email, password, phone, address, status, created) VALUES ('${fname}', '${lname}', '${email}', MD5('${password}'), '${phone}', '${address}', '${status}', now());`
                                                                        mysql.con.query(query,(err,rows,fields)=>   {
                                                                                                                        if(err)
                                                                                                                        {
                                                                                                                            return reject(err)
                                                                                                                        }
                                                                                                                        else
                                                                                                                        {
                                                                                                                            return resolve(rows,fields)
                                                                                                                        }
                                                                                                                    })
                                                                    })
                        }
let loginUser=( body )=>{
                        let promise = new Promise((resolve,reject)=>{
                                                                let {email,password}= body;
                                                                //let md5Pass = md5(password);
                                                                let query = `SELECT * FROM users where email = '${email}' AND password = MD5('${password}')`
                                                                mysql.con.query(query,(err,rows,fields)=>   {
                                                                                                                if(err)
                                                                                                                {
                                                                                                                    return reject(err)
                                                                                                                }
                                                                                                                else
                                                                                                                {
                                                                                                                    console.log('The solution is: ', rows);
                                                                                                                       if(rows.length == 0)
                                                                                                                       {
                                                                                                                            return reject("Email Id and password not match");
                                                                                                                       } 
                                                                                                                       else 
                                                                                                                       {
                                                                                                                            console.log("our token key - ",process.env.TOKEN_KEY);
                                                                                                                            const token = jwt.sign ({ 
                                                                                                                                                      uid: rows[0].id,
                                                                                                                                                      email: rows[0].email,
                                                                                                                                                      fname: rows[0].first_name  
                                                                                                                                                    },
                                                                                                                                                    process.env.TOKEN_KEY,     
                                                                                                                                                    {
                                                                                                                                                         expiresIn: "2h"
                                                                                                                                                    });
                                                                                                                            rows[0].token = token;       
                                                                                                                            console.log(token);
                                                                                                                       }      
                                                                                                                        return resolve(rows);
                                                                                                                } 
                                                                                                                // else{
                                                                                                                //     return resolve(rows,fields)                                             
                                                                                                                // }  
                                                                                                            })
                                                            })
                        return promise;
                         }
let updateUser =(params,body)=>  {
                                    return new Promise((resolve,reject)=>   {
                                                                                let {fname,lname,email,password,phone,address,status}= body;
                                                                                let query = `UPDATE users SET fname = '${fname}', lname = '${lname}', email = '${email}', password = MD5('${password}'), phone = '${phone}', address = '${address}',status ='${status}', created = now() WHERE users.id = ${params}`
                                                                                //let md5Pass = md5(password);
                                                                                mysql.con.query(query,(err,rows,fields)=>   {
                                                                                                                                if(err)
                                                                                                                                {
                                                                                                                                    return reject(err)
                                                                                                                                }
                                                                                                                                else
                                                                                                                                {
                                                                                                                                    return resolve(rows,fields)
                                                                                                                                }
                                                                                                                            })
                                                                            })
                                 }
let deleteUser = (params)=> {
                                return new Promise((resolve,reject)=>   {
                                                                            let query = `DELETE FROM users WHERE users.id = ${params}`;
                                                                            console.log(query);
                                                                            mysql.con.query(query,(err,rows,fields)=>   {
                                                                                                                            if(err)
                                                                                                                            {
                                                                                                                                return reject(err)
                                                                                                                            }
                                                                                                                            else
                                                                                                                            {
                                                                                                                                //console.log("hello resolve")
                                                                                                                                //console.log(rows,fields)
                                                                                                                                return resolve(rows,fields)
                                                                                                                            }
                                                                                                                        })
                                                                        })
                            }
module.exports = {getUserList, loginUser,addUser,updateUser,deleteUser}




















// let getuserList =()=>{
//     let userdata = [
//         {userName : "Vishnu", userdetail: "Vishnu"},
//         {userName : "Ujwal", userdetail: "Ujwal"},
//         {userName : "Ayush", userdetail: "Ayush"}
//     ]
// }

// module.exports = { getuserList }