const express = require("express");
const router = express.Router();
// Insert User Controller
const FacialServiceController = require("../Controller/FacialServiceController");

router.get("/", FacialServiceController.getAllFacials);
router.post("/", FacialServiceController.addFacials);
router.get("/:id", FacialServiceController.getById);
router.put("/:id", FacialServiceController.updateFacial);
router.delete("/:id", FacialServiceController.deleteFacial);


// Export
module.exports = router;
