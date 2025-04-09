const express = require('express');
const routerAPI = express.Router();
const {getUsersAPI,postCreateUserAPI,putUpdateUserAPI,DeleteUserAPI} = require('../controllers/apiController')
//nơi khai báo và thông báo cho express là sẽ gọi cái nào


routerAPI.post('/users',postCreateUserAPI);

routerAPI.get('/users',getUsersAPI);

routerAPI.put('/users',putUpdateUserAPI);

routerAPI.delete('/users',DeleteUserAPI);

module.exports = routerAPI;// export default 