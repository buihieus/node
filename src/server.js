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
app.use(express.json()); // Used to parse JSON bodies
app.use(express.urlencoded({ extended: true })); //Parse URL-encoded bodies

// config template engine
configViewEngine(app);

// khai báo route
app.use('/', webRoutes);

// test connection
connection();

// const cat = new Kitten({ name: 'hoi coin card nhe e' });
// cat.save();

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

