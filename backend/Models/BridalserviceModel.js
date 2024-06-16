const mongoose = require('mongoose');

const { Schema } = mongoose;

const BridalServiceSchema = new Schema({
  // Define your schema fields here
  serviceName: { type: String, required: true },
  price: { type: Number, required: true },
  // other fields...
});

const Bridal = mongoose.models.BridalModel || mongoose.model('BridalModel', BridalServiceSchema);

module.exports = Bridal;
