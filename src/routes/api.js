const express = require('express');
const routerAPI = express.Router();
const {getUsersAPI,postCreateUserAPI,putUpdateUserAPI,DeleteUserAPI,postUploadSingleFileApi,postUploadMultipleFilesAPI,
    } = require('../controllers/apiController')
//nơi khai báo và thông báo cho express là sẽ gọi cái nào
const {postCreateCustomer,postCreateArrayCustomer,getAllCustomers,putUpdateCustomers,
    deleteACustomer,deleteArrayCustomer} = require ('../controllers/customerController')

routerAPI.post('/users',postCreateUserAPI);

routerAPI.get('/users',getUsersAPI);

routerAPI.put('/users',putUpdateUserAPI);

routerAPI.delete('/users',DeleteUserAPI);

routerAPI.post('/file',postUploadSingleFileApi);

routerAPI.post('/files',postUploadMultipleFilesAPI);


routerAPI.post('/customers',postCreateCustomer);

routerAPI.post('/customers-many',postCreateArrayCustomer);

routerAPI.get('/customers',getAllCustomers);

routerAPI.put('/customers',putUpdateCustomers);
routerAPI.delete('/customers',deleteACustomer);
routerAPI.delete('/customers-many',deleteArrayCustomer);

module.exports = routerAPI;// export default 