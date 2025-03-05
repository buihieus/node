const express = require('express');
const {getHomepage, getAboutpage, getHieubui,postCreateUser,getCreatePage} = require('../controllers/homeController')
const router = express.Router();

//nơi khai báo và thông báo cho express là sẽ gọi cái nào

// route.Method('/route',handle)
router.get('/', getHomepage)
  
router.get('/abc', getAboutpage)
  
router.get('/hieubui',getHieubui)

router.get('/create',getCreatePage)

router.post ('/create-user',postCreateUser)
  
module.exports = router;// export default 