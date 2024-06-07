const CheckoutData = require('../Models/checkout.model.js');

const createCheckout = async (req, res) => {
    try {
        console.log('Request body:', req.body);
        const checkout =await CheckoutData.create(req.body);
        res.status(200).json("Created SuccessFully");

    }
    catch (err) {
        console.log(err);
        res.status(500).json({message:err.message});

    }

}

module.exports = {createCheckout};