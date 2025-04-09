const express = require('express');
const routerAPI = express.Router();
const {getUsersAPI,postCreateUserAPI,postUpdateUserAPI} = require('../controllers/apiController')
//nơi khai báo và thông báo cho express là sẽ gọi cái nào


routerAPI.post('/users',postCreateUserAPI);

routerAPI.get('/users',getUsersAPI);

routerAPI.put('/users',postUpdateUserAPI);

module.exports = routerAPI;// export default 