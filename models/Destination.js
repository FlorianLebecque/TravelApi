const Sequelize = require("sequelize");
const db = require("../db");


const Destination = db.define("Destination",{
    id:{
        type: Sequelize.STRING,
        allowNull:false,
        primaryKey:true
    },
    name:{
        type: Sequelize.STRING,
        allowNull : false,
    },
    country:{
        type: Sequelize.STRING,
        allowNull: false
    },
    description:{
        type: Sequelize.STRING,
        allowNull: false
    }
});



db.sync();



module.exports = Destination;