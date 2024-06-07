const mongoose = require('mongoose');
const CheckoutSchema = mongoose.Schema(
    {
    
        fname:{
            type: 'String',
            required: true
        },

        lname:{
            type: 'String',
            required: true
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
        city:{
            type: 'String',
            required: true
        }

    }

);

const CheckoutData = mongoose.model('CheckoutData',CheckoutSchema); 
module.exports = CheckoutData;