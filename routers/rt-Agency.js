const Express = require("express");
const ctrl = require("../controler/Controler");

const AgencyRouter = Express.Router();


AgencyRouter.get("/",async (req,res)=>{

    let uuid = req.query.uuid;

    try {
        let agency = await ctrl.GetAgency(uuid);
        
        res.json(agency);

    } catch (error) {
        res.status(error.code).json(error.err);
    }




});

AgencyRouter.delete("/",async (req,res)=>{

    let uuid = req.query.uuid;

    try {
        let response = await ctrl.DeleteAgency(uuid);
        
        res.json(response);

    } catch (error) {
        res.status(error.code).json(error.err);
    }




});

AgencyRouter.post("/",async (req,res)=>{

    let agency_form = req.body;

    try {
        let response = await ctrl.CreateAgency(agency_form);

        if(response){
            res.json(response);
        }
        
    } catch (error) {
        res.status(error.code).json(error.err);
    }



});

let exp = {
    path:"agency",
    router:AgencyRouter
}

module.exports = exp;