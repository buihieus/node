// sẻvice là tượng trưng cho modal trong mô hình mvc
const connection = require("../config/database");

const getAllUser = async () =>{
    // lấy data(nếu ko có await , áync thì sẽ bị lỗi)
   let [results,fields] = await connection.query('select * from Users');
    return results
}

// export ra cho các controller khác sử dụng
module.exports ={
    getAllUser
}