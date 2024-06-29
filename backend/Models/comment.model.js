const mongoose = require('mongoose');
const CommentSchema = mongoose.Schema(
    {
        name:{
            type: 'String',
            required: true,
        },
        email:{
            type: 'String',
            required: true,
        },
        subject:{
            type: 'String',
            required: true,
        },
        massege:{
            type: 'String',
            required: true,
        }
            
        
        
    


    }
   
);
const Comment=mongoose.model('Comment', CommentSchema);
module.exports = Comment;