
class Controler{

    constructor(){
        this.test = "a";
    }

    Modules(){
        console.log(Object.getOwnPropertyNames(this).filter(item=> typeof this[item] ==="function"));
    }

    Sanatize(str){
        return str;
    }

    CheckObj(obj,key_array){
        return Object.keys(obj).every(function(val) { return key_array.indexOf(val) >= 0; })
    }

}


const fs = require("fs");

fs.readdir("./controler/modules",(err,files)=>{
    if(err)
        throw err;
    
    files.forEach(file => {
        console.log("Loaded controler module :",file);

        let md = require("./modules/"+file);

        Object.assign(Controler.prototype,md);
    });
})

const ctrl = new Controler();


module.exports = ctrl;