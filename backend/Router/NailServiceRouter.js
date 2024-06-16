const express = require("express");
const router = express.Router();
// Insert User Controller
const NailServiceController = require("../Controller/NailServiceController");

router.get("/", NailServiceController.getAllNails);
router.post("/", NailServiceController.addNails);
router.get("/:id", NailServiceController.getById);
router.put("/:id", NailServiceController.updateNail);
router.delete("/:id", NailServiceController.deleteNail);


// Export
module.exports = router;
