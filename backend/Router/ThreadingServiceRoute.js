const express = require("express");
const router = express.Router();
// Insert User Controller
const ThreadingServiceController = require("../Controller/ThreadingServiceController");

router.get("/", ThreadingServiceController.getAllThreadings);
router.post("/", ThreadingServiceController.addThreadings);
router.get("/:id", ThreadingServiceController.getById);
router.put("/:id", ThreadingServiceController.updateThreading);
router.delete("/:id", ThreadingServiceController.deleteThreading);


// Export
module.exports = router;
