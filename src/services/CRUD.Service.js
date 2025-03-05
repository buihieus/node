// sẻvice là tượng trưng cho modal trong mô hình mvc
const connection = require("../config/database");

const getAllUser = async () =>{
    // lấy data(nếu ko có await , áync thì sẽ bị lỗi)
   let [results,fields] = await connection.query('select * from Users');
    return results
}
const getUsersById = async (userId) => {
    let [results,fields] = await connection.query('select * from Users where id = ? ',[userId]);//? để truyền động dữ liệu
    let user = results && results.length >0 ? results[0] : {};
    return user;
}
// export ra cho các controller khác sử dụng
module.exports ={
    getAllUser,
    getUsersById
}