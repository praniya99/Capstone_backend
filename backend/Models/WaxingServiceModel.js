const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const waxingSchema = new Schema({
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
   "WaxingModel",//file name
   waxingSchema//function name
)
