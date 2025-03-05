const connection = require('../config/database');
const {getAllUser,getUsersById} = require('../services/CRUD.Service');

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

    // cú pháp truyền động dữ liệu của mysql2
    connection.query(
          `INSERT INTO Users (email,name,city)
            VALUES (? , ?, ?);`,
          [email, name,city],
          function (error, results) {

              res.send("success !")
          }
    );
    let [ressullts,fields] = await connection.query(
        `INSERT INTO Users (email,name,city) VALUES (? , ?, ?);`,[email, name,city],
  );

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
module.exports = { 
    getHomepage,
    getAboutpage,
    getHieubui,
    postCreateUser,
    getCreatePage,
    getUpdatePage
 }