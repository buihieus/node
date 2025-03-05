const express = require('express');
const {getHomepage, getAboutpage, getHieubui,postCreateUser,getCreatePage,getUpdatePage,postUpdateUser} = require('../controllers/homeController')
const router = express.Router();

//nơi khai báo và thông báo cho express là sẽ gọi cái nào

// route.Method('/route',handle)
router.get('/', getHomepage)
  
router.get('/abc', getAboutpage)
  
router.get('/hieubui',getHieubui)

router.get('/create',getCreatePage)

router.get('/update/:id',getUpdatePage)// để lấy ì đằng sau create trong route(id là tên biến)

router.post ('/create-user',postCreateUser)

router.post ('/update-user',postUpdateUser)
  
module.exports = router;// export default 