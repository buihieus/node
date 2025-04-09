const User = require('../models/user');

const getUsersAPI = async (req, res) => {

    // gọi hàm get all users
    let results = await User.find({});

    return res.status(200).json(
        {
            errorCode: 0,
            data: results
        }
    );
}

const postCreateUserAPI = async (req, res) => {
    // lấy biến email,myname,city từ html
    let email = req.body.email;
    let name = req.body.myname;
    let city = req.body.city;

    console.log(">> email = ", email, 'name = ', name, 'city = ', city);

    // truyền dữ liệu vào
    let user = await User.create({
        email: email,
        name: name,
        city: city
    });

    return res.status(200).json(
        {
            errorCode: 0,
            data: user
        }
    );

}
const postUpdateUserAPI = async (req, res) => {

    // lấy biến email,myname,city từ html
    let email = req.body.email;
    let name = req.body.myname;
    let city = req.body.city;
    let userId = req.body.userId;


    // await updateUsersById(email, name, city, userId);
    let user = await User.updateOne({ _id: userId }, { name: name, email: email, city: city });
    return res.status(200).json(
        {
            errorCode: 0,
            data: user
        }
    );// nhờ ré nỳ thì đường link nó mớ trở thành api
}
const postDeleteUserAPI = async (req, res) => {
    const userId = req.params.id;
    // let user = await getUsersById(userId);
    let user = await User.findById(userId).exec();
    return res.status(200).json(
        {
            errorCode: 0,
            data: user
        }
    );
}
module.exports = {
    getUsersAPI,
    postCreateUserAPI,
    postUpdateUserAPI,
}