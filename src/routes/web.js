const express = require('express');
const {getHomepage, getAboutpage, getHieubui} = require('../controllers/homeController')
const router = express.Router();

//nơi khai báo và thông báo cho express là sẽ gọi cái nào

// route.Method('/route',handle)
router.get('/', getHomepage)
  
router.get('/abc', getAboutpage)
  
router.get('/hieubui',getHieubui)
  
module.exports = router;// export default 