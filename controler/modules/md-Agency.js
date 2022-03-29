const Agency = require("../../models/Agency");
const Str = require("@supercharge/strings");

const AgencyFunctions = {

    async GetAgency(uuid){

        let data = await Agency.findOne({where:{id:uuid}}).then(data=>{
            return data;
        }).catch(err=>{
            throw {code:500,err:"Internal server error"};
        })

        if(data){
            return data;
        }
        throw {code:404,err:"Not found"};

    },

    async CreateAgency(agency_form){

        if(!this.CheckObj(agency_form,["name","address","email","telephone"])){
            throw {code:400,err:"Incomplete forms"};
        }

        let new_agency = Agency.build({
            id          :Str.uuid(),
            name        :this.Sanatize(agency_form.name),
            address     :this.Sanatize(agency_form.address),
            email       :this.Sanatize(agency_form.email),
            telephone   :this.Sanatize(agency_form.telephone),
        });

        let data = await new_agency.save().then(data => {
            return data;
        }).catch(err=>{
            throw {code:500,err:"Internal server error"};
        });

        return data;

    },

    async DeleteAgency(uuid){

        let result = await Agency.destroy({where:{id:uuid}}).then(data => {
            return data;
        }).catch(err=>{
            throw {code:500,err:"Internal server error"};
        });

        if(result != 0){
            return result;
        }

        throw {code:404,err:"Not found"};

    }

}



module.exports = AgencyFunctions;