const User = require('../models/user');
const { uploadSingleFile, uploadMultipleFiles } = require('../services/fileService');
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
    let user = await User.create({//////////////
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
const putUpdateUserAPI = async (req, res) => {

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
const DeleteUserAPI = async (req, res) => {
    const id = req.body.userId;
    let user = await User.deleteOne({ _id: id });
    return res.status(200).json(
        {
            errorCode: 0,
            data: user
        }
    );
}

const postUploadSingleFileApi =async(req, res) => {


    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }

    let result = await uploadSingleFile(req.files.image);
    console.log("result = ", result);

    return res.send("ok single")
}
module.exports = {
    getUsersAPI,
    postCreateUserAPI,
    putUpdateUserAPI,
    DeleteUserAPI,
    postUploadSingleFileApi
}