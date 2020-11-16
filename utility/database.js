const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-app','root','Xsrx.1212',{
      dialect: 'mysql',
      host: 'localhost'
});

module.exports =sequelize;

















// const mysql =require('mysql2');


// const connection =mysql.createConnection({
//        host:'localhost',
//        user:'root',
//        database:'node-app',
//        password:'Xsrx.1212'
// }); 

// module.exports= connection.promise();