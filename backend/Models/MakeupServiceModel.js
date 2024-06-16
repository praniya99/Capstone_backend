const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const makeupSchema = new Schema({
  servicename: {
    type: String,
    required: true,
  },
  serviceprice: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  hours: {
    type: Number,
    required: true,
  },
  minutes: {
    type: Number,
    required: true,
  },
});
module.exports=mongoose.model(
   "MakeupModel",//file name
    makeupSchema//function name
)
