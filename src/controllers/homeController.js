const connection = require('../config/database');
const {getAllUser,getUsersById,updateUsersById,deleteUserById} = require('../services/CRUD.Service');

const getHomepage = async(req, res) => {
   
   // gọi hàm get all users
   let results = await getAllUser();
   return res.render('home.ejs',{listUsers:results}); // x<-y
  }

const getAboutpage = (req, res) => {
    res.send('About page hehe')
}

const getHieubui = (req, res) => {
    res.render('sample.ejs')
    // res.send('Hieubui page')
}

const postCreateUser = async  (req, res) => {
    console.log(">> req.body",req.body);
    // lấy biến email,myname,city từ html
    let email = req.body.email;
    let name = req.body.myname;
    let city = req.body.city;

    console.log(">> email = ",email,'name = ',name,'city = ',city);
    // hoặc let (email, name, city) = req.body;

    let [ressullts,fields] = await connection.query(
        `INSERT INTO Users (email,name,city) VALUES (? , ?, ?);`,[email, name,city],
  );
  res.send("success !")

  console.log(">> results", results);
    // connection.query(
    //     'select * from Users u', 
    //     function (error, results) {
    //         console.log(">> results",results);
    //     }
    // const [results,fields]=await connection.query('select * from Users u');
    // console.log(">> results",results);
}

const getCreatePage = (req, res) => {
    res.render('create.ejs')
}

const getUpdatePage = async (req, res) => {
    const userId = req.params.id;
    let user =await getUsersById(userId);
    res.render('edit.ejs',{userEdit : user})// trái :tên biến truyền qua view, phải: giá trị mình gán cho nó , x<-y
}

const postUpdateUser = async  (req, res) => {
    console.log(">> req.body",req.body);
    // lấy biến email,myname,city từ html
    let email = req.body.email;
    let name = req.body.myname;
    let city = req.body.city;
    let userId = req.body.userId;

   
    await updateUsersById(email,name,city,userId);

    res.redirect('/');// khi lưu thành công nó sẽ quay lại trang home
}
const postDeleteUser = async(req, res) => {
    const userId = req.params.id;
    let user =await getUsersById(userId);

    res.render('delete.ejs',{userEdit : user})
}
const postHandleRemoveUser =async (req, res) => {
    const id = req.body.userId;
    await deleteUserById(id);

    res.redirect('/');
}
module.exports = { 
    getHomepage,
    getAboutpage,
    getHieubui,
    postCreateUser,
    getCreatePage,
    getUpdatePage,
    postUpdateUser,
    postDeleteUser,
    postHandleRemoveUser
 }