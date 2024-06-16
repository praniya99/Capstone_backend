// Controller to fetch services from all categories
const Bridal = require('../Models/BridalserviceModel');
const Haircut = require('../Models/HaircutServiceModel');
const Threading = require('../Models/ThreadingServiceModel');
const Facial = require('../Models/FacialServiceModel');
const Makeup = require('../Models/MakeupServiceModel');
const Haircolouring = require('../Models/HaircolouringServiceModel');
const Waxing = require('../Models/WaxingServiceModel');
const Nail = require('../Models/NailServiceModel');

const fetchAllServices = async (req, res) => {
    try {
        const [bridals, haircuts, threadings, facials, makeups, haircolourings, waxings, nails] = await Promise.all([
            Bridal.find(),
            Haircut.find(),
            Threading.find(),
            Facial.find(),
            Makeup.find(),
            Haircolouring.find(),
            Waxing.find(),
            Nail.find()
        ]);

        const allServices = {
            Bridals: bridals,
            Haircuts: haircuts,
            Threadings: threadings,
            Facials: facials,
            Makeups: makeups,
            Haircolourings: haircolourings,
            Waxings: waxings,
            Nails: nails
        };

        res.status(200).json(allServices);
    } catch (error) {
        console.error('Error fetching all services:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

module.exports = { fetchAllServices };
