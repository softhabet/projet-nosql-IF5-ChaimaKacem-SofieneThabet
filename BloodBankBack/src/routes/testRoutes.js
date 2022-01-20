const express = require("express");
const router = express.Router();
const testController = require("../controllers/testController");

//get test by id
router.get("/:id", testController.getTestById);

//create test
router.post("/",testController.createTest);

module.exports = router;