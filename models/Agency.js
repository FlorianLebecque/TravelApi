const Sequelize = require("sequelize");
const db = require("../db");


const Agency = db.define("Agency",{
    id:{
        type: Sequelize.STRING,
        allowNull:false,
        primaryKey:true
    },
    name:{
        type: Sequelize.STRING,
        allowNull : false,
    },
    address:{
        type: Sequelize.STRING,
        allowNull: false
    },
    email:{
        type: Sequelize.STRING,
        allowNull: false
    },
    telephone:{
        type: Sequelize.STRING,
        allowNull: false
    }
});



db.sync();



module.exports = Agency;