const connection = require('../config/database');

const User = require('../models/user');

const getHomepage = async (req, res) => {

    // gọi hàm get all users
    let results = await User.find({});
    return res.render('home.ejs', { listUsers: results }); // x<-y
}

const getAboutpage = (req, res) => {
    res.send('About page hehe')
}

const getHieubui = (req, res) => {
    res.render('sample.ejs')
    // res.send('Hieubui page')
}

const postCreateUser = async (req, res) => {
    // lấy biến email,myname,city từ html
    let email = req.body.email;
    let name = req.body.myname;
    let city = req.body.city;

    console.log(">> email = ", email, 'name = ', name, 'city = ', city);

    // truyền dữ liệu vào
    await User.create({
        email: email,
        name: name,
        city: city
    });

    res.send("success !")

}

const getCreatePage = (req, res) => {
    res.render('create.ejs')
}

const getUpdatePage = async (req, res) => {
    const userId = req.params.id;
    // let user = await getUsersById(userId);
    let user = await User.findById(userId).exec();
    res.render('edit.ejs', { userEdit: user })// trái :tên biến truyền qua view, phải: giá trị mình gán cho nó , x<-y
}

const postUpdateUser = async (req, res) => {
    
    // lấy biến email,myname,city từ html
    let email = req.body.email;
    let name = req.body.myname;
    let city = req.body.city;
    let userId = req.body.userId;

    
    // await updateUsersById(email, name, city, userId);
    await User.updateOne({_id:userId},{name:name,email:email,city:city});

    res.redirect('/');// khi lưu thành công nó sẽ quay lại trang home
}
const postDeleteUser = async (req, res) => {
    const userId = req.params.id;
    // let user = await getUsersById(userId);
    let user = await User.findById(userId).exec();
    res.render('delete.ejs', { userEdit: user })
}
const postHandleRemoveUser = async (req, res) => {
    const id = req.body.userId;
    await User.deleteOne({_id:id});

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