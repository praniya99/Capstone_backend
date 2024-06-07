const AdditemForm=require('./Model/additemform.js');

const createAdditem = async (req, res,) => {
    try {
        console.log('Request body:', req.body);
        const user =await AdditemForm.create(req.body);
        res.status(200).json("Created SuccessFully");

    }
    catch (err) {
        console.log(err);
        res.status(500).json({message:err.message});

    }

}
module.exports = {createAdditem};


