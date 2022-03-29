const Express = require("express");
const ctrl = require("../controler/Controler");

const AgencyRouter = Express.Router();




let exp = {
    path:"agency",
    router:AgencyRouter
}

module.exports = exp;