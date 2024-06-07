const Comment = require('../Models/comment.model.js');

const createComment = async (req, res) => {
    try {
        const comment =await Comment.create(req.body);
        res.status(200).json("Created SuccessFully");
    } 
    catch (err) {
        console.log(err);
        res.status(500).json({message:err.message});
    }

}
module.exports = { createComment };