const BeauticiansReg = require('../Models/beauticians.model.js');


const createBeautician = async (req, res) => {
    try {
        const Beautician =await BeauticiansReg.create(req.body);
        res.status(200).json("Created SuccessFully");

    }
    catch (err) {
        console.log(err);
        res.status(500).json({message:err.message});

    }

}

module.exports = { createBeautician };