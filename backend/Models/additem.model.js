const mongoose = require('mongoose');
const AdditemSchema = mongoose.Schema(
{
    name:{
        type: 'String',
        required: true,

    },
    price:{
        type: 'number',
        required: true,
    },
    category: {
        type: 'String',
        required: true,
    },
    details: {
        type: 'String',
        required: true,
    },
    image: {
        type: 'String',
        required: true,
    },




}

);
const AdditemForm = mongoose.model('AdditemForm', AdditemSchema);
module.exports = AdditemForm;

