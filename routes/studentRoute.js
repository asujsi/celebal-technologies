const express = require("express");
const router = express.Router();
const studentController = require("../controllers/studentController");

router.post("/login", studentController.retrieveStudent);
router.get("/results", studentController.retrieveStudent);
router.get("/:id", studentController.retrieveStudent);
router.put("/update", studentController.updateStudent);

module.exports = router;
