
require('dotenv').config();// phải import cái này vì nếu ko imporrt vào thì nó ko lấy đc dữ liệu của env (t nghĩ thếnst mysql = require('mysql2');
const mongoose = require('mongoose');
var dbState = [{
    value: 0,
    label: "disconnected"
},
{
    value: 1,
    label: "connected"
},
{
    value: 2,
    label: "connecting"
},
{
    value: 3,
    label: "disconnecting"
}];

const connection = async () =>{

    // Or:
    try {
        
        await mongoose.connect('mongodb://root:123456@localhost:27018');
        const state = Number(mongoose.connection.readyState);
        console.log(dbState.find(f => f.value == state).label, "to db"); // connected to db
    } catch (error) {
        // handleError(error);
        console.log('Error connecting to MongoDB', error);
      }
}
module.exports = connection;