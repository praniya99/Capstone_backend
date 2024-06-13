const express = require("express");
const router = express.Router();
// Insert User Controller
const BridalServiceController = require("../Controller/BridalServiceController");

router.get("/", BridalServiceController.getAllBridals);
router.post("/", BridalServiceController.addBridals);
router.get("/:id", BridalServiceController.getById);
router.put("/:id", BridalServiceController.updateBridal);
router.delete("/:id", BridalServiceController.deleteBridal);


// Export
module.exports = router;
