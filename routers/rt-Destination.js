const Express = require("express");
const ctrl = require("../controler/Controler");

const DestRouter = Express.Router();


DestRouter.get("/",async (req,res)=>{

    let uuid = req.query.uuid;

    try {
        let dest = await ctrl.GetDestination(uuid);
        
        res.json(dest);

    } catch (error) {
        res.status(error.code).json(error.err);
    }




});

DestRouter.delete("/",async (req,res)=>{

    let uuid = req.query.uuid;

    try {
        let response = await ctrl.DeleteDestination(uuid);
        
        res.json(response);

    } catch (error) {
        res.status(error.code).json(error.err);
    }




});

DestRouter.post("/",async (req,res)=>{

    let destination_form = req.body;

    try {
        let response = await ctrl.CreateDestination(destination_form);

        if(response){
            res.json(response);
        }
        
    } catch (error) {
        res.status(error.code).json(error.err);
    }



});

let exp = {
    path:"destination",
    router:DestRouter
}

module.exports = exp;