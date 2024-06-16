const express = require("express");
const router = express.Router();
// Insert User Controller
const HaircutServiceController = require("../Controller/WaxingServiceController");

router.get("/", WaxingServiceController.getAllHaircuts);
router.post("/", WaxingServiceController.addHaircuts);
router.get("/:id", WaxingServiceController.getById);
router.put("/:id", WaxingServiceController.updateHaircut);
router.delete("/:id", WaxingServiceController.deleteHaircut);


// Export
module.exports = router;
