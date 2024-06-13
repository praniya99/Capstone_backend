const express = require("express");
const router = express.Router();
// Insert User Controller
const HaircutServiceController = require("../Controller/HaircutServiceController");

router.get("/", HaircutServiceController.getAllHaircuts);
router.post("/", HaircutServiceController.addHaircuts);
router.get("/:id", HaircutServiceController.getById);
router.put("/:id", HaircutServiceController.updateHaircut);
router.delete("/:id", HaircutServiceController.deleteHaircut);


// Export
module.exports = router;
