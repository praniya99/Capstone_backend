const mongoose=require("mongoose");
const Schema = mongoose.Schema;
const facialSchema= new Schema({
servicename:{
   type:String,
   required:true,
},
serviceprice:{
   type:Number,
   required:true,
},
category:{
   type:String,
   required:true,
},
timeduration:{
   type:Number,
   required:true,
}
});

module.exports=mongoose.model(
   "FacialModel",//file name
    facialSchema//function name
)
