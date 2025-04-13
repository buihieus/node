const express = require('express');
const routerAPI = express.Router();
const {getUsersAPI,postCreateUserAPI,putUpdateUserAPI,DeleteUserAPI,postUploadSingleFileApi,postUploadMultipleFilesAPI,
    } = require('../controllers/apiController')
//nơi khai báo và thông báo cho express là sẽ gọi cái nào
const {postCreateCustomer,postCreateArrayCustomer} = require ('../controllers/customerController')

routerAPI.post('/users',postCreateUserAPI);

routerAPI.get('/users',getUsersAPI);

routerAPI.put('/users',putUpdateUserAPI);

routerAPI.delete('/users',DeleteUserAPI);

routerAPI.post('/file',postUploadSingleFileApi);

routerAPI.post('/files',postUploadMultipleFilesAPI);


routerAPI.post('/customers',postCreateCustomer);

routerAPI.post('/customers-many',postCreateArrayCustomer);


module.exports = routerAPI;// export default 