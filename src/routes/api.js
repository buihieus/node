const express = require('express');
const routerAPI = express.Router();
const {getUsersAPI} = require('../controllers/apiController')
//nơi khai báo và thông báo cho express là sẽ gọi cái nào

// route.Method('/route',handle)
routerAPI.get('/', (req, res) => {
    res.send("hello world with apis")
})
routerAPI.get('/abc', (req, res) => {
    res.status(200).json({

        data: "hello world with apis"
    })
});
routerAPI.get('/users',getUsersAPI);
module.exports = routerAPI;// export default 