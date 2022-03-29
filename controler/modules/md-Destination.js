const Destination = require("../../models/Destination");
const Str = require("@supercharge/strings");

const DestinationFunctions = {

    async GetDestination(uuid){

        let data = await Destination.findOne({where:{id:uuid}}).then(data=>{
            return data;
        }).catch(err=>{
            throw {code:500,err:"Internal server error"};
        })

        
        if(data){
            return data;
        }
        throw {code:404,err:"Not found"};


    },

    async CreateDestination(destination_form){

        if(!this.CheckObj(destination_form,["name","country","description"])){
            throw {code:400,err:"Incomplete forms"};
        }

        let new_destination = Destination.build({
            id          :Str.uuid(),
            name        :this.Sanatize(destination_form.name),
            country     :this.Sanatize(destination_form.country),
            description       :this.Sanatize(destination_form.description),
        });

        let data = await new_destination.save().then(data => {
            return data;
        }).catch(err=>{
            throw {code:500,err:"Internal server error"};
        });

        return data;

    },

    async DeleteDestination(uuid){

        let result = await Destination.destroy({where:{id:uuid}}).then(data => {
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



module.exports = DestinationFunctions;