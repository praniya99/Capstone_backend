const express = require("express");
const router = express.Router();
// Insert User Controller
const MakeupServiceController = require("../Controller/MakeupServiceController");

router.get("/", MakeupServiceController.getAllMakeups);
router.post("/", MakeupServiceController.addMakeups);
router.get("/:id", MakeupServiceController.getById);
router.put("/:id", MakeupServiceController.updateMakeup);
router.delete("/:id", MakeupServiceController.deleteMakeup);


// Export
module.exports = router;
