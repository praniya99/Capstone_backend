const mongoose = require('mongoose');
const BeauticiansSchema =mongoose.Schema(
    {
        fname:{
            type: 'String',
            required: true,

        },
        Lname:{
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
        study: {
            type: 'String',
            required: true,
        },
        qualify: {
            type: 'String',
            required: true,
        },
        experience: {
            type: 'String',
            required: true,
        },
        addtionalcoment: {
            type: 'String',
            required: true,
        },





    });
    const BeauticiansReg = mongoose.model('BeauticiansReg',BeauticiansSchema);
    module.exports = BeauticiansReg;