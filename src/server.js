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


// cái này có tác dụng duy nhất hỗ trọ lấy input từ html rồi gửi lên server
// config req.body
app.use(express.json( )); // Used to parse JSON bodies
app.use(express.urlencoded( )); //Parse URL-encoded bodies

// config template engine
configViewEngine(app);

// khai báo route
app.use('/',webRoutes)

// test connection
connection();

//run server trên port đã khởi tạo trước đấy
//nạp các thông tin khai báo ở trên rồi chạy (ví dụ như nạp routes)
app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`)
})

