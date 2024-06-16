const express = require("express");
const router = express.Router();
// Insert User Controller
const HaircolouringServiceController = require("../Controller/HaircolouringServiceController");

router.get("/", HaircolouringServiceController.getAllHaircolourings);
router.post("/", HaircolouringServiceController.addHaircolourings);
router.get("/:id", HaircolouringServiceController.getById);
router.put("/:id", HaircolouringServiceController.updateHaircolouring);
router.delete("/:id", HaircolouringServiceController.deleteHaircolouring);


// Export
module.exports = router;
