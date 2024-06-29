const mongoose = require('mongoose');
const UserSchema = mongoose.Schema(
    {
        fname:{
            type: 'String',
            required: true,

        },
        lname:{
            type: 'String',
            required: true,
            
        },
        age:{
            type: 'number',
            required: true,
            maxlength: 2,


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
        password: {
            type: 'string',
            required: true,
        }
        

    }
);
const Usersignup = mongoose.model('Usersignup', UserSchema);
module.exports = Usersignup;
