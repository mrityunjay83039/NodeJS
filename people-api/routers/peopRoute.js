const express = require("express");
const router = express.Router();
const {getPeople, addPeople, editPeople} = require("../controllers/peopleController");

router.get("/", getPeople);
router.post("/", addPeople);
router.put("/:id", editPeople);

module.exports = router;