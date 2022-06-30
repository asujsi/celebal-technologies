const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");
const studentController = require("../controllers/studentController");

router.post("/signup", adminController.adminSignup);
router.post("/login", adminController.adminLogin);
router.post("/addStudent", studentController.createStudent);
router.put("/students/:id", studentController.updateStudent);
router.delete("/students/:id", studentController.deleteStudent);

module.exports = router;
