require('dotenv').config()
const express = require('express')// commonjs
const path = require('path')// commonjs
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web')
const apiRoutes = require('./routes/api')
const fileUpload = require('express-fileupload');

const connection = require('./config/database')


// import express from 'express'; //es module
const app = express()// app express
const port = process.env.PORT || 3000;
const hostname = process.env.HOST_NAME;


// cái này có tác dụng duy nhất hỗ trọ lấy input từ html rồi gửi lên server
// config req.body
app.use(express.json()); // Used to parse JSON bodies
app.use(express.urlencoded({ extended: true })); //Parse URL-encoded bodies

// config template engine
configViewEngine(app);

//config file upload
app.use(fileUpload());

// khai báo route
app.use('/', webRoutes);
app.use('/v1/api/', apiRoutes);


//SELF RUNNING FUNCTION
; (async () => {
  try {
    await connection();
    app.listen(port, hostname, () => {
      console.log(`Example app listening on port ${port}`)
    })
  } catch (error) {
    console.log(">> error connect to db", error);
  }
})()

