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
module.exports = {
    getUsersAPI,
    postCreateUserAPI
}