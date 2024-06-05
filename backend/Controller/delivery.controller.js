const DeliveryReg= require('../Models/delivery.model.js');

const createDeliver = async (req, res) => {
    try {
        const Deliver =await DeliveryReg.create(req.body);
        res.status(200).json("Created SuccessFully");

    }
    catch (err) {
        console.log(err);
        res.status(500).json({message:err.message});

    }

}

module.exports = { createDeliver };