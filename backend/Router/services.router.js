const express = require('express');
const router = express.Router();

const BridalServiceController = require('../Controller/BridalServiceController');
const HaircutServiceController = require('../Controller/HaircutServiceController');
const ThreadingServiceController=require('../Controller/ThreadingServiceController');
const FacialServiceController=require('../Controller/FacialServiceController');
const MakeupServiceController = require('../Controller/MakeupServiceController');
const HaircolouringServiceController = require('../Controller/HaircolouringServiceController');
const WaxingServiceController=require('../Controller/WaxingServiceController');
const NailServiceController=require('../Controller/NailServiceController');




router.post('/', async (req, res) => {
  const { category, servicename, serviceprice, hours ,minutes } = req.body;

  switch (category) {
    case 'Bridal':
      await BridalServiceController.addBridals(req, res);
      break;
    case 'Hair Cuts':
      await HaircutServiceController.addHaircuts(req, res);
      break;
    case 'Threading':
      await ThreadingServiceController.addThreadings(req, res);
      break;
    case 'Facial Cleanup':
      await FacialServiceController.addFacials(req, res);
      break;
    case 'Nails':
      await NailServiceController.addNails(req, res);
      break;
    case 'Waxing':
      await WaxingServiceController.addWaxings(req, res);
      break;
    case 'Hair Colouring':
      await HaircolouringServiceController.addHaircolourings(req, res);
      break;
    case 'Makeup':
      await MakeupServiceController.addMakeups(req, res);
      break;
    
    // Add more cases for other categories
    default:
      res.status(400).json({ message: 'Invalid category' });
  }
});



module.exports = router;