let mysql = require('../helper/mysql_connection')


let addPost = (body)=>{
                        return new Promise((resolve,reject)=>{
                                                                let {title, description, status, cat_id, auth_id}= body;
                                                                let query = `INSERT INTO posts (title, description, status, created, cat_id, auth_id) VALUES ('${title}', '${description}','${status}', now(), '${cat_id}', '${auth_id}')`
                                                                mysql.con.query(query,(err,row,fields)=>{
                                                                                                            if(err)
                                                                                                            {
                                                                                                                return reject(err)
                                                                                                            }
                                                                                                            else
                                                                                                            {
                                                                                                                return resolve(row,fields)
                                                                                                            }
                                                                                                        })
                                                             })
                  }
let getallPost =()=>{
                        return new Promise((resolve,reject)=>  {
                                                                    let query =`SELECT * FROM posts`
                                                                    mysql.con.query(query,(err,row,fields)=>{
                                                                                                                    if(err)
                                                                                                                    {
                                                                                                                        return reject(err)
                                                                                                                    }
                                                                                                                    else
                                                                                                                    {
                                                                                                                        return resolve(row,fields)
                                                                                                                    }
                                                                                                            })

                                                                })
                    }

let updatePost =(params,body)=>{
                        return new Promise((resolve,reject)=>{
                                                                let {title,description,status,cat_id,auth_id}= body;
                                                                let query =`UPDATE posts SET title = '${title}', description = '${description}', status = '${status}', created = now(), cat_id = '${cat_id}',auth_id ='${auth_id}' WHERE posts.id = ${params}`
                                                                mysql.con.query(query,(err,row,fields)=>{
                                                                                                            if(err)
                                                                                                            {
                                                                                                                return reject(err)
                                                                                                            }
                                                                                                            else{
                                                                                                                return resolve(row,fields)
                                                                                                            }
                                                                                                        })
                                                             })
                    }

let deletePost =(params)=>{
                        return new Promise((resolve,reject)=>{
                                                                let query = `DELETE FROM posts WHERE id = ${params}`
                                                                mysql.con.query(query,(err,row,fields)=>{
                                                                                                            if(err)
                                                                                                            {
                                                                                                                return reject(err)
                                                                                                            }
                                                                                                            else
                                                                                                            {
                                                                                                                return resolve(row,fields)
                                                                                                            }
                                                                                                        })
                                                             })
                    }

module.exports = {getallPost,updatePost,deletePost,addPost}







































// let getallpost = ()=>{
//     let allpost =[
//         { postName:"asus laptop" , postdes:"asus laptop" },
//         { postName:"iphone 12" , postdes:"iphone 12" },
//         { postName:"LG television" , postdes:"LG television" }    
//     ]
// }
// module.exports = {
//                     getallpost
//                  }



