const mongoose=require("mongoose")
const Scheema = mongoose.mongoose.Schema(
    {
        "name":{type:String,required:true},
        "address":{type:String,required:true},
        "phno":{type:String,required:true},
        "relativename":{type:String,required:true},
        "raddress":{type:String,required:true},
        "rphno":{type:String,required:true},
        "relation":{type:String,required:true},
        "modeoftransport":{type:String,required:true},
        "destination":{type:String,required:true},
        "boarding":{type:String,required:true},
        "date":{type:String,required:true},
        
    }
)

let travelmodel = mongoose.model("travels",Scheema);
module.exports={travelmodel}