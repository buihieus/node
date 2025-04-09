const User = require('../models/user');
const { get } = require('../routes/web');

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
module.exports = {
    getUsersAPI
}