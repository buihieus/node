const connection = require('../config/database');


const getHomepage = (req, res) => {
    //process data
    // call model
    let users = [];
    connection.query(
        'SELECT * from Users u ', 
        function (error, results, fields) {
          users  = results;
          console.log(">>> results :",results);
          // console.log(">>> fields :",fields);
          console.log(">>>check user :",users);
          res.send(JSON.stringify(users));
      })

   
  }

const getAboutpage = (req, res) => {
    res.send('About page hehe')
}

const getHieubui = (req, res) => {
    res.render('sample.ejs')
    // res.send('Hieubui page')
}
module.exports = { 
    getHomepage,
    getAboutpage,
    getHieubui

 }