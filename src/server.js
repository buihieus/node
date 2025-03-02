require('dotenv').config()
const express = require('express')// commonjs
const path = require('path')// commonjs
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web')
const connection = require('./config/database')
const { table } = require('console');

// import express from 'express'; //es module
const app = express()// app express
const port = process.env.PORT || 3000;
const hostname = process.env.HOST_NAME;

// config template engine
configViewEngine(app);



// simple query
// connection.query(
//   'SELECT * from Users u ', 
//   function (error, results, fields) {
//     console.log(">>> results :",results);
//     // console.log(">>> fields :",fields);
  
// })


// khai báo route
app.use('/',webRoutes)

//run server trên port đã khởi tạo trước đấy
//nạp các thông tin khai báo ở trên rồi chạy (ví dụ như nạp routes)
app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`)
})