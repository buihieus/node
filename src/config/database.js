
require('dotenv').config();// phải import cái này vì nếu ko imporrt vào thì nó ko lấy đc dữ liệu của env (t nghĩ thếnst mysql = require('mysql2');
const mongoose = require('mongoose');
const dbState = [{
    value: 0,
    label: "Disconnected"
},
{
    value: 1,
    label: "Connected"
},
{
    value: 2,
    label: "Connecting"
},
{
    value: 3,
    label: "Disconnecting"
}];

const connection = async () => {

    try {
        const options = {
            user: process.env.DB_USER,
            pass: process.env.DB_PASSWORD,
            dbName: process.env.DB_NAME
        }
        await mongoose.connect(process.env.DB_HOST, options);
        const state = Number(mongoose.connection.readyState);
        console.log(dbState.find(f => f.value == state).label, "to database"); // connected to db
    } catch (error) {
        // handleError(error);
        console.log('Error connecting to MongoDB', error);
    }
}
module.exports = connection;