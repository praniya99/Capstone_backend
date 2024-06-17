 const mongoose=require("mongoose");
 const Schema = mongoose.Schema;
 const cashierSchema= new Schema({
firstname:{
    type:String,
    required:true,
},
lastname:{
    type:String,
    required:true,
},
dateofbirth:{
    type:String,
    required:true,
},
gender:{
    type:String,
    required:true,
},
mobileno:{
    type:Number,
    required:true,
},
email:{
    type:String,
    required:true,
},
address:{
    type:String,
    required:true,
}
 });

 module.exports=mongoose.model(
    "Cashier",//file name
     cashierSchema//function name
 )
