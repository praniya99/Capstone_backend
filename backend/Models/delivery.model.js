const mongoose = require('mongoose');

const DeliveySchema=  mongoose.Schema(
    {
        fname:{
            type: 'String',
            required: true,
        },

        lname:{
            type: 'String',
            required: true,
        },
        dob:{
            type: Date,
            required: [true, 'Date of birth is required'],
        },
        gender:{
            type: 'String',
            required: true,
        },
        phoneNO:{
            type: 'number',
            required: true,
            maxlength: 10,
        },
        email: {
            type:'String',
            required: [true, 'Email is required'],
            unique: true,
            trim: true,
            match: [/.+@.+\..+/, 'Please enter a valid email address'],
        },
        address:{
            type: 'String',
            required: true,
        },
        addtionalcoment: {
            type: 'String',
            required: true,
        },







    }
);
const DeliveryReg = mongoose.model('DeliveryReg',DeliveySchema);
module.exports = DeliveryReg;
